import React from 'react'
import NavSelector from './NavSelector'

const Blog = () => {
	return(
		<div>
			<NavSelector/>
			<div id='blog-body'>
				Coming soon... For now, you can check out my posts on <a href='https://medium.com/@jnmiele' target='_blank' rel="noopener noreferrer">Medium</a>!
			</div>
		</div>
	)
}

export default Blog