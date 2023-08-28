export function enumFromStringValue<T>(
  enm: {[s: string]: T},
  value: string,
  defaultValue?: T
): T | undefined {
  return (Object.values(enm) as unknown as string[]).includes(value)
    ? (value as unknown as T)
    : defaultValue;
}

export default enumFromStringValue;
