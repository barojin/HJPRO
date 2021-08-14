import React, { Component } from 'react'
import aws_img from '../assets/img/aws_certified_cloud_practitioner.png'
import PopupMenu from './utils/popup_menu'

export default class Awards extends Component {
        
    render() {
        return (
            <div>
                <section className="resume-section" id="awards">
                <div className="resume-section-content">
                <h2 className="mb-5">Awards &amp; Certifications</h2>
                <ul className="fa-ul mb-0">
                    <li>
                        <span className="fa-li"><i className="fas fa-trophy text-warning" /></span>                        
                        <PopupMenu id="PopupMenuUnder" menuLabel="Menu Under" title="AWS Certified Cloud Practitioner" position="under" addr="https://github.com/barojin/pages/blob/main/src/assets/AWS%20Certified%20Cloud%20Practitioner%20certificate.pdf">
                            <img className="hiddenImg" src={aws_img} alt="AWS Certified Cloud Practitioner certificate" width="60%"  />
                        </PopupMenu>
                    </li>
                </ul>
                </div>
                </section>
            </div>
        )
    }
}

{/*
      <li>
        <span className="fa-li"><i className="fas fa-trophy text-warning" /></span>
        Mobile Web Specialist - Google Certification
      </li>
      <li>
        <span className="fa-li"><i className="fas fa-trophy text-warning" /></span>
        1
        <sup>st</sup>
        Place - University of Colorado Boulder - Emerging Tech Competition 2009
      </li>
      <li>
        <span className="fa-li"><i className="fas fa-trophy text-warning" /></span>
        1
        <sup>st</sup>
        Place - University of Colorado Boulder - Adobe Creative Jam 2008 (UI Design Category)
      </li>
      <li>
        <span className="fa-li"><i className="fas fa-trophy text-warning" /></span>
        2
        <sup>nd</sup>
        Place - University of Colorado Boulder - Emerging Tech Competition 2008
      </li>
      <li>
        <span className="fa-li"><i className="fas fa-trophy text-warning" /></span>
        1
        <sup>st</sup>
        Place - James Buchanan High School - Hackathon 2006
      </li>
      <li>
        <span className="fa-li"><i className="fas fa-trophy text-warning" /></span>
        3
        <sup>rd</sup>
        Place - James Buchanan High School - Hackathon 2005
      </li>
*/}