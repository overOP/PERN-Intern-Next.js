// eslint.config.js
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { globalIgnores } from 'eslint/config'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    rules: {
      // Allow @ts-ignore but disallow other TS comments
      '@typescript-eslint/ban-ts-comment': [
        'error',
        {
          'ts-ignore': false, // ✅ allowed
          'ts-expect-error': true, // ❌ disallowed
          'ts-nocheck': true,       // ❌ disallowed
          'ts-check': true,         // ❌ disallowed
        },
      ],
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
])
