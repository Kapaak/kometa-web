import ReactDOMServer from 'react-dom/server';

import { withTheme } from '~/ui/theme';

export function convertComponentToNode(component: JSX.Element) {
  const node = document.createElement('div');
  node.innerHTML = ReactDOMServer.renderToString(withTheme(component));
  return node;
}
