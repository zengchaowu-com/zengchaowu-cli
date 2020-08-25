#!/usr/bin/env node

// Check node version before requiring/doing anything else
// The user may be on a very old node version

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