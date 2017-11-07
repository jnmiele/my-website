import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

const ProjectModal = (props) => {

  function handleClick(event) {
    if (event.target.dataset.name === 'open-modal') {
      props.openModal(props.id)
    } else if (event.target.dataset.name === 'close-modal') {
      props.closeModal()
    }
  }

  function displayBullets() {
    if (props.bullets && props.bullets.length > 0) {
      const details = props.bullets.map((bullet, index) => <li key={index}> {bullet} </li>)
      return details
    }
  }

  function displayWebTools() {
    if (props.tools && props.tools.length > 0) {
      const tools = props.tools.map((tool, index) => <li key={index}> {tool} </li>)
      return tools
    }
  }
  
  return (
    <Modal 
    trigger={<Button data-name='open-modal' onClick={handleClick}>{props.name}</Button>}
    open={props.open}
    >
      <Modal.Header>{props.name}</Modal.Header>
      <Modal.Content image scrolling>
        <Image wrapped size='medium' src='/assets/images/avatar/large/rachel.png' />
        <Modal.Description>
          <Header>Description</Header>
          <p>{props.description}</p>
          <ul>{displayBullets()}</ul>
          <p>Web Tools Utilized:</p>
          <ul>{displayWebTools()}</ul>
          <p> Code available on <a href={props.github} target='_blank'>github</a></p>
          <p> Project demo videos coming soon!</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button data-name='close-modal' onClick={props.closeModal}>Close</Button>
      </Modal.Actions>
    </Modal>
  ) 
}

export default ProjectModal