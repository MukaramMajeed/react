/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  getPropertyInfo,
  shouldIgnoreValue,
  shouldSkipAttribute,
  shouldTreatAttributeValueAsNull,
  isAttributeNameSafe,
} from '../shared/DOMProperty';

/**
 * Get the value for a property on a node. Only used in DEV for SSR validation.
 * The "expected" argument is used as a hint of what the expected value is.
 * Some properties have multiple equivalent values.
 */
export function getValueForProperty(node, name, expected) {
  if (__DEV__) {
    const propertyInfo = getPropertyInfo(name);
    if (propertyInfo) {
      if (propertyInfo.mustUseProperty) {
        return node[propertyInfo.propertyName];
      } else {
        const attributeName = propertyInfo.attributeName;

        let stringValue = null;

        if (propertyInfo.hasOverloadedBooleanValue) {
          if (node.hasAttribute(attributeName)) {
            const value = node.getAttribute(attributeName);
            if (value === '') {
              return true;
            }
            if (shouldIgnoreValue(propertyInfo, expected)) {
              return value;
            }
            if (value === '' + expected) {
              return expected;
            }
            return value;
          }
        } else if (node.hasAttribute(attributeName)) {
          if (shouldIgnoreValue(propertyInfo, expected)) {
            // We had an attribute but shouldn't have had one, so read it
            // for the error message.
            return node.getAttribute(attributeName);
          }
          if (propertyInfo.hasBooleanValue) {
            // If this was a boolean, it doesn't matter what the value is
            // the fact that we have it is the same as the expected.
            return expected;
          }
          // Even if this property uses a namespace we use getAttribute
          // because we assume its namespaced name is the same as our config.
          // To use getAttributeNS we need the local name which we don't have
          // in our config atm.
          stringValue = node.getAttribute(attributeName);
        }

        if (shouldIgnoreValue(propertyInfo, expected)) {
          return stringValue === null ? expected : stringValue;
        } else if (stringValue === '' + expected) {
          return expected;
        } else {
          return stringValue;
        }
      }
    }
  }
}

/**
 * Get the value for a attribute on a node. Only used in DEV for SSR validation.
 * The third argument is used as a hint of what the expected value is. Some
 * attributes have multiple equivalent values.
 */
export function getValueForAttribute(node, name, expected) {
  if (__DEV__) {
    if (!isAttributeNameSafe(name)) {
      return;
    }
    if (!node.hasAttribute(name)) {
      return expected === undefined ? undefined : null;
    }
    const value = node.getAttribute(name);
    if (value === '' + expected) {
      return expected;
    }
    return value;
  }
}

/**
 * Sets the value for a property on a node.
 *
 * @param {DOMElement} node
 * @param {string} name
 * @param {*} value
 */
export function setValueForProperty(node, name, value, isCustomComponentTag) {
  if (shouldSkipAttribute(name, isCustomComponentTag)) {
    return;
  }
  const propertyInfo = isCustomComponentTag ? null : getPropertyInfo(name);
  if (shouldTreatAttributeValueAsNull(name, value, isCustomComponentTag)) {
    value = null;
  }
  // If the prop is in the special list, treat it as a simple attribute.
  if (!propertyInfo) {
    if (isAttributeNameSafe(name)) {
      const attributeName = name;
      if (value == null) {
        node.removeAttribute(attributeName);
      } else {
        node.setAttribute(attributeName, '' + value);
      }
    }
    return;
  }
  const {
    hasBooleanValue,
    hasOverloadedBooleanValue,
    mustUseProperty,
  } = propertyInfo;
  if (mustUseProperty) {
    const {propertyName} = propertyInfo;
    if (shouldIgnoreValue(propertyInfo, value)) {
      node[propertyName] = hasBooleanValue ? false : '';
    } else {
      // Contrary to `setAttribute`, object properties are properly
      // `toString`ed by IE8/9.
      node[propertyName] = value;
    }
    return;
  }
  // The rest are treated as attributes with special cases.
  const {attributeName, attributeNamespace} = propertyInfo;
  if (shouldIgnoreValue(propertyInfo, value)) {
    node.removeAttribute(attributeName);
  } else {
    let attributeValue;
    if (hasBooleanValue || (hasOverloadedBooleanValue && value === true)) {
      attributeValue = '';
    } else {
      // `setAttribute` with objects becomes only `[object]` in IE8/9,
      // ('' + value) makes it output the correct toString()-value.
      attributeValue = '' + value;
    }
    if (attributeNamespace) {
      node.setAttributeNS(attributeNamespace, attributeName, attributeValue);
    } else {
      node.setAttribute(attributeName, attributeValue);
    }
  }
}
