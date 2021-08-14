import React, { Component } from 'react'
import myImg from '../assets/img/profile.jpg'

export default class Nav extends Component {

render() {
  return (
      <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
  <a className="navbar-brand js-scroll-trigger" href="#page-top">
    <span className="d-block d-lg-none">Hojin Nam</span>
    <span className="d-none d-lg-block"><img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={myImg} alt="..." /></span>
  </a>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
  <div className="collapse navbar-collapse" id="navbarResponsive">
    <ul className="navbar-nav">
      <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about">About</a></li>
      <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#experience">Experience</a></li>
      <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#projects">Projects</a></li>
      <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#skills">Skills</a></li>
      <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#education">Education</a></li>
      <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#interests">Interests</a></li>
      <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#awards">Awards</a></li>
    </ul>
  </div>
</nav>
      </div>
  )
 }
}