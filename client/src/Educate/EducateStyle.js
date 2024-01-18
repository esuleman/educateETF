const EducateStyle = {
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
		lineHeight: "1.75",
	},
	articleColumn: {
		marginTop: "15vh",
		marginLeft: "15vw",
		display: "flex",
		flexDirection: "column",
	}
}

export default EducateStyle;