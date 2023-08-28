export function sortByLastModifiedDate<T extends {lastModifiedDate: string}>(
  a: T,
  b: T,
  order: "asc" | "desc" = "desc"
): -1 | 0 | 1 {
  const aLmd = parseInt(a.lastModifiedDate);
  const bLmd = parseInt(b.lastModifiedDate);
  if (aLmd < bLmd) return order === "asc" ? -1 : 1;
  if (aLmd > bLmd) return order === "asc" ? 1 : -1;
  return 0;
}
