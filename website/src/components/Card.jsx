import React from 'react'


function Card(props) {
  return (
    <div>
   
        <a
          className="project"
          href={props.website}
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={props.image ? props.image : "no image"}
            alt={
              props.image ? props.image : "no image"
            }
          />
          <div className="container">
            <p className="personName">{props.name}</p>
            <a
              className="projectcode"
              href={props.code}
              target="_blank"
              rel="noreferrer"
            >Source Code</a>
          </div>

        </a>
    </div>
  )
}

export default Card




