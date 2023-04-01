import {
  countOccurrences,
  countPeople,
  countTeams,
  countProduct,
  countDevelopers,
  countDataScientists,
  countWorkingstudent,
  countExternals,
} from "../utils/stringUtils";

describe("countOccurrences", () => {
  test("counts the number of occurrences of a pattern in a text", () => {
    const text1 = "This is a test text";
    const text2 =
      "This is a test text with multiple occurrences of the word test";
    const text3 = "";
    const pattern1 = /test/g;
    const pattern2 = /not in text/;
    expect(countOccurrences(text1, pattern1)).toBe(1);
    expect(countOccurrences(text1, pattern2)).toBe(0);
    expect(countOccurrences(text2, pattern1)).toBe(2);
    expect(countOccurrences(text3, pattern1)).toBe(0);
  });
});

describe("countPeople", () => {
  test("counts the number of people", () => {
    const text1 =
      "### Person 1\n### Person 2\n### Person 3\n- Person 4\n- Person 5";
    const text2 =
      "### Person 1\n### Person 2\n### Person 3\n- Person 4\n- Person 5\n  not a person";
    const text3 =
      "### Person 1\n### Person 2\n### Person 3\n### Person 4\n### Person 5";
    const text4 = "";
    expect(countPeople(text1)).toBe(5);
    expect(countPeople(text2)).toBe(5);
    expect(countPeople(text3)).toBe(5);
    expect(countPeople(text4)).toBe(0);
  });
});

describe("countTeams", () => {
  test("counts the number of teams", () => {
    const text1 = "## Team 1\n## Team 2\n## Team 3\n# Not a team";
    const text2 = "## Team 1\n## Team 2\n## Team 3\n## Team 4";
    const text3 = "";
    const text4 = "### Team 1\n### Team 2\n## Team 3\n# Not a team";
    expect(countTeams(text1)).toBe(3);
    expect(countTeams(text2)).toBe(4);
    expect(countTeams(text3)).toBe(0);
    expect(countTeams(text4)).toBe(1);
  });
});

describe("countProduct", () => {
  test("should return the correct number of product ppl", () => {
    const text1 = "(P) (P) (P)";
    const text2 = "(P) (p) (P)";
    const text3 = "(P) (P)";
    const text4 = "(p) (p)";
    const text5 = "";
    const text6 = "P P P";

    expect(countProduct(text1)).toBe(3);
    expect(countProduct(text2)).toBe(2);
    expect(countProduct(text3)).toBe(2);
    expect(countProduct(text4)).toBe(0);
    expect(countProduct(text5)).toBe(0);
    expect(countProduct(text6)).toBe(0);
  });
});

describe('countWorkingstudent', () => {
  test('should return the correct number of working students', () => {
    const text1 = '(WS) (WS) (WS)';
    const text2 = '(WS) (ws) (WS)';
    const text3 = '(WS) (WS)';
    const text4 = '(ws) (ws)';
    const text5 = '';
    const text6 = 'WS WS WS';

    expect(countWorkingstudent(text1)).toBe(3);
    expect(countWorkingstudent(text2)).toBe(2);
    expect(countWorkingstudent(text3)).toBe(2);
    expect(countWorkingstudent(text4)).toBe(0);
    expect(countWorkingstudent(text5)).toBe(0);
    expect(countWorkingstudent(text6)).toBe(0);
  });
});

describe('countDevelopers', () => {
  test('should return the correct number of developers', () => {
    const text1 = '(Dev) (Dev) (Dev)';
    const text2 = '(Dev) (dev) (Dev)';
    const text3 = '(Dev) (Dev)';
    const text4 = '(dev) (dev)';
    const text5 = '';
    const text6 = 'Dev Dev Dev';
    expect(countDevelopers(text1)).toBe(3);
    expect(countDevelopers(text2)).toBe(2);
    expect(countDevelopers(text3)).toBe(2);
    expect(countDevelopers(text4)).toBe(0);
    expect(countDevelopers(text5)).toBe(0);
    expect(countDevelopers(text6)).toBe(0);
  });
});

describe('countDataScientists', () => {
  test('should return the correct number of data scientists', () => {
    const text1 = '(DS) (DS) (DS)';
    const text2 = '(DS) (ds) (DS)';
    const text3 = '(DS) (DS)';
    const text4 = '(ds) (ds)';
    const text5 = '';
    const text6 = 'DS DS DS';
    expect(countDataScientists(text1)).toBe(3);
    expect(countDataScientists(text2)).toBe(2);
    expect(countDataScientists(text3)).toBe(2);
    expect(countDataScientists(text4)).toBe(0);
    expect(countDataScientists(text5)).toBe(0);
    expect(countDataScientists(text6)).toBe(0);
  });
});

describe('countExternals', () => {
  test('should return the correct number of occurrences', () => {
    const text1 = '(F) (F) (F)';
    const text2 = '(F) (f) (F)';
    const text3 = '(F) (F)';
    const text4 = '(f) (f)';
    const text5 = '';
    const text6 = 'F F F';
    expect(countExternals(text1)).toBe(3);
    expect(countExternals(text2)).toBe(2);
    expect(countExternals(text3)).toBe(2);
    expect(countExternals(text4)).toBe(0);
    expect(countExternals(text5)).toBe(0);
    expect(countExternals(text6)).toBe(0);
  });
});
