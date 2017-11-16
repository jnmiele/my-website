import React from 'react'
import HamburgerNav from './HamburgerNav'
import NavBar from './NavBar'

class NavSelector extends React.Component {	

	state = {
		dropdown: false,
		windowSize: window.matchMedia('all and (max-width: 950px)')
	}

	handleDropDown = (event) => {
		if (event.target.dataset.name === 'nav-drop-down') {
			this.setState({
				dropdown: !this.state.dropdown
			})
		}
	}

	resize = () => this.forceUpdate()

	componentDidMount() {
		window.addEventListener('resize', this.resize)
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.resize)
	}

	render () {
		if (this.state.windowSize.matches) {
			return <HamburgerNav dropdown={this.state.dropdown} handleDropDown={this.handleDropDown}/>
		} else {
			return <NavBar />
		}
	}
}

export default NavSelector