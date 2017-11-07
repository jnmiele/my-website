import React from 'react'
import Projects from './Projects'
import { Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const Home = () => {
	return(
		<Grid columns={1}>
			<Grid.Column>
				<div id='home'>
					<img id='profile-picture' src='https://media-exp2.licdn.com/mpr/mpr/shrinknp_400_400/AAIA_wDGAAAAAQAAAAAAAA2sAAAAJGNkZTA4M2Y1LTgyYTktNGEwMC04YjlkLTA3ZDZjMDMxZWQ0Nw.jpg'></img><br/>
					<h2>A full-stack web developer with a passion for building applications that bring people together.</h2>
					<p> This site is still in development. Bear with me as I add content, features, and styling along the way!</p>
					<h2>My Projects:</h2>
					<Projects />
				</div>
			</Grid.Column>
		</Grid>
	)
}

export default Home