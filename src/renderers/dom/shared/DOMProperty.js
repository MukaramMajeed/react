/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule DOMProperty
 */

'use strict';

var invariant = require('fbjs/lib/invariant');
if (__DEV__) {
  var lowPriorityWarning = require('lowPriorityWarning');
  var warnedAboutImplicitToString = {};
}

// These attributes should be all lowercase to allow for
// case insensitive checks
var RESERVED_PROPS = {
  children: true,
  dangerouslysetinnerhtml: true,
  autofocus: true,
  defaultvalue: true,
  defaultchecked: true,
  innerhtml: true,
  suppresscontenteditablewarning: true,
  onfocusin: true,
  onfocusout: true,
  style: true,
};

function checkMask(value, bitmask) {
  return (value & bitmask) === bitmask;
}

var DOMPropertyInjection = {
  /**
   * Mapping from normalized, camelcased property names to a configuration that
   * specifies how the associated DOM property should be accessed or rendered.
   */
  MUST_USE_PROPERTY: 0x1,
  HAS_BOOLEAN_VALUE: 0x4,
  HAS_NUMERIC_VALUE: 0x8,
  HAS_POSITIVE_NUMERIC_VALUE: 0x10 | 0x8,
  HAS_OVERLOADED_BOOLEAN_VALUE: 0x20,

  /**
   * Inject some specialized knowledge about the DOM. This takes a config object
   * with the following properties:
   *
   * Properties: object mapping DOM property name to one of the
   * DOMPropertyInjection constants or null. If your attribute isn't in here,
   * it won't get written to the DOM.
   *
   * DOMAttributeNames: object mapping React attribute name to the DOM
   * attribute name. Attribute names not specified use the **lowercase**
   * normalized name.
   *
   * DOMAttributeNamespaces: object mapping React attribute name to the DOM
   * attribute namespace URL. (Attribute names not specified use no namespace.)
   *
   * DOMPropertyNames: similar to DOMAttributeNames but for DOM properties.
   * Property names not specified use the normalized name.
   *
   * DOMMutationMethods: Properties that require special mutation methods. If
   * `value` is undefined, the mutation method should unset the property.
   *
   * @param {object} domPropertyConfig the config as described above.
   */
  injectDOMPropertyConfig: function(domPropertyConfig) {
    var Injection = DOMPropertyInjection;
    var Properties = domPropertyConfig.Properties || {};
    var DOMAttributeNamespaces = domPropertyConfig.DOMAttributeNamespaces || {};
    var DOMAttributeNames = domPropertyConfig.DOMAttributeNames || {};
    var DOMMutationMethods = domPropertyConfig.DOMMutationMethods || {};

    for (var propName in Properties) {
      invariant(
        !DOMProperty.properties.hasOwnProperty(propName),
        "injectDOMPropertyConfig(...): You're trying to inject DOM property " +
          "'%s' which has already been injected. You may be accidentally " +
          'injecting the same DOM property config twice, or you may be ' +
          'injecting two configs that have conflicting property names.',
        propName,
      );

      var lowerCased = propName.toLowerCase();
      var propConfig = Properties[propName];

      var propertyInfo = {
        attributeName: lowerCased,
        attributeNamespace: null,
        propertyName: propName,
        mutationMethod: null,

        mustUseProperty: checkMask(propConfig, Injection.MUST_USE_PROPERTY),
        hasBooleanValue: checkMask(propConfig, Injection.HAS_BOOLEAN_VALUE),
        hasNumericValue: checkMask(propConfig, Injection.HAS_NUMERIC_VALUE),
        hasPositiveNumericValue: checkMask(
          propConfig,
          Injection.HAS_POSITIVE_NUMERIC_VALUE,
        ),
        hasOverloadedBooleanValue: checkMask(
          propConfig,
          Injection.HAS_OVERLOADED_BOOLEAN_VALUE,
        ),
      };
      invariant(
        propertyInfo.hasBooleanValue +
          propertyInfo.hasNumericValue +
          propertyInfo.hasOverloadedBooleanValue <=
          1,
        'DOMProperty: Value can be one of boolean, overloaded boolean, or ' +
          'numeric value, but not a combination: %s',
        propName,
      );

      if (DOMAttributeNames.hasOwnProperty(propName)) {
        var attributeName = DOMAttributeNames[propName];

        propertyInfo.attributeName = attributeName;

        // Use the lowercase form of the attribute name to prevent
        // badly cased React attribute alises from writing to the DOM.
        DOMProperty.aliases[attributeName.toLowerCase()] = true;
      }

      if (DOMAttributeNamespaces.hasOwnProperty(propName)) {
        propertyInfo.attributeNamespace = DOMAttributeNamespaces[propName];
      }

      if (DOMMutationMethods.hasOwnProperty(propName)) {
        propertyInfo.mutationMethod = DOMMutationMethods[propName];
      }

      // Downcase references to whitelist properties to check for membership
      // without case-sensitivity. This allows the whitelist to pick up
      // `allowfullscreen`, which should be written using the property configuration
      // for `allowFullscreen`
      DOMProperty.properties[propName] = propertyInfo;
    }
  },
};

