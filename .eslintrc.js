module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
		commonjs: true,
	},
	extends: 'eslint:recommended',
	overrides: [
		{
			env: {
				node: true,
			},
			files: ['.eslintrc.{js,cjs}'],
			parserOptions: {
				sourceType: 'script',
			},
		},
		{
			files: ['*.test.js', '*.spec.js'],
			env: {
				jest: true,
			},
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	ignorePatterns: ['webpack.config.js'],
	rules: {
		'no-unused-vars': 'warn',
	},
};
