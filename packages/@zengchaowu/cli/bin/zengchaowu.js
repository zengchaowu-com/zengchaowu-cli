#!/usr/bin/env node

// Check node version before requiring/doing anything else
// The user may be on a very old node version

const { chalk, leven, semver, commander } = require('@zengchaowu/cli-shared-utils')

const program = commander

const package = require('../package')

program
    .version(`${package.name} ${package.version}`)
    .usage('<command> [options]')

program
    .command('create <project-name>')
    .option('-p, --platform', 'target platform')
    .option('-t, --type', 'project type')
    .action((name, cmd) => {
        const options = cleanArgs(cmd)
        require('../lib/create')(name, options)
    })


program.parse(process.argv)

function camelize(str) {
    return str.replace(/-(\w)/g, (_, c) => c ? c.toUpperCase() : '')
}

function cleanArgs(cmd) {
    const args = {}
    cmd.options.forEach(o => {
        const key = camelize(o.long.replace(/^--/, ''))
        if (typeof cmd[key] !== 'function' && typeof cmd[key] !== 'undefined') {
            args[key] = cmd[key]
        }
    })
    return args
}