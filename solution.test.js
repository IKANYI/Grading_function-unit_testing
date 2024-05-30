/*const { stemGrading } = require("./solution")
test("test languageGrading to grade input"), () => {
  expect(stemGrading(80)).tobe('A');
} */
const { stemGrading, religiousGrading, languageGrading, calculateGradeAndAverage } = require('./solution');

test('test stemGrading to grade input', () => {
  expect(stemGrading(80)).toBe('A');
  expect(stemGrading(65)).toBe('B');
  expect(stemGrading(55)).toBe('C');
  expect(stemGrading(45)).toBe('Pass');
  expect(stemGrading(30)).toBe('Sup');
});

test("test religiousGrading to grade input", ()=> {
  expect(religiousGrading(80)).toBe('A');
  expect(religiousGrading(70)).toBe('B');
  expect(religiousGrading(60)).toBe('C');
  expect(religiousGrading(50)).toBe('Pass');
  expect(religiousGrading(49)).toBe('Sup');
});
test("test languageGrading to grade input", ()=> {
  expect(languageGrading(75)).toBe('A');
  expect(languageGrading(66)).toBe('B');
  expect(languageGrading(58)).toBe('C');
  expect(languageGrading(47)).toBe('Pass');
  expect(languageGrading(38)).toBe('Sup');
});

test("test calculateGradeAndAverage to grade input", ()=> {
  expect(calculateGradeAndAverage({name: "Dennis Doe", math: 80, eng: 65, kis: 48, phy: 67, che: 56, re:89, comp: 82})).toEqual({name: "Dennis Doe", math: "A", eng: "B", kis: "Pass", phy: "B", che: "C", re: "A", comp: "A", average: 69});
});