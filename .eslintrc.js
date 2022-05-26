module.exports = {
  extends: [
    'universe',
    'universe/shared/typescript-analysis',
    'plugin:react-hooks/recommended',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.d.ts', '*.json'],
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  ],
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
