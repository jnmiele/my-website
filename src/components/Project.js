import React from 'react'
import ProjectModal from './ProjectModal'

const Project = (props) => {
  
  function displayBullets() {
    if (props.bullets && props.bullets.length > 0) {
      const details = props.bullets.map((bullet, index) => <li className='project-bullets' key={index}> {bullet} </li>)
      return details
    }
  }

  return (
    <div>
      <div className='project'>
        <div className='row'>
          <div className='project-left'>
            <img src={require(`../${props.image}`)} alt={props.name} className='project-image'/>
          </div>

          <div className='project-description'>
            <div className='project-header'>
              <h3 className='project-title'>{props.name}</h3> 
              <div className='project-modal'>
                <ProjectModal {...props} />
              </div>
            </div>
            <div className='project-body'>{props.description}</div>
            <ul>
              {displayBullets()}
            </ul>
            <div className='project-bullets'>
              Back-End: {props.backend}<br/>
              Front-End: {props.frontend}<br/>
              External APIs: {props.APIs}
            </div>
          </div>
        </div>
      </div>
    </div>
  ) 
}

export default Project