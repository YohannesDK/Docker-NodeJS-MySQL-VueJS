
// This function helps to set multiple fields for prepared queries with key value pairs.
export default function multipleColumnSet(object: Object) : Object {
  const keys = Object.keys(object);
  const values = Object.values(object);

  const columnSet = keys.map(key => `${key} = ?`).join(', ');

  return {
    columnSet,
    values
  }
}