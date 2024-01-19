import React from 'react';
import { Chip, Modal, Box, Typography } from '@mui/material';

import ExploreStyle from "./ExploreStyle";

class Explore extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
			chipInfo: '',
		};
	}
	
	handleOpen = (chip) => {
		this.setState({chipInfo: chip.target.innerText});
		this.setState({open: true});
	};
	
	handleClose = () => {
		this.setState({open: false});
	}
	
	render() {
		const chips = ['Passive & Active ETFs', 'Bond ETFs', 'Stock ETFs', 'Industry/Sector ETFs',
			'Commodity ETFs', 'Currency ETFs', 'Bitcoin ETFs', 'Leveraged ETFs'];
		
		const modalBody = (
			<Box sx={ExploreStyle.modal}>
				<Typography id="modal-modal-title" variant="h6" component="h2" sx={ExploreStyle.typographyHeader}>
					{this.state.chipInfo}
				</Typography>
				<Typography id="modal-modal-description" sx={ExploreStyle.typographyText}>
					ETF description
				</Typography>
			</Box>
		)
		
		return (
			<div style={ExploreStyle.container}>
				<div style={ExploreStyle.headerColumn}>
					<h1 style={ExploreStyle.headerText}>What is an ETF?</h1>
					<p style={ExploreStyle.text}>An exchange-traded fund (ETF) is a type of pooled investment security
						that
						operates much like a mutual fund. Imagine ETFs and mutual funds as baskets of goods that you can
						buy and sell, but unlike mutual funds, ETFs can be traded on the stock exchange just like any
						other
						stock giving them a higher level of liquidity. ETFs are also generally cheaper than mutual funds
						and
						are more tax efficient. ETFs can be a great way to diversify your investments around and
						potentially
						grow your money over time.
					</p>
				</div>
				<div style={ExploreStyle.articleColumn}>
					<h1 style={ExploreStyle.headerText}>Types of ETFs</h1>
					<div style={ExploreStyle.chipContainer}>
						{chips.map((chip, index) => (
							<Chip key={index} style={ExploreStyle.chip} label={chip} onClick={this.handleOpen}/>
						))}
					</div>
				</div>
				<Modal
					open={this.state.open}
					onClose={this.handleClose}
					aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description"
					>
					{modalBody}
				</Modal>
			</div>
		);
	}
}

export default Explore;