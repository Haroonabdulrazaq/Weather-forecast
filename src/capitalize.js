const capitalize = (string)=>{
  let firstLetter = string[0].toUpperCase()
 
  let others = string.slice(1)
  return firstLetter.concat(others)
}
console.log(capitalize("brider shower"))


module.exports = capitalize