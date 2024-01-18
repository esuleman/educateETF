const NavbarStyle = {
    container: {
        //transparent background with no border
        backgroundColor: "transparent",
        border: "none",
        //positioned at the top of the page
        position: "fixed",
        top: "0",
        //full width
        width: "100%",
        //height of 10vh
        height: "10vh",
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
    textTitle: {
        //white text
        color: "white",
        //centered text
        textAlign: "center",
        //bold text
        fontWeight: "bold",
	    //text font sans-serif
        fontFamily: "sans-serif",
        //font size 30px
        fontSize: "2vh",
        //content is centered
        justifyContent: "center",
        //position handling
        marginLeft: "15vw",
        marginTop: "5vh",
        textDecoration: "none",
    },
    textSubtitle: {
        //white text
        color: "white",
        //centered text
        textAlign: "center",
        //no margin
        margin: "0",
        //no padding
        padding: "0",
        //bold text
        fontWeight: "bold",
        //text font sans-serif
        fontFamily: "sans-serif",
        //font size 20px
        fontSize: "20px",
        //content is centered
        justifyContent: "center",
        //position handling
        marginLeft: "5vw",
        marginTop: "5.5vh",
        textDecoration: "none",
    },
    searchContainerClosed: {
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        border: "white solid 1px",
        borderRadius: "50%", // make it a circle
        width: "40px", // set a specific width
        height: "40px", // set a specific height
        display: "flex", // use flexbox for centering
        alignItems: "center", // center vertically
        justifyContent: "center", // center horizontally
        marginLeft: "35vw",
        marginTop: "5vh",
        transition: 'all 0.2s ease-in-out',
    },
    searchContainerOpen: {
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        border: "white solid 1px",
        borderRadius: "25px", // make it an oval
        width: "250px", // set a specific width
        height: "40px", // set a specific height
        display: "flex", // use flexbox for centering
        alignItems: "center", // center vertically
        justifyContent: "center", // center horizontally
        marginLeft: "35vw",
        marginTop: "5vh",
        fontFamily: "sans-serif",
        fontSize: "20px",
        color: "white",
        textAlign: "left",
        paddingLeft: "10px",
        position: "relative",
        transition: 'all 0.2s ease-in-out',
    },
    searchIcon: {
        color: "white",
        fontSize: "1.5em",
    },
    cancelIcon: {
        position: 'absolute',
        right: '10px',
        top: '50%',
        transform: 'translateY(-50%)',
        cursor: 'pointer',
        color: '#ffffff',
    },
    searchInput: {
        border: "none",
        backgroundColor: "transparent",
        width: "100%",
        height: "100%",
        color: "white",
        fontFamily: "sans-serif",
        fontSize: "20px",
        outline: "none",
        marginLeft: "10px",
    }
};

export default NavbarStyle;