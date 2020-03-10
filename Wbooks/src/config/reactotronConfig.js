import Reactotron, { trackGlobalErrors, asyncStorage, overlay } from 'reactotron-react-native';
import apisaucePlugin from 'reactotron-apisauce';
import { reactotronRedux } from 'reactotron-redux';
import { NativeModules } from 'react-native';

if (__DEV__) {
  const { scriptURL } = NativeModules.SourceCode;
  const scriptHostname = scriptURL.split('://')[1].split(':')[0];
  Reactotron.configure({ name: 'papajohns', host: scriptHostname })
    .use(trackGlobalErrors())
    .use(apisaucePlugin())
    .use(reactotronRedux())
    .use(asyncStorage())
    .use(overlay())
    .connect();
  // eslint-disable-next-line no-console
  console.tron = {
    log: (...args) => Reactotron.logImportant(...args),
    clear: () => Reactotron.clear(),
    customCommand: ({ command, handler, title, description }) =>
      Reactotron.onCustomCommand({
        command,
        handler,
        title,
        description
      }),
    display: ({ name, value, preview, image }) =>
      Reactotron.display({
        name: name || 'DISPLAY',
        value,
        preview: preview || 'Click para mostrar detalle',
        important: true,
        image
      })
  };
}

export default Reactotron;
