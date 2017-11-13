import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
	console.log()
	return(
		<div id='nav-bar'>
			<div id='nav-bar-left'>
				<div id='site-title'>
					James Miele
				</div>
				<div className='nav-item'>
					<Link className='nav-link' to='/'>Welcome</Link>
				</div>
				<div className='divider'></div>
				<div className='divider'></div>
				<div className='nav-item'>
					{window.location.pathname === '/portfolio'? <Link className='nav-link-bold' to='/portfolio'>Portfolio</Link> : <Link className='nav-link' to='/portfolio'>Portfolio</Link>}
				</div>
				<div className='divider'></div>
				<div className='divider'></div>
				<div className='nav-item'>
					{window.location.pathname === '/aboutme'? <Link className='nav-link-bold' to='/aboutme'>About Me</Link> : <Link className='nav-link' to='/aboutme'>About Me</Link>}
				</div>
				<div className='divider'></div>
				<div className='divider'></div>
				<div className='nav-item'>
					{window.location.pathname === '/blog'? <Link className='nav-link-bold' to='/blog'>Blog</Link> : <Link className='nav-link' to='/blog'>Blog</Link>}
				</div>
			</div>

			<div className='nav-bar-right'> 
				<div className='nav-item'>
					<a className='social-media-icon' href='https://www.linkedin.com/in/james-miele' target='_blank' rel="noopener noreferrer">
						<img className='social-media-icon' src={require('../images/in.png')} alt='linkedin'/>
					</a>
				</div>
				<div className='divider'></div>
				<div className='nav-item'>
					<a className='social-media-icon' href='https://medium.com/@jnmiele' target='_blank' rel="noopener noreferrer">
						<img className='social-media-icon' src={require('../images/medium.png')} alt='medium'/>
					</a>
				</div>
				<div className='divider'></div>
				<div className='nav-item'>
					<a className='social-media-icon' href='https://www.github.com/jnmiele' target='_blank' rel="noopener noreferrer">
						<img className='social-media-icon' src={require('../images/git.png')} alt='github'/>
					</a>
				</div>
				<div className='divider'></div>
				<div className='nav-item'>
					<a className='social-media-icon' href='mailto:jamesnmiele@gmail.com' target='_blank' rel="noopener noreferrer">
						<img className='social-media-icon' src={require('../images/mail.png')} alt='email'/>
					</a>
				</div>
			</div>
		</div>
	)
}

export default NavBar