const HomeStyle = {
	container: {
		//transparent background with no border
		backgroundColor: "transparent",
		border: "none",
		//positioned relative to the normal flow
		position: "relative",
		//pushed down by the height of the navbar
		top: "10vh",
		//full width
		width: "100%",
		//height of 90vh
		height: "90vh",
		//no padding, no margin
		padding: "0",
		margin: "0",
		//no shadow
		boxShadow: "none",
		//no z-index
		zIndex: "0",
		//row
		display: "flex",
		flexDirection: "row",
	},
	headerColumn: {
		marginLeft: "17.5vw",
		marginTop: "15vh",
		display: "flex",
		flexDirection: "column",
		width: "25vw",
	},
	imageColumn: {
		marginTop: "15vh",
		marginLeft: "15vw",
		display: "flex",
		flexDirection: "column",
	},
	image1: {
		borderTopLeftRadius: "20px",
		borderTopRightRadius: "20px",
		width: "15vw",
		height: "auto",
		border: "1px solid #000000",
	},
	image2: {
		borderBottomLeftRadius: "20px",
		borderBottomRightRadius: "20px",
		width: "15vw",
		height: "auto",
		border: "1px solid #000000",
	},
	headerText: {
		fontWeight: "bold",
		fontSize: "25px",
		fontFamily: "sans-serif",
		textAlign: "left",
		color: "#8AC6FF",
	},
	subheaderText: {
		fontWeight: "bold",
		fontSize: "20px",
		fontFamily: "sans-serif",
		textAlign: "left",
		color: "#ffffff",
	},
	Chip: {
		marginTop: "2vh",
		backgroundColor: "rgba(255, 255, 255, 0.2)",
		fontWeight: "bold",
		fontSize: "20px",
		fontFamily: "sans-serif",
		textAlign: "center",
		color: "#ffffff",
		width: "7.5vw",
		marginLeft: "-.25vw",
	}
}

export default HomeStyle