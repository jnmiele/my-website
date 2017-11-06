import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

const ProjectModal = (props) => {

  function handleClick(event) {
    if (event.target.id === 'open-modal') {
      props.openModal(props.id)
    } else if (event.target.id === 'close-modal') {
      props.closeModal()
    }
  }

  function displayBullets() {
    if (props.bullets && props.bullets.length > 0) {
      const details = props.bullets.map((bullet, index) => <li key={index}> {bullet} </li>)
      return details
    }
  }
  
  return (
    <Modal 
    trigger={<Button id='open-modal' onClick={handleClick}>{props.name}</Button>}
    open={props.open}
    >
      <Modal.Header>{props.name}</Modal.Header>
      <Modal.Content image scrolling>
        <Image wrapped size='medium' src='/assets/images/avatar/large/rachel.png' />
        <Modal.Description>
          <Header>Default Profile Image</Header>
          <p>{props.description}</p>
          <ul> {displayBullets()} </ul>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button id='close-modal' onClick={props.closeModal}>Close</Button>
      </Modal.Actions>
    </Modal>
  ) 
}

export default ProjectModal