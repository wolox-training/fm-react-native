import { isArray } from './utils';

export function min(argument) {
  if (argument == null) {
    return undefined
  } else {
    if (isArray(argument)) {
      let minimums = argument.map(element => isArray(element) ? Math.min(...element) : element)
      return Math.min(...minimums)
    } else {
      return Math.min(...arguments)
    }
  }
}

export function copy(argument) {
  if (argument == null) {
    return undefined
  } else {
    if (isArray(argument)){
      return argument.map(element => ({...element}))
    }
    return {...argument }
  }
}

export function reverseMerge(argument) {
  let reversedArray = []
  if (argument == null) {
    return undefined
  } else {
    Array.from(arguments).slice(0).reverse().map(element => reversedArray.push(...element))
  }
  return reversedArray
}

export function filterAttribs (argument) {
  if (argument == null) {
    return undefined
  } else {
    let {a,b, ...filtered} = argument
    return filtered
  }
}
