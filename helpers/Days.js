export const jours = [
	'Dimanche',
	'Lundi',
	'Mardi',
	'Mercredi',
	'Jeudi',
	'Vendredi',
	'Samedi',
];

export default function weekday() {
	let now = new Date().getDay();
	return jours[now];
}
