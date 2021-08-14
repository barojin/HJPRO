import React, { Component } from 'react'
import Experience from './ExperienceComponents/experienceComp'

export default class Experiences extends Component {
    constructor(props){
        super(props);
        this.state = {contents: ["Create task automation(dynamic-link library, C\#, .NET) on Windows server with an open-source(selenium). The service reduced the time for the laborious task in the accounting department, which manually fetched bank statements of various online banking services, from a few hours to a second, and released it to production.", "Build the test automation environment in various Operating Systems (OS) on VMware for operational acceptance and regression testing in an exploratory approach. The corner, critical, and custom cases by analyzing error logs and defects from the beta users are considered. It cut off the beta version error rate by 99%.", "Create new UIs, modify legacy functions in Windows Apps and query statements for Oracle SQL, write the documentation for the creation, and modification that I made.", "Build a responsive web page with AngularJS to support several dashboards in order to monitor server health and enable controlling the on-Premises service on the local server remotely for on-call team members."]};
    }
    
    render() {        
        return (
            <div>
                <section className="resume-section" id="experience">
                    <div className="resume-section-content">
                    <h2 className="mb-5">Experience</h2>
        
                    <Experience jobTitle="Software Developer" url="http://gscms.co.kr/" company="GSCMS Corporation" location="Seoul, South Korea" date="Feburary 2017 - December 2018" contents={this.state.contents} />                          
                    </div>
                </section>
                <hr className="m-0" />
            </div>
        );
    }
}