import React from 'react'
import Project from './Project'
import { projects } from '../assets/projects'
import NavBar from './NavBar'

class Portfolio extends React.Component {
  state = {
    modalOpen1: false,
    modalOpen2: false,
    modalOpen3: false
  }

  openModal = (projectId) => {
    switch (projectId) {
      case 1:
        return this.setState({modalOpen1: true})
      case 2:
        return this.setState({modalOpen2: true})
      case 3:
        return this.setState({modalOpen3: true})
      default:
        return null
    }
  }

  closeModal = () => {
    this.setState({
      modalOpen1: false,
      modalOpen2: false,
      modalOpen3: false
    })
  }

  render() {
    const projectList = projects.map((project, index) => {
      switch (index+1) {
        case 1:
          return <Project key={index} id={index+1} {...project} openModal={this.openModal} closeModal={this.closeModal} open={this.state.modalOpen1}/>
        case 2:
          return <Project key={index} id={index+1} {...project} openModal={this.openModal} closeModal={this.closeModal} open={this.state.modalOpen2}/>
        case 3:
          return <Project key={index} id={index+1} {...project} openModal={this.openModal} closeModal={this.closeModal} open={this.state.modalOpen3}/>
        default:
          return null
      }
    })
    return(
      <div>
        <NavBar/>
        <div id='projects'>
          {projectList}
        </div>
      </div>
    )
  }
}


export default Portfolio