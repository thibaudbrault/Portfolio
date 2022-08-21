import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) =>
						sheet.collectStyles(<App {...props} />),
				});

			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			};
		} finally {
			sheet.seal();
		}
	}

	render() {
		return (
			<Html lang='fr'>
				<Head>
					<meta charSet='utf-8' />
					<meta
						name='description'
						content="Salut ! Moi c'est Thibaud, développeur front-end nantais"
					/>
					<meta name="google-site-verification" content="7jYfoTUFvNWLCDFkdgEtkwIp3AexqXFZQbwI-TtwO64" />

					<link rel='shortcut icon' href='/favicon.ico' />
					<link rel='preconnect' href='https://fonts.googleapis.com' />
					<link rel='preconnect' href='https://fonts.gstatic.com' />
					<link
						href='https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap'
						rel='stylesheet'
					/>
					<link
						href='https://fonts.googleapis.com/css2?family=Karla:wght@400;700&display=swap'
						rel='stylesheet'
					/>
					<link
						href='https://fonts.googleapis.com/css2?family=Merriweather:wght@300;700&display=swap'
						rel='stylesheet'
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
