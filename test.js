const { Tuple } = require('./dist/index')

const personShape = Tuple.initShape([String, Number, Boolean])
const person = personShape.create(new String('Eve'), new Number(43), new Boolean(true))
console.log(person)