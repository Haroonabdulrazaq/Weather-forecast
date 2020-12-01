const capitalize = require("./capitalize");

test('It should capitalize the first letter',()=>{
  expect(capitalize('bride')).toBe('Bride')
  expect(capitalize('bride')).not.toBe('bride')
})

// test('It should be a string', ()=>{
//   expect(capitalize('bride')).toMatch(capitalize(String))
// })