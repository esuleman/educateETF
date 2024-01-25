const ExploreStyle = {
	container: {
		backgroundColor: "transparent",
		border: "none",
		position: "relative",
		top: "10vh",
		width: "100%",
		height: "90vh",
		padding: "1rem",
		margin: "0",
		boxShadow: "none",
		zIndex: "0",
		overflow: "scroll",
		overflowX: "hidden",
		overflowY: "scroll",
		scrollbarWidth: "thin",
		scrollbarColor: "#8AC6FF #2A2E32",
	},
	infoCard: {
		background: 'rgba(30, 33, 36, 0.25)',
		borderRadius: "15px",
		marginTop: "1vh",
		marginBottom: "3.5vh",
		padding: "2vh",
		boxShadow: "0 2px 8px rgba(0, 0, 0, 0.3)",
		width: "70%",
		height: "81vh",
		marginLeft: "auto",
		marginRight: "auto",
		display: "flex",
		flexDirection: "row",
	},
	headerColumn: {
		marginLeft: "5vw",
		marginTop: "10vh",
		display: "flex",
		flexDirection: "column",
		maxWidth: "25vw",
	},
	articleColumn: {
		marginTop: "10vh",
		marginLeft: "15vw",
		marginRight: "5vw",
		display: "flex",
		flexDirection: "column",
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
	articleChipContainer: {
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",
		width: "15vw",
		marginLeft: "-.5vw",
	},
	articleChip: {
		margin: "0.5vw",
		backgroundColor: "rgba(255, 255, 255, 0.2)",
		color: "#ffffff",
		fontSize: "18px",
		fontFamily: "sans-serif",
	},
	articleModal: {
		position: 'absolute',
		top: '40%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: 750,
		height: 500,
		background: 'linear-gradient(15deg, rgba(30, 33, 36, 1) 0%, rgba(30, 33, 36, 1) 70%, #014a8f 100%)',
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
	},
	downIcon: {
		position: "absolute",
		bottom: "10px",
		left: "50%",
		transform: "translateX(-50%)",
		borderRadius: "50%",
		color: "#fff",
		backgroundColor: "#000",
	},
}

export default ExploreStyle;