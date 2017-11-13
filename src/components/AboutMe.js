import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'

const AboutMe = () => {
	return(
		<div>
			<NavBar/>
			<div id='aboutme'>
				<div id='aboutme-left-side'>
					<img id='aboutme-picture' src={require('../images/aboutme.png')} alt='aboutme'/>
				</div>
				<div id='aboutme-right-side'>

					<div id='my-story'>
						<h3 className='aboutme-title'>tl;dr</h3>
						<p> 
							<span>I'm a video game nerd turned full-stack developer with a passion</span><br/> 
							<span>for building apps that bring people together. I'm familiar with:</span><br/> 
							<span>Ruby, Ruby on Rails, JavaScript, React, Redux, Python, and SQL.</span><br/><br/>
							<span>Take a look at my <Link to='/portfolio'>projects</Link>!</span><br/> 
						</p>
						<br/>
						<h3 className='aboutme-title'> extended version </h3>
						<p> 
							As nerdy as it may sound, my passion for coding began at a young age spending countless hours playing Warcraft III.
							The time I invested into Warcraft III was mostly in the 'World Editor' tool that Blizzard provided you with.
							This tool allowed users to create their own maps and game types that were playable through the actual game.
							Although I didn't know it at the time, the editor provided users with the ability to be programmers through conditional events that took place as 'triggers'.
						</p>
						<p>
							I was too young to identify this passion when choosing my college career and instead, pursued a major in Marketing.
							Just three days before graduation I started my first full-time role as an Account Executive at UPS.
							While at UPS I served almost as a business consultant for the accounts I handled (around 1000 as an Account Executive, and around 20 as a Senior Account Executive).
							My primary focus while consulting on these accounts was to improve their bottom line; which was usually done through the integration of technology solutions.
							Planning, setting goals, and determination are what drove me to be 106% effective to my annual sales plan in 2016 before being promoted to a Senior Account Executive.
						</p>
						<p>
							My time at UPS ended April of 2017 when I finally decided to pull the trigger on changing career paths.
							I had been surrounded by a few programmers who were loving every minute of what they did and I may have them to thank for prompting me to start my journey.
							Since my departure from UPS I've taken online courses in Python and attended a full-stack web development immersive offered by the Flatiron School, where I learned
							valuable web-development skills like building databases and APIs with Ruby and Ruby on Rails and designing responsive and user-friendly front ends with JavaScript,
							React, and Redux.
						</p>

						<p>
							I look forward to the next step of my journey, and welcome anyone who would like to join me along the way.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AboutMe