module.exports = {
  extends: ['wispamulet'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-explicit-any': 0,
        'no-unused-vars': 0,
        // 'react/prop-types': 0,
      },
    },
    {
      files: ['*.js', '*.jsx'],
      rules: {
        'react/jsx-props-no-spreading': 0,
      },
    },
  ],
};
