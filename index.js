const template = require('@babel/template').default
const generate = require('@babel/generator').default
const t = require('@babel/types')

const exportStatement = template.statement("exports.module.NAME = VALUE;")({
    NAME: t.identifier("not valid!"),
    VALUE: t.stringLiteral("some string"),
})

console.log(generate(exportStatement).code)