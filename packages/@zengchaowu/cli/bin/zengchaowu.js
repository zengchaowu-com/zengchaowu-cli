#!/usr/bin/env node

// Check node version before requiring/doing anything else
// The user may be on a very old node version

const { chalk, leven, semver } = require('@zengchaowu/cli-shared-utils')

const program = require('commander')