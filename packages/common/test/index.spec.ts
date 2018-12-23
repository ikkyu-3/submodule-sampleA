import common = require("../src/index");

test("'common function'が取得できる", () => {
  expect(common()).toBe("common function");
});
