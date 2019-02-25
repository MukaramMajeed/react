jest.useRealTimers();
const React = require('react');
const ReactNoop = require('react-noop-renderer');

describe('act', () => {
  it('can use act to flush effects', async () => {
    function App(props) {
      React.useEffect(props.callback);
      return null;
    }

    let called = false;
    ReactNoop.act(() => {
      ReactNoop.render(
        <App
          callback={() => {
            called = true;
          }}
        />
      );
    });
    ReactNoop.flush();
    expect(called).toBe(true);
  });

  it('should work with async/await', async () => {
    function App() {
      let [ctr, setCtr] = React.useState(0);
      async function someAsyncFunction() {
        ReactNoop.yield('stage 1');
        await null;
        ReactNoop.yield('stage 2');
        setCtr(1);
      }
      React.useEffect(() => {
        someAsyncFunction();
      }, []);
      return ctr;
    }
    await ReactNoop.act(async () => {
      ReactNoop.act(() => {
        ReactNoop.render(<App />);
      });
      await null;
      expect(ReactNoop.flush()).toEqual(['stage 1']);
    });
    expect(ReactNoop.flush()).toEqual(['stage 2']);
    expect(ReactNoop.getChildren()).toEqual([{text: '1', hidden: false}]);
  });
});
