let text="Visit abesec"
let n=text.search(/ABESEC/i)
let rep=text.replace("abesec","microsoft")
console.log(n)
console.log(rep)

const pattern=/e/
console.log(pattern.test("f"))

console.log(/t/.test("The best language is JS"))

console.log(/t/.exec("The best language is JS"))