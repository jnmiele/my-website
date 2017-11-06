import React from 'react'
import Projects from './Projects'
import { Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const Home = () => {
	return(
		<Grid columns={1}>
			<Grid.Column>
				<img src='https://media-exp2.licdn.com/mpr/mpr/shrinknp_400_400/AAIA_wDGAAAAAQAAAAAAAA2sAAAAJGNkZTA4M2Y1LTgyYTktNGEwMC04YjlkLTA3ZDZjMDMxZWQ0Nw.jpg'></img><br/>
				<h1> James Miele </h1>
				<h4>A full-stack web developer with a passion for building.</h4>
				<Link to='/aboutme'>View my story</Link><br/>
				<h3>My Projects:</h3>
				<Projects />
			</Grid.Column>
		</Grid>
	)
}

export default Home