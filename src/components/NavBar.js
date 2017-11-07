import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
	return(
		<div id='nav-bar'>
			<div id='first-nav-item'>
				<Link to='/'>Home</Link>
			</div>
			<div className='nav-item'>
				<Link to='/professionalwork'>Professional Work</Link>
			</div>
			<div className='nav-item'>
				<Link to='/aboutme'>About Me</Link>
			</div>
			<div className='nav-item'>
				<Link to='/blog'>Blog</Link>
			</div>
		</div>
	)
}

export default NavBar