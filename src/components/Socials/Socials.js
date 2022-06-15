import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SocialsAnchor, SocialsSection, SocialsText } from './Styled.Socials';
import weekday from '../../helpers/Days';

function Socials() {

	const key = process.env.GATSBY_WEATHER_API_KEY;
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=47.2186371&lon=-1.5541362&units=metric&appid=${key}`;

	const [weather, setWeather] = useState({});

	useEffect(() => {
		axios.get(url).then((response) => {
		setWeather(response.data);
		});
	}, [url]);

	console.log(weather);

	return (
		<SocialsSection>
			<SocialsAnchor
				href='https://github.com/thibaudbrault'
				target='_blank'
				rel='noopener noreferrer'
				initial={{ y: 50 }}
				transition={{ duration: 2.5 }}
				animate={{ y: 0 }}
			>
				Github
			</SocialsAnchor>
			<SocialsText
				initial={{ y: 50 }}
				transition={{ duration: 2 }}
				animate={{ y: 0 }}
			>
				Bon <span>{weekday()}</span>
				<br />
				Il fait <span>{weather?.main?.temp?.toFixed(1)}°C</span> à Nantes
			</SocialsText>
			<SocialsAnchor
				href='https://www.linkedin.com/in/thibaud-brault/'
				target='_blank'
				rel='noopener noreferrer'
				initial={{ y: 50 }}
				transition={{ duration: 2.5 }}
				animate={{ y: 0 }}
			>
				Linkedin
			</SocialsAnchor>
		</SocialsSection>
	);
}

export default Socials;
