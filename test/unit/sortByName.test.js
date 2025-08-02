const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    expect(
      sorting.sortByName([
        "Гарри Поттер",
        "Властелин Колец",
        "Волшебник изумрудного города",
      ])
    ).toEqual([
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ]);
  });
});

describe("Books names test suit", () => {
  it("Books names should not be sorted if contain repetitions", () => {
    expect(
      sorting.sortByName([
        "Властелин Колец",
        "Гарри Поттер",
        "Властелин Колец",
        "Волшебник изумрудного города",
      ])
    ).toEqual([
      "Властелин Колец",
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ]);
  });
});

it("Achieving 100% code coverage by tests", () => {
  const input = [
    "Властелин Колец",
    "Властелин Колец",
    "Властелин Колец",
  ];
  const expected = [
    "Властелин Колец",
    "Властелин Колец",
    "Властелин Колец",
  ];
  const output = sorting.sortByName(input);
  expect(output).toEqual(expected);
});