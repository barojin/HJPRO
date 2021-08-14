import React, { Component } from 'react'
import Project from './ProjectComponents/projectComp'

export default class Projects extends Component {    
    constructor(props){
        super(props);
    }

render() {
  return (
    <div>
      <section className="resume-section" id="projects">
        <div className="resume-section-content">
          <h2 className="mb-5">Projects</h2>                        
            {/* <Project gitUrl="" title="" techStack="" content="" /> */}
            <Project gitUrl="https://github.com/barojin/DjangoTutorial"
                title="Polls Web App" techStack="[python, Django framework, Sqlite3]"
                content={["Create the website that shows polls and vote in them and admin site provide the add, change, and delete polls. It contains how to handle the route, models in the Database, automated testing, views and templates, admin page conventions, packaging to deploy and patching with git."]}
                />
            <Project gitUrl="#Projects" title="Covid Case Tracker" techStack="[AWS(Lambda, S3, Step functions, CloudWatch, Lightsail), Python]" content={["Covid Case Tracker, Implemented a covid case tracker that pulls the number of new cases all over the world everyday from CDC website and displays the plotted trend graph on WordPress website using AWS lightsail. Used AWS Lambda to run .py code and stored files in S3. Implemented AWS Cloudwatch once the numbers increase significantly for a certain country."]} />
            <Project gitUrl="https://github.com/barojin/Microservice_Spring" title="Microservices on Spring" techStack="[Java, Spring framework, JPA, h2, HATEOAS, Netflix Eureka]" content={["Implemented Login service which stores user info and validates the request invoked and Post service which is for CRUD of the post and communication of each service via Eureka server dispatcher."]} />
            <Project gitUrl="https://github.com/barojin/DuckNQuiz" title="Strategy Pattern implementation" techStack="[Java, JUnit]" content={["Contains the abstract class which is HAS-A relation and the interface which is extended to concrete implementation classes. The objects for the client are assigned at runtime and it is tested based on equivalence classes in JUnit jupiter."]} />
            <Project gitUrl="https://github.com/barojin/WRN" title="Web App with React.js, Node.js" techStack="[JavaScript, React, Node, NeDB, RESTful]" content={["Implemented CRUD table, role-based access control, session cookies on the front-end with Reactjs, encrypted password, REST architecture, test functions with Promise to manage asynchronous executions on the back-end with Nodejs."]} />
            <Project gitUrl="https://github.com/barojin/PMC" title="Bounded-buffer problem" techStack="[C, semaphore, Ubuntu]" content={["Used the POSIX Threads(pthreads), semaphore to control access to shared resources. There are three functions such that producer which writes an element in buffer A, consumer which removes an element in buffer B, middleman which moves an element from A to B."]} />
            <Project gitUrl="https://github.com/barojin/MMSMCUDA" title="Compute Unified Device Architecture(CUDA) programming with shared memory" techStack="[C++, CUDA Toolkit]" content={["Optimized the use of memory between threads on parallel computing to maximize the bandwidth. It avoids redundant transfers by loading and storing data in a coalesced pattern to shared memory from global memory."]} />
            <Project gitUrl="https://github.com/barojin/PTEMPI/blob/main/cpi.c" title="Prouhet–Tarry–Escott problem on Message Passing Interface(MPI)" techStack="[C, Message Passing Interface library]" content={["Implemented MPI parallel program  parallelizing the operation between 16 threads on a computer cluster and compared the performance of  O(2n) computation between on single laptop and cluster computers."]} />                                     
        </div>
      </section>
    </div>
  )
 }
}
