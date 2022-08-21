import * as React from 'react';
import Link from 'next/link';

function NotFoundPage() {
	return (
		<main>
			<h1>Page inexistante</h1>
			<p>Vérifiez l'URl entré dans la barre de recherche</p>
			<Link passHref href={'/'}>
				<a>Retour au site</a>
			</Link>
		</main>
	);
}

export default NotFoundPage;
