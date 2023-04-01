export function countOccurrences(text: string, pattern: RegExp): number {
  let count = (text.match(pattern) || []).length;
  return count;
}

export function countTeams(text: string): number {
  const pattern = /^##(?=[^#])/gm;
  return countOccurrences(text, pattern);
}

export function countPeople(text: string): number {
  const patternSubheading3 = /^###(?=[^#])/gm;
  const patternDash = /^-/gm;
  return (
    countOccurrences(text, patternSubheading3) +
    countOccurrences(text, patternDash)
  );
}

export function countProduct(text: string): number {
  const pattern = /\(P\)/g;
  return countOccurrences(text, pattern);
}

export function countWorkingstudent(text: string): number {
  const pattern = /\(WS\)/g;
  return countOccurrences(text, pattern);
}

export function countDevelopers(text: string): number {
  const pattern = /\(Dev\)/g;
  return countOccurrences(text, pattern);
}

export function countDataScientists(text: string): number {
  const pattern = /\(DS\)/g;
  return countOccurrences(text, pattern);
}

export function countExternals(text: string): number {
  const pattern = /\(F\)/g;
  return countOccurrences(text, pattern);
}

