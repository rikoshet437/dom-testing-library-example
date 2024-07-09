import stylistic from '@stylistic/eslint-plugin'
import globals from 'globals'
import pluginJs from '@eslint/js'

export default [
  {
    languageOptions: { globals: globals.browser },
    plugins: {
      '@stylistic': stylistic,
    },
  },
  pluginJs.configs.recommended,
  stylistic.configs['recommended-flat'],
]
