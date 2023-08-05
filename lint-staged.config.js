module.exports = {
  '*.{js,ts,jsx,tsx}': ['eslint --fix', 'prettier --write'],
  '**/*.ts?(x)': () => 'npm run check-types',
  '*.{css,scss}': 'stylelint --fix',
}
