import React from 'react'
import ProjectModal from './ProjectModal'

class Projects extends React.Component {
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
    const projects = [
      {
        name: 'Flatgram',
        description: '',
        github: '',
        tools: ['Ruby', 'Ruby on Rails', 'Semantic-UI'],
        url: 'youtubeurl'
      },
      {
        name: 'The Spots',
        description: '',
        github: '',
        tools: ['Ruby', 'Ruby on Rails', 'JavaScript', 'React', 'Yelp Search API'],
        url: 'youtubeurl2'
      },
      {
        name: 'Hitchhiker',
        description: '',
        github: '',
        tools: ['Ruby', 'Ruby on Rails', 'JavaScript', 'React', 'Redux', 'Google Maps API'],
        url: 'youtubeurl3'
      }
    ]

    let modals = projects.map((project, index) => {
      switch (index+1) {
        case 1:
          return <ProjectModal key={index} id={index+1} {...project} openModal={this.openModal} closeModal={this.closeModal} open={this.state.modalOpen1}/>
        case 2:
          return <ProjectModal key={index} id={index+1} {...project} openModal={this.openModal} closeModal={this.closeModal} open={this.state.modalOpen2}/>
        case 3:
          return <ProjectModal key={index} id={index+1} {...project} openModal={this.openModal} closeModal={this.closeModal} open={this.state.modalOpen3}/>
        default:
          return null
      }
    })
    return(
      <div>
        {modals}
      </div>
    )
  }
}


export default Projects