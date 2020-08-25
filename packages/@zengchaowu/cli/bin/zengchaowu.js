#!/usr/bin/env node

// Check node version before requiring/doing anything else
// The user may be on a very old node version

const { chalk, leven, semver, commander } = require('@zengchaowu/cli-shared-utils')

const program = commander

const package = require('../package')

program
    .version(`${package.name} ${package.version}`)
    .usage('<platform> [ios, android, nuxt, egg]')

program
    .action(() => {
        tools = process.argv.slice(2, 3)
        if (tools.length > 0) {
            eval(`require('../lib/${tools}')`)
        }
    })


program.parse(process.argv)