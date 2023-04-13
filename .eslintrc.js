module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:promise/recommended',
    'plugin:react/recommended',
  ],
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  plugins: ['html'],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        impliedStrict: true,
        ecmaFeatures: {
          jsx: true,
        },
      },
      plugins: [
        '@typescript-eslint',
        'promise',
        'react',
        'html',
        'import',
        'simple-import-sort',
      ],
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:promise/recommended',
        'plugin:react/recommended',
      ],
      settings: {
        react: {
          createClass: 'createReactClass',
          pragma: 'React',
        },
        propWrapperFunctions: [
          'forbidExtraProps',
          { property: 'freeze', object: 'Object' },
        ],
        linkComponents: ['Hyperlink', { name: 'Link', linkAttribute: 'to' }],
      },
      rules: {
        'arrow-spacing': 'error',
        eqeqeq: 'error',
        curly: 'error',
        'dot-notation': 'error',
        'eol-last': 'error',
        'jsx-quotes': ['error', 'prefer-single'],
        'no-buffer-constructor': 'error',
        'no-confusing-arrow': 'error',
        'no-path-concat': 'error',
        'no-var': 'error',
        'no-self-compare': 'error',
        'no-throw-literal': 'error',
        'no-unused-expressions': 'error',
        'no-unused-vars': [
          'error',
          {
            argsIgnorePattern: '^_',
          },
        ],
        'no-useless-concat': 'error',
        'prefer-const': [
          'error',
          {
            ignoreReadBeforeAssign: true,
          },
        ],
        'prefer-promise-reject-errors': 'error',
        'prefer-template': 'error',
        'brace-style': 'off',
        'object-curly-spacing': ['error', 'always'],
        'array-bracket-spacing': [
          'error',
          'always',
          {
            singleValue: false,
            objectsInArrays: false,
            arraysInArrays: false,
          },
        ],
        'no-console': 'off',
        'object-shorthand': 'error',
        strict: ['error', 'global'],
        yoda: 'error',
        'comma-dangle': ['error', 'always-multiline'],
        'no-multiple-empty-lines': [
          'error',
          {
            max: 1,
            maxBOF: 0,
          },
        ],
        'no-this-before-super': 'error',
        'prefer-destructuring': ['error', { object: true, array: false }],
        'prefer-object-spread': 'error',
        'no-else-return': 'error',
        'generator-star-spacing': [
          'error',
          {
            before: false,
            after: true,
          },
        ],
        'lines-between-class-members': [
          'error',
          'always',
          { exceptAfterSingleLine: true },
        ],
        quotes: [
          'error',
          'single',
          {
            avoidEscape: true,
            allowTemplateLiterals: true,
          },
        ],
        'max-len': ['error', { code: 80 }],
        'comma-spacing': 'error',
        'keyword-spacing': 'error',
        'key-spacing': 'error',
        'no-mixed-spaces-and-tabs': 'error',
        'no-multi-spaces': 'error',
        'no-trailing-spaces': 'error',
        'space-infix-ops': 'off',
        'spaced-comment': ['error', 'always'],
        'space-before-blocks': 'error',
        'no-irregular-whitespace': 'error',
        'semi-style': 'error',
        'no-extra-semi': 'error',
        'semi-spacing': 'error',
        'object-curly-newline': 'error',
        'padded-blocks': ['error', 'never'],
        'import/first': 'error',
        'import/newline-after-import': 'error',
        'import/no-duplicates': 'error',
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              // Side effect imports.
              ['^\\u0000'],
              // Packages.
              // Things that start with a letter (or digit or underscore), or `@` followed by a letter.
              ['^@?\\w'],
              // Absolute imports and other imports such as Vue-style `@/foo`.
              // Anything not matched in another group.
              ['^'],
              // Relative imports.
              // Anything that starts with a dot.
              ['^\\.'],
              // scss
              ['\\.scss$'],
            ],
          },
        ],
        'simple-import-sort/exports': 'error',
        'promise/prefer-await-to-then': 'error',
        'react/prop-types': 'off',
        'react/sort-comp': [
          'error',
          {
            order: ['static-methods', 'lifecycle', 'render', 'everything-else'],
          },
        ],
        'react/jsx-one-expression-per-line': [
          'error',
          {
            allow: 'literal',
          },
        ],
        'react/jsx-closing-bracket-location': ['error', 'tag-aligned'],
        'react/jsx-closing-tag-location': ['off', 'tag-aligned'],
        'react/jsx-tag-spacing': [
          'error',
          {
            beforeSelfClosing: 'never',
            beforeClosing: 'never',
          },
        ],
        'react/jsx-curly-spacing': [
          'error',
          {
            when: 'never',
            objectLiterals: 'never',
            children: { when: 'never' },
          },
        ],
        '@typescript-eslint/type-annotation-spacing': 'error',
        '@typescript-eslint/brace-style': 'error',
        '@typescript-eslint/object-curly-spacing': ['error', 'always'],
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            argsIgnorePattern: '^_',
          },
        ],
        '@typescript-eslint/semi': ['error', 'always'],
        '@typescript-eslint/space-infix-ops': 'off',
        '@typescript-eslint/indent': [
          'error',
          2,
          {
            VariableDeclarator: 'first',
            ArrayExpression: 'first',
            ObjectExpression: 'first',
            ImportDeclaration: 'first',
            FunctionDeclaration: {
              parameters: 'first',
            },
            FunctionExpression: {
              parameters: 'first',
            },
            CallExpression: {
              arguments: 'first',
            },
          },
        ],
        '@typescript-eslint/explicit-function-return-type': [
          'error',
          {
            allowTypedFunctionExpressions: true,
          },
        ],
        '@typescript-eslint/no-parameter-properties': 'off',
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: 'function',
            format: ['PascalCase', 'camelCase'],
          },
        ],
      },
    },
  ],
};
