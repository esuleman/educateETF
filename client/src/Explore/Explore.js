import React from 'react';
import {Box, Card, Chip, Modal, Typography} from '@mui/material';

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
			<Box sx={ExploreStyle.articleModal}>
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
				<Card style={ExploreStyle.infoCard}>
					<div style={ExploreStyle.headerColumn}>
						<h1 style={ExploreStyle.headerText}>What is an ETF?</h1>
						<p style={ExploreStyle.text}>An exchange-traded fund (ETF) is a type of pooled investment
							security that operates much like a mutual fund. Imagine ETFs and mutual funds as baskets of
							goods that you can buy and sell, but unlike mutual funds, ETFs can be traded on the stock
							exchange just like any other stock giving them a higher level of liquidity. ETFs are also
							generally cheaper than mutual funds and are more tax efficient. ETFs can be a great way to
							diversify your investments around and potentially grow your capital over time.
						</p>
					</div>
					<div style={ExploreStyle.articleColumn}>
						<h1 style={ExploreStyle.headerText}>Types of ETFs</h1>
						<div style={ExploreStyle.articleChipContainer}>
							{chips.map((chip, index) => (
								<Chip key={index} style={ExploreStyle.articleChip} label={chip}
								      onClick={this.handleOpen}/>
							))}
						</div>
					</div>
				</Card>
				<Card style={ExploreStyle.infoCard}>
					<div style={ExploreStyle.headerColumn}>
						<h1 style={ExploreStyle.headerText}>How to Invest in ETFs</h1>
						<p style={ExploreStyle.text}>There are many ways to invest in ETFs. You can buy and sell ETFs
							through a brokerage account, which can be opened through a broker. You can also invest in
							ETFs through a robo-advisor or a financial advisor. Robo-advisors are online investment
							management services that build and manage ETF portfolios for you. Financial advisors are
							professionals who can help you build a portfolio of ETFs and other investments.
						</p>
					</div>
					<div style={ExploreStyle.articleColumn}>
						<h1 style={ExploreStyle.headerText}>How to Choose an ETF</h1>
						<p style={ExploreStyle.text}>There are many factors to consider when choosing an ETF. Some
							important factors include the ETF’s expense ratio, the ETF’s performance history, the
							underlying index, and the ETF’s holdings. You can find all of this information on the ETF’s
							prospectus, which is a document that contains information about the ETF’s investment
							objectives, risks, and fees. You can also find this information on the ETF’s website.
						</p>
					</div>
				</Card>
				<Modal
					open={this.state.open}
					onClose={this.handleClose}
					aria-labelledby="ArticleDescription"
					aria-describedby="Gives users a quick description of the type of ETF they clicked"
				>
					{modalBody}
				</Modal>
			</div>
		);
	}
}

export default Explore;