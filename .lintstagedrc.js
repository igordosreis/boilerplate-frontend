module.exports = {
  '*/.{js,ts,jsx,tsx}?(x)': [
    filenames =>
      `next lint --fix --file ${filenames
        .map(file => file.split(process.cwd())[1])
        .join(' --file ')}`,
    filenames => `prettier --write ${filenames.join(' ')}`,
    () => 'tsc --noEmit --skipLibCheck',
  ],
  '*.scss': ['stylelint --syntax scss --fix'],
}