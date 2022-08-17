import * as React from 'react';
import { Link } from 'gatsby';

function NotFoundPage() {
	return (
		<main>
			<h1>Page inexistante</h1>
			<p>Vérifiez l'URl entré dans la barre de recherche</p>
			<Link to='/index'>Retour au site</Link>
		</main>
	);
};

export default NotFoundPage;
