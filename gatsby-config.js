module.exports = {
	siteMetadata: {
		title: `portfolio`,
		siteUrl: `https://www.yourdomain.tld`,
	},
	plugins: [
		'gatsby-plugin-styled-components',
		'gatsby-plugin-image',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: './src/images/',
			},
			resolve: 'gatsby-plugin-html-attributes',
			options: {
				lang: 'fr',
			},
			__key: 'images',
		},
	],
};
