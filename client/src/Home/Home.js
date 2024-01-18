import React from 'react'
import Chip from '@mui/material/Chip';

import HomeStyle from "./HomeStyle";
import image1 from '../images/image1.png';
import image2 from '../images/image2.png';

class Home extends React.Component {
	handleClick = () => {
		console.log('clicked')
	}
	render() {
		return (
			<div style={HomeStyle.container}>
				<div style={HomeStyle.headerColumn}>
					{/*need to fix spacing later*/}
					<h1 style={HomeStyle.headerText}>Grow your wealth smarter: Diversify your portfolio with ETFs.</h1>
					<h1 style={HomeStyle.subheaderText}>ETFs are a great way to diversify your portfolio and grow your wealth.
						But with so many out there, how do you know which ones to choose?</h1>
					<Chip style={HomeStyle.Chip} label="Learn More" onClick={() => { /* Add your action here */ }} />
				</div>
				<div style={HomeStyle.imageColumn}>
					<img src={image1} alt="image1" style={HomeStyle.image1}/>
					<img src={image2} alt="image2" style={HomeStyle.image2}/>
				</div>
			</div>
		)
	}
}

export default Home