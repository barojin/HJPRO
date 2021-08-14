import React, { Component } from 'react'
import { render } from "react-dom";
import axios from "axios";

import { FaLinkedin, FaGithub, FaFileDownload } from "react-icons/fa";

export default class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
          profileList: [],
        }
    }

    componentDidMount() {
        this.refreshList();

    }

    refreshList = () => {
    axios
      .get("api/profiles/")
      .then((res) => this.setState({ profileList: res.data }))
      .catch((err) => console.log(err));
  };

    displayProfile = () => {
        return this.state.profileList.map((item) => (
            <div className="resume-section-content">
                <h1 className="mb-0"> {item.name.split(" ")[0]}
                <span className="text-primary"> {item.name.split(" ")[1]}</span>
                </h1>
                <div className="subheading mb-5">
                <a>{item.address}<br></br></a>
                <a href={"mailto:" + item.email}> {item.email}</a>
              </div>
                <p className="lead mb-5">{item.intro.split(',').map(line => <div>{line}</div> )}</p>
              <div className="social-icons">
                  <a className="social-icon" href={item.linkedin}><FaLinkedin /></a>
                  <a className="social-icon" href={item.github}><FaGithub /></a>
                  <a className="social-icon" href="https://github.com/barojin/RESUME/raw/main/resume.pdf"><FaFileDownload /></a>
              </div>
            </div>
        ))
    }

    render(){
      return (
          <div>
              <section className="resume-section" id="about">
                  <h1>{this.state.profile}</h1>
                  {this.displayProfile()}
              </section>
              <hr className="m-0" />
          </div>
      )
    }
}