import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
	return(
		<div id='home'>
			<div id='home-left-side'>
					<img id='profile-picture' src={require('../images/home.png')} alt='aboutme'/>
			</div>
			<div id='home-right-side'>

				<div id='my-name'>
					JAMES MIELE
				</div>
				<div id='my-role'>
					Full Stack Web Developer
				</div>

				<div className='home-buttons'>
					<Link to='/aboutme' className='button'>
						<div className='button-text'>About Me</div>
					</Link>
					<div className='divider'></div>
					<Link to='/portfolio' className='button'>
						<div className='button-text'>Portfolio</div>
					</Link>
					<div className='divider'></div>
					<Link to='/blog' className='button'>
						<div className='button-text'>Blog</div>
					</Link>
				</div>

				<div className='social-media-container'>
					<div className='social-media'>
						<a href='www.linkedin.com/james-miele' target='_blank'>
							<img className='social-media-icon' src={require('../images/in.png')} alt='linkedin'/>
						</a>
					</div>
					<div className='divider'></div>
					<div className='social-media'>
						<a href='www.medium.com/jnmiele' target='_blank'>
							<img className='social-media-icon' src={require('../images/medium.png')} alt='medium'/>
						</a>
					</div>
					<div className='divider'></div>
					<div className='social-media'>
						<a href='mailto:jamesnmiele@gmail.com' target='_blank' rel="noopener noreferrer">
							<img className='social-media-icon' src={require('../images/mail.png')} alt='email'/>
						</a>
					</div>
					<div className='divider'></div>
					<div className='social-media'>
						<a href='https://www.github.com/jnmiele' target='_blank' rel="noopener noreferrer">
							<img className='social-media-icon' src={require('../images/git.png')} alt='github'/>
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home