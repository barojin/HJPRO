import React, { Component } from 'react'


export default class Education extends Component {

render() {
  return (
     <div>
  <section className="resume-section" id="education">
    <div className="resume-section-content">
      <h2 className="mb-5">Education</h2>

      <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="flex-grow-1">
          <h3 className="mb-0">Cal State University East-bay, Hayward, CA</h3>
          <div className="subheading mb-3">M.S. in Computer Science</div>
        </div>
        <div className="flex-shrink-0"><span className="text-primary">Jan 2019 - May 2021</span></div>
      </div>

      <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="flex-grow-1">
          <h3 className="mb-0">Samsung Multicampus, Seoul, South Korea</h3>
          <div className="subheading mb-3">Android developer course</div>          
        </div>
        <div className="flex-shrink-0"><span className="text-primary">May 2016 - Nov 2016</span></div>
      </div>

      <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="flex-grow-1">
          <h3 className="mb-0">Sejong University, Seoul, South Korea</h3>
          <div className="subheading mb-3">B.S in Electronic Engineering</div>
        </div>
        <div className="flex-shrink-0"><span className="text-primary">Mar 2009 - Aug 2015</span></div>
      </div>

    </div>
  </section>
  <hr className="m-0" />
 </div>
  )
 }
}