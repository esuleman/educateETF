const ExploreStyle = {
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
		marginTop: "5vh",
		display: "flex",
		flexDirection: "column",
		width: "25vw",
	},
	text: {
		fontSize: "20px",
		fontFamily: "sans-serif",
		textAlign: "left",
		color: "#ffffff",
		lineHeight: "2",
		marginTop: "-.5vh",
	},
	headerText: {
		fontWeight: "bold",
		fontSize: "25px",
		fontFamily: "sans-serif",
		textAlign: "left",
		color: "#8AC6FF",
	},
	articleColumn: {
		marginTop: "5vh",
		marginLeft: "15vw",
		display: "flex",
		flexDirection: "column",
	},
	chipContainer: {
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",
		width: "15vw",
		marginLeft: "-.5vw",
	},
	chip: {
		margin: "0.5vw",
		backgroundColor: "rgba(255, 255, 255, 0.2)",
		color: "#ffffff",
		fontSize: "18px",
		fontFamily: "sans-serif",
	},
	modal: {
		position: 'absolute',
		top: '27.5%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: 750,
		height: 250,
		background: 'linear-gradient(18deg, rgba(30, 33, 36, 1) 0%, rgba(30, 33, 36, 1) 60%, #007EF5 100%)',
		border: '2px solid #8AC6FF',
		borderRadius: '10px',
		boxShadow: 24,
		p: 4,
	},
	typographyHeader: {
		fontFamily: "sans-serif",
		fontWeight: "bold",
		fontSize: "25px",
		color: "#fff",
		lineHeight: "1.75",
	},
	typographyText: {
		fontFamily: "sans-serif",
		fontSize: "20px",
		color: "#fff",
		lineHeight: "1.75",
	}
}

export default ExploreStyle;