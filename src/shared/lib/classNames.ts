type Mods = Record<string, boolean | string>

export const classNames = (
  className: string,
  mods: Mods = {},
  additional: Array<string | undefined> = []
): string =>
  [
    className,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([className]) => className)
  ].join(' ')
