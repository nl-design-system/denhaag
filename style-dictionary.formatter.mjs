const stringSort = (a, b) => (a === b ? 0 : a > b ? 1 : -1);
const sortByName = (a, b) => stringSort(a.name, b.name);

export default ({ dictionary }) => JSON.stringify(dictionary.allTokens.sort(sortByName), null, '  ');
