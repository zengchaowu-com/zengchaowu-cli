#!/usr/bin/env node

const { inquirer } = require('@zengchaowu/cli-shared-utils')

// 选择工作流
inquirer.prompt([
    {
        type: 'input', // 问题类型
        name: 'name', // 数据属性名
        message: '名称', // 提示信息
        default: 'Rogan' // 默认值
    }
]).then(answers => {
    // 处理结果
    console.log(`你的名字: `, answers.name)

})