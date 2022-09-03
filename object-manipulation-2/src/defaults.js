/* exported defaults */

// Goal: modify the target object with the source object
// take target object and source object
// check if source exists in target
// if yes ignore
// if no then add source

function defaults(target, source) {
  for (var keys in source) {
    if (target[keys] === undefined) {
      target[keys] = source[keys];
    }
  }
}
