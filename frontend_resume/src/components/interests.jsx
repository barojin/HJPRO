import React, { Component } from 'react'


export default class Interests extends Component {

render() {
  return (
     <div>
  <section className="resume-section" id="interests">
    <div className="resume-section-content">
      <h2 className="mb-5">Interests</h2>
      <p>Rock climbing, Dancing, Singing, Cooking, Biking</p>
      <ul className="list-inline dev-icons">
        <li className="list-inline-item"><i className="fas fa-bicycle" /></li>
        <li className="list-inline-item"><i className="fas fa-music" /></li>
        <li className="list-inline-item"><i className="fas fa-microphone" /></li>
        <li className="list-inline-item"><i className="fas fa-bread-slice" /></li>                
      </ul>      
    </div>
  </section>
  <hr className="m-0" />
</div>

  )
 }
}