export const getShortName = (name: string) => {
  if (!name) return;

  const splittedName = name.split(' ');

  const firstLetter = splittedName[0][0];
  const secondLetter = splittedName[1][0];
  const shortName = firstLetter + secondLetter;

  return shortName;
};
