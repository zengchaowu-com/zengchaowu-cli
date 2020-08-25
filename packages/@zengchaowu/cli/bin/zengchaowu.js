#!/usr/bin/env node

// Check node version before requiring/doing anything else
// The user may be on a very old node version

const { chalk, leven, semver, commander } = require('@zengchaowu/cli-shared-utils')

const program = commander

program
    .version(`@zengchaowu/cli ${require('../package').version}`)
    .usage('<command> [options]')

program
    .command('create <project-name>')
    .option('-p, --platform', 'Target platform')
    .action((name, cmd) => {
        const options = cleanArgs(cmd)

        if (minimist(process.argv.slice(3))._.length > 1) {
            console.log(chalk.yellow('\n Info: You provided more than one argument. The first one will be used as the app\'s name, the rest are ignored.'))
        }
        // --git makes commander to default git to true
        if (process.argv.includes('-g') || process.argv.includes('--git')) {
            options.forceGit = true
        }
        require('../lib/create')(name, options)
    })


program.parse(process.argv)