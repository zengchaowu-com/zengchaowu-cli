#!/usr/bin/env node

const { commander } = require('@zengchaowu/cli-shared-utils')

const program = commander
const package = require('../package')

program
    .version(`${package.name} ${package.version}`)
    .usage('<platform> [ios, android, nuxt, egg]')

program
    .action(() => {
        file = process.argv.slice(2, 3)
        if (file.length > 0) {
            eval(`require('./${file}')`)
        } else {
            program.outputHelp()
        }
    })

program.parse(process.argv)