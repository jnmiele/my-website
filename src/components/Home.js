import React from 'react'
import Projects from './Projects'
import { Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const Home = () => {
	return(
		<Grid columns={1}>
			<Grid.Column>
				<div id='home'>
					<img src='https://media-exp2.licdn.com/mpr/mpr/shrinknp_400_400/AAIA_wDGAAAAAQAAAAAAAA2sAAAAJGNkZTA4M2Y1LTgyYTktNGEwMC04YjlkLTA3ZDZjMDMxZWQ0Nw.jpg'></img><br/>
					<h2>A full-stack web developer with a passion for building.</h2>
					<h3>My Projects:</h3>
					<Projects />
				</div>
			</Grid.Column>
		</Grid>
	)
}

export default Home