import { isArray } from './utils';


export function min(argument) {
  if (argument == null) {
    return undefined;
  }
  if (isArray(argument)) {
    const minimums = argument.map(element => (isArray(element) ? Math.min(...element) : element));
    return Math.min(...minimums);
  }
  return Math.min(...arguments);
}

export function copy(argument) {
  if (argument == null) {
    return undefined;
  }
  if (isArray(argument)) {
    return argument.map(element => ({ ...element }));
  }
  return { ...argument };
}

export function reverseMerge(argument) {
  const reversedArray = [];
  if (argument == null) {
    return undefined;
  }
  Array.from(arguments).slice(0).reverse().map(element => reversedArray.push(...element));

  return reversedArray;
}

export function filterAttribs(argument) {
  if (argument == null) {
    return undefined;
  }
  const { a, b, ...filtered } = argument;
  return filtered;
}

