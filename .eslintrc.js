module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/script-indent': ['error', 2, { // script标签缩进设置
      baseIndent: 1,
      switchCase: 0,
      ignores: [],
    }],
    'no-param-reassign': 'off', // 禁止对函数的参数重新赋值
    'no-nested-ternary': 'off', // 禁止使用嵌套的三元表达式
    'no-plusplus': 'off', // 禁止使用 ++ 或 --
    'no-underscore-dangle': 'off', // @off 下划线在变量名中很常用
    'no-undef': 'off', // 禁止使用未定义的变量
    'no-shadow': 'off', // @off 很多时候函数的形参和传参是同名的
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        indent: 'off',
      },
    },
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
};
