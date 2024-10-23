/** These is use for arranging array in `lib/calculations/grades` when using the `Object.entries()` method. */
export default function subjectsIndexIdentifier(name: string) {
  let index = -1;
  const identifiers = ['first', 'second', 'third', 'fourth'] as const;

  identifiers.forEach((identifier, _index) => {
    if (name.includes(identifier)) return (index = _index);
  });

  return index;
}
