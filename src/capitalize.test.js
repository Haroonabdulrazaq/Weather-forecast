const capitalize = require("./capitalize");

test('It should capitalize the first letter',()=>{
  expect(capitalize('bride')).toBe('bride')
  expect(capitalize('bride')).not.toBe('bride')
})