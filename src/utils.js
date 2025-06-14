function toCamelCase(str) {
  return str
    .replace(/[^a-zA-Z0-9 ]/g, '')
    .replace(/\s(.)/g, (match, group1) => group1.toUpperCase())
    .replace(/\s/g, '')
    .replace(/^(.)/, (match, group1) => group1.toLowerCase());
}
