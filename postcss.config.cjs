const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
	plugins: [
		purgecss({
			content: ['./**/*.html', './**/*.svelte'],
			// Treat every word in the bundle as a CSS selector
			defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
		}),
	],
};