/* eslint-disable max-len */
var ATTRIBUTE_NAME_START_CHAR =
  ':A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD';
/* eslint-enable max-len */

/**
 * DOMProperty exports lookup objects that can be used like functions:
 *
 *   > DOMProperty.isValid['id']
 *   true
 *   > DOMProperty.isValid['foobar']
 *   undefined
 *
 * Although this may be confusing, it performs better in general.
 *
 * @see http://jsperf.com/key-exists
 * @see http://jsperf.com/key-missing
 */
var DOMProperty = {
  ID_ATTRIBUTE_NAME: 'data-reactid',
  ROOT_ATTRIBUTE_NAME: 'data-reactroot',

  ATTRIBUTE_NAME_START_CHAR: ATTRIBUTE_NAME_START_CHAR,
  ATTRIBUTE_NAME_CHAR: ATTRIBUTE_NAME_START_CHAR +
    '\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040',

  /**
   * Map from property "standard name" to an object with info about how to set
   * the property in the DOM. Each object contains:
   *
   * attributeName:
   *   Used when rendering markup or with `*Attribute()`.
   * attributeNamespace
   * propertyName:
   *   Used on DOM node instances. (This includes properties that mutate due to
   *   external factors.)
   * mutationMethod:
   *   If non-null, used instead of the property or `setAttribute()` after
   *   initial render.
   * mustUseProperty:
   *   Whether the property must be accessed and mutated as an object property.
   * hasBooleanValue:
   *   Whether the property should be removed when set to a falsey value.
   * hasNumericValue:
   *   Whether the property must be numeric or parse as a numeric and should be
   *   removed when set to a falsey value.
   * hasPositiveNumericValue:
   *   Whether the property must be positive numeric or parse as a positive
   *   numeric and should be removed when set to a falsey value.
   * hasOverloadedBooleanValue:
   *   Whether the property can be used as a flag as well as with a value.
   *   Removed when strictly equal to false; present without a value when
   *   strictly equal to true; present with a value otherwise.
   */
  properties: {},

  /**
   * Some attributes are aliased for easier use within React. We don't
   * allow direct use of these attributes. See DOMAttributeNames in
   * HTMLPropertyConfig and SVGPropertyConfig.
   */
  aliases: {},

  /**
   * Checks whether a property name is a writeable attribute.
   * @method
   */
  shouldSetAttribute: function(name, value) {
    if (DOMProperty.isReservedProp(name)) {
      return false;
    }

    if (value === null) {
      return true;
    }

    var lowerCased = name.toLowerCase();

    // Prevent aliases, and badly cased aliases like `class` or `cLASS`
    // from showing up in the DOM
    if (DOMProperty.aliases.hasOwnProperty(lowerCased)) {
      return false;
    }

    var propertyInfo = DOMProperty.properties[name];

    switch (typeof value) {
      case 'boolean':
        if (propertyInfo) {
          return true;
        }
        var prefix = lowerCased.slice(0, 5);
        return prefix === 'data-' || prefix === 'aria-';
      case 'undefined':
      case 'number':
      case 'string':
        return true;
      case 'object':
        // Allow HAS_BOOLEAN_VALUE to coerce to true
        if (propertyInfo && propertyInfo.hasBooleanValue) {
          return true;
        }
        // Only value prop allows arrays.
        if (name === 'value' && Array.isArray(value)) {
          return true;
        }
        // This could be a custom class, e.g. URI, that's intentionally string-ish.
        // TODO: consider other heuristics.
        if (value instanceof String) {
          return true;
        }
        // If it didn't define a custom toString (an array doesn't count), skip.
        if (
          value.toString === Object.prototype.toString ||
          Array.isArray(value)
        ) {
          return false;
        }
        // Allow objects with custom toString.
        // This is not ideal and added for backward compat.
        if (__DEV__) {
          if (!warnedAboutImplicitToString[name]) {
            warnedAboutImplicitToString[name] = true;
            lowPriorityWarning(
              false,
              'The `' +
                name +
                '` prop was given an object with a custom toString() method. ' +
                'This works in React 16, but will stop working in React 17. Instead, you ' +
                'can pass the result of calling toString() on it manually. Alternatively, ' +
                'you can make the passed object extend String, and define a valueOf() method ' +
                'on it, which React will call to get the string value.',
            );
          }
        }
        return true;
      default:
        return false;
    }
  },

  getPropertyInfo(name) {
    return DOMProperty.properties.hasOwnProperty(name)
      ? DOMProperty.properties[name]
      : null;
  },

  /**
   * Checks to see if a property name is within the list of properties
   * reserved for internal React operations. These properties should
   * not be set on an HTML element.
   *
   * @private
   * @param {string} name
   * @return {boolean} If the name is within reserved props
   */
  isReservedProp(name) {
    return RESERVED_PROPS.hasOwnProperty(name.toLowerCase());
  },

  injection: DOMPropertyInjection,
};

module.exports = DOMProperty;
