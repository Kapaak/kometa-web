import { JSX } from 'react';

import ReactDOMServer from 'react-dom/server';

import { withTheme } from '~/ui/theme';

export function convertComponentToNode(component: JSX.Element) {
  const node = document.createElement('div');
  node.innerHTML = ReactDOMServer.renderToString(withTheme(component));
  return node;
}

export function convertArrayToBooleanObject(
  array: string[]
): Record<string, boolean> {
  return array?.reduce(
    (acc, item) => {
      acc[item] = true;
      return acc;
    },
    {} as Record<string, boolean>
  );
}

export function convertBooleanObjectToArray(
  object: Record<string, boolean>
): string[] {
  return Object.keys(object).filter((key) => object[key]);
}
