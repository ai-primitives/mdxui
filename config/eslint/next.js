import js from '@eslint/js'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import nextPlugin from '@next/eslint-plugin-next'
import eslintConfigPrettier from 'eslint-config-prettier'

export const nextJsConfig = [
  js.configs.recommended,
  eslintConfigPrettier,
  {
    files: ['app/**/*.{ts,tsx}', 'pages/**/*.{ts,tsx}'],
    ignores: [
      '**/*.d.ts',
      '.next/**/*',
      'node_modules/**/*',
      'dist/**/*',
      '**/static/chunks/**/*',
      '**/_buildManifest.js',
      '**/_ssgManifest.js'
    ],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: '.',
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        React: 'readonly',
        JSX: 'readonly',
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        self: 'readonly',
        URL: 'readonly',
        URLSearchParams: 'readonly',
        Blob: 'readonly',
        FormData: 'readonly',
        FileReader: 'readonly',
        XMLHttpRequest: 'readonly',
        trustedTypes: 'readonly',
        ActiveXObject: 'readonly',
        Bun: 'readonly',
        Deno: 'readonly'
      }
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      'react': reactPlugin,
      'react-hooks': reactHooksPlugin,
      '@next/next': nextPlugin
    },
    settings: {
      react: {
        version: 'detect'
      },
      next: {
        rootDir: '.'
      }
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      ...reactPlugin.configs.recommended.rules,
      ...nextPlugin.configs.recommended.rules,
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'no-undef': 'off', // TypeScript handles this
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['error'],
      'no-empty': ['error', { 'allowEmptyCatch': true }],
      'no-prototype-builtins': 'off',
      'no-redeclare': 'off', // TypeScript handles this
      'no-cond-assign': ['error', 'except-parens']
    }
  }
]
