import React from 'react'
import { Link } from 'react-router-dom'

const HamburgerNav = (props) => {
	if (props.dropdown === false) {
			return (
				<div id='nav-bar'>
					<div id='site-title'>
						<Link to='/'>james miele</Link>
					</div>
					<div className='nav-drop-down' data-name='nav-drop-down' onClick={props.handleDropDown}> 
						<div id='hamburger'><a href='#' data-name='nav-drop-down'> --- </a></div>
					</div>
				</div>
			)
		} else {
			return (
				<div id='nav-bar'>
					<div id='site-title'>
						<Link to='/'>james miele</Link>
					</div>
					<div className='nav-drop-down' data-name='nav-drop-down' onClick={props.handleDropDown}>  
					<div id='hamburger'><a href='#' data-name='nav-drop-down'> --- </a></div>
					<div id='nav-content'>
						<Link to='/'>
							<div className='nav-item'>Welcome</div>
						</Link>
						<Link to='/portfolio'>
							<div className='nav-item'>Portfolio</div>
						</Link>
						<Link to='/aboutme'>
							<div className='nav-item'>About Me</div>
						</Link>
						<Link to='/blog'>
							<div className='nav-item'>Blog</div>
						</Link>
					</div>
				</div>
			</div>
		)
	}
}

export default HamburgerNav