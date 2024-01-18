import React from 'react';
import { Link } from 'react-router-dom';

import EducateStyle from "./EducateStyle";

class Educate extends React.Component {
  render() {
	return (
		<div style={EducateStyle.container}>
			<div style={EducateStyle.headerColumn}>
				<p style={EducateStyle.text}>An exchange-traded fund (ETF) is a type of pooled investment security that
					operates much like a mutual fund. Imagine ETFs and mutual funds as baskets of goods that you can
					buy and sell, but unlike mutual funds, ETFs can be traded on the stock exchange just like any other
					stock giving them a higher level of liquidity. ETFs are also generally cheaper than mutual funds and
					are more tax efficient. ETFs can be a great way to diversify your investments around and potentially
					grow your money over time.
				</p>
			</div>
			<div style={EducateStyle.articleColumn}>
			</div>
		</div>
	);
  }
}

export default Educate;