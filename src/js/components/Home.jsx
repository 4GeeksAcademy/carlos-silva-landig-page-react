import React from "react";
import { Navbar } from "./Navbar"
import { Jumbotron } from "./Jumbotron"
import { CardList } from "./CardList"
import { Footer } from "./Footer"



//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
        <>
			<Navbar />
			<Jumbotron />
			<CardList />
			<Footer />
			
		</>


	);
};

export default Home;