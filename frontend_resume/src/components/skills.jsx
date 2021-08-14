import React, { Component } from 'react'
import { FaPython, FaAws, FaDatabase, FaReact } from "react-icons/fa";


export default class Skills extends Component {

render() {
  return (
     <div>
  <section className="resume-section" id="skills">
    <div className="resume-section-content">
      <h2 className="mb-5">Skills</h2>
      <div className="subheading mb-3">Programming Languages</div>
        <p><b> Proficient: Python, MySQL</b></p>
        <p>Familiar: Java, C#, Javascript, HTML5, CSS</p>
        <div className="subheading mb-3">Framework & Library</div>
        <p>Django, React, .NET, Spring, node.js</p>
        <div className="subheading mb-3">Tools</div>
        <p>Git, AWS, Docker, VMware</p>
      <ul className="list-inline dev-icons">
        <li className="list-inline-item"><FaPython /></li>
        <li className="list-inline-item"><FaDatabase /></li>
        <li className="list-inline-item"><FaAws /></li>
        <li className="list-inline-item"><FaReact /></li>
      </ul>
    </div>
  </section>
  <hr className="m-0" />
</div>

  )
 }
}