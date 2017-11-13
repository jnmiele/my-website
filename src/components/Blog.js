import React from 'react'
import NavBar from './NavBar'

const Blog = () => {
	return(
		<div>
			<NavBar/>
			<div id='blog-body'>
				Coming soon... For now, you can check out my posts on <a href='https://medium.com/@jnmiele' target='_blank' rel="noopener noreferrer">Medium</a>!
			</div>
		</div>
	)
}

export default Blog