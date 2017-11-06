import React from 'react'
import Projects from './Projects'
import { Grid } from 'semantic-ui-react'

const Home = () => {
	return(
		<Grid columns={1}>
			<Grid.Column>
				<h1> James Miele </h1>
				<h3> Full-Stack Web Developer </h3>
				<img src='https://media-exp2.licdn.com/mpr/mpr/shrinknp_400_400/AAIA_wDGAAAAAQAAAAAAAA2sAAAAJGNkZTA4M2Y1LTgyYTktNGEwMC04YjlkLTA3ZDZjMDMxZWQ0Nw.jpg'></img><br/>
				<Projects />
			</Grid.Column>
		</Grid>
	)
}

export default Home