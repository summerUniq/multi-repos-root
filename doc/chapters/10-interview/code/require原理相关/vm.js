const vm = require('vm')

const hello = 'prooo'

const str = 'console.log(hello)'

vm.runInThisContext(str)