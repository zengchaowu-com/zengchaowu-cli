#!/usr/bin/env node

// Check node version before requiring/doing anything else
// The user may be on a very old node version

const { chalk, semver } = require('@zengchaowu/cli-shared-utils')
const requiredVersion = require('../package.json').engines.node
const leven = require('leven')

console.log(requiredVersion)