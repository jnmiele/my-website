import React from 'react'
import { Modal } from 'semantic-ui-react'

const ProjectModal = (props) => {

  function handleClick(event) {
    if (event.target.dataset.name === 'open-modal') {
      props.openModal(props.id)
    } else if (event.target.dataset.name === 'close-modal') {
      props.closeModal()
    }
  }
  const title = `youtube-vid-${props.name}`
  return (
    <Modal 
    trigger={<button className='demo-button' data-name='open-modal' onClick={handleClick}>View Demo</button>}
    open={props.open}
    onClose={props.closeModal}
    >
      <iframe title={title} className='video-container-16x9'src={props.url}/>
      <Modal.Actions>
        <button className='close-modal-button' data-name='close-modal' onClick={props.closeModal}>Close</button>
      </Modal.Actions>
    </Modal>
  ) 
}

export default ProjectModal