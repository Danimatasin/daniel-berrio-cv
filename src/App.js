import React, { Fragment, useState, useRef} from 'react';
import { v4 as uuidv4 } from 'uuid';
import { differenceInYears } from 'date-fns';
import { ScrollButton } from './components/ScrollButton';
import { TodoList } from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';
import { Col, Container, Row } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import profile_photo from '../src/assets/resources/profile_photo.jpeg';
import sql_logo from '../src/assets/resources/SQLlogo.png';
import js_icon from '../src/assets/resources/javascript.png';
import git_icon from '../src/assets/resources/Git-Icon-Black.png';
import angular_icon from '../src/assets/resources/angular.png';
import react_icon from '../src/assets/resources/react.png';
import java_icon from '../src/assets/resources/java.png';
import springboot_icon from '../src/assets/resources/springboot.png';
import junit_icon from '../src/assets/resources/junit.png';
import mockito_icon from '../src/assets/resources/mockito.png';
import sonarqube_icon from '../src/assets/resources/sonarqube.png';
import bootstrap_icon from '../src/assets/resources/bootstrap.png';
import ud_icon from '../src/assets/resources/Escudo_UD.png';
import linkedin_icon from '../src/assets/resources/linkedin.png';
import github_icon from '../src/assets/resources/github.png';
import cv_icon from '../src/assets/resources/CV.png';
import whatsapp_icon from '../src/assets/resources/whatsapp.png';
import email_icon from '../src/assets/resources/email.png';
import ubication_icon from '../src/assets/resources/ubication.png';
import './styles.css';

export function App(){

    const [todos, setTodos] = useState([{'id': 1,'task': 'Tarea 1','completed': false}]);

    const todoTaskRef = useRef();

    const toggleTodo = (id) => {
        const newTodos = [...todos];
        const todo = newTodos.find((todo) => todo.id === id)
        todo.completed = !todo.completed;
        setTodos(newTodos);
    }

    const handleTodoAdd = () => {
        const task = todoTaskRef.current.value;
        if(task === '') return;
        
        setTodos((prevTodos) => {
            return [...prevTodos, {id: uuidv4(), task, completed: false}]
        })

        todoTaskRef.current.value = null;
    }

    function calcularDiferenciaEnAnios(fechaInicial) {
        return differenceInYears(new Date(), fechaInicial);
    }

    //Fecha ajustada para no contar el tiempo sin empleo '2017-08-01'
    const fechaFija = new Date('2016-09-01');
    const diferenciaEnAnios = calcularDiferenciaEnAnios(fechaFija, new Date());


    const [expanded, setExpanded] = useState(false);



    const handleClick = (sectionId) => {
        const section = document.getElementById(sectionId);
          section.scrollIntoView({ behavior: 'instant' }, () => {
            // Desplazamiento adicional en dispositivos móviles
          });

        if (window.innerWidth <= 768) {
            setTimeout(() => {
                section.scrollIntoView({ behavior: 'instant' }, () => {
                    // Desplazamiento adicional en dispositivos móviles
                  })
            }, 300);
            
        }
        
    };

    
    const [isSpanishActive, setIsSpanishActive] = useState(false);
    const [isEnglishActive, setIsEnglishActive] = useState(true);
      
    const handleSwitchChange = () => {
        setIsSpanishActive(!isSpanishActive);
        setIsEnglishActive(!isEnglishActive);
      };

    return (
        <Fragment>
            <div className="bodyApp">
                {/*
                <TodoList todos={todos} toggleTodo={toggleTodo}/>
                <input ref={todoTaskRef} type="text" placeholder="Nueva Tarea"/>
                <button onClick={handleTodoAdd}>➕</button>
                <button>🗑️</button>
                <div>
                    Te quedan {todos.filter((todo) => !todo.completed).length} tareas por terminar
                </div>
                */}

                <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark" expanded={expanded}>
                <Container>
                    <Navbar.Brand style={{color: "white", fontWeight: "bold"}}><span className="home-title">Daniel Berrio</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />
                    <Navbar.Collapse >
                    <Nav className="me-auto">
                        <Nav.Link onClick={() => {setExpanded(false); handleClick("summary")}} style={{ color: "white" }}>
                        <span className="home-title">Summary</span>
                        </Nav.Link>
                        <Nav.Link onClick={() => {setExpanded(false); handleClick("skills")}} style={{ color: "white" }}>
                        <span className="home-title">Skills</span>
                        </Nav.Link>
                        <Nav.Link onClick={() => {setExpanded(false); handleClick("experience")}} style={{ color: "white" }}>
                        <span className="home-title">Experience</span>
                        </Nav.Link>
                        <Nav.Link onClick={() => {setExpanded(false); handleClick("languages")}} style={{ color: "white" }}>
                        <span className="home-title">Languages</span>
                        </Nav.Link>
                        <Nav.Link onClick={() => {setExpanded(false); handleClick("education")}} style={{ color: "white" }}>
                        <span className="home-title">Education</span>
                        </Nav.Link>
                        <Nav.Link onClick={() => {setExpanded(false); handleClick("interest")}} style={{ color: "white" }}>
                        <span className="home-title">Interest Pages</span>
                        </Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>              

                <div className="px-4 my-2 description-container text-center">
                    <img id="summary" className="d-block mx-auto mb-4 bd-placeholder-img rounded-circle profile-photo" src={profile_photo} alt="" width="72" height="57"></img>
                    <h1 className="display-5 fw-bold text-body-emphasis name no-select">DANIEL ESTEBAN<br/>BERRIO MENDEZ</h1>
                    <div className="contact-data">
                    <span className="lead mb-4 description no-select"><img src={ubication_icon} className="ubication-icon" alt=""></img>Bogotá - Colombia</span>
                    </div>
                    <div className="contact-data">
                    <a href="https://wa.me/+573132528877" className="lead mb-4 description"><img src={whatsapp_icon} className="whatsapp-icon" alt=""></img>+57 313-252-8877</a>
                    </div>
                    <div className="contact-data">
                        <a href="mailto:deberriom@hotmail.com" className="lead mb-4 description"><img src={email_icon} className="email-icon" alt=""></img>deberriom@hotmail.com</a>
                    </div>
                    <h2 className="display-7 text-body-emphasis degree no-select">SOFTWARE DEVELOPMENT ENGINEER</h2>
                    <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4 description no-select">Software development engineer with {diferenciaEnAnios} years of experience. Full-stack developer. Experience in frontend in Angular, React.js, HTML and CSS, backend in Java with Spring Boot, API REST, Unit Test with JUnit. SonarQube. Important knowledge in SQL database management, stored procedures. Git management and knowledge in accounting and banking processes.</p>
                    </div>
                </div>
                    <div className="text-center">
                        <h1 id="skills" className="display-6 fw-bold text-body-emphasis no-select">SKILLS</h1>
                    </div>
                    <div className="d-flex flex-column flex-md-row p-4 gap-4 py-md-5 align-items-center justify-content-center">
                        <div className="list-group no-select">
                        <div className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                            <img src={js_icon} alt="twbs" width="32" height="32" className="rounded-circle flex-shrink-0"></img>
                            <div className="d-flex gap-2 w-100 justify-content-between">
                                <div>
                                <h6 className="mb-0">JavaScript</h6>
                                <p className="mb-0 opacity-75">Versatile programming language for web development, used in {' '}
                                    <img src={angular_icon} alt="twbs" width="18" height="18" className="rounded-circle flex-shrink-0"></img>
                                    {' '} Angular and {' '}
                                    <img src={react_icon} alt="twbs" width="18" height="18" className="rounded-circle flex-shrink-0"></img>
                                    {' '} React.
                                </p>
                                </div>
                            </div>
                        </div>
                        <div className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                            <img src={java_icon} alt="twbs" width="32" height="32" className="rounded-circle flex-shrink-0"></img>
                            <div className="d-flex gap-2 w-100 justify-content-between">
                                <div>
                                <h6 className="mb-0">Java</h6>
                                <p className="mb-0 opacity-75">An object-oriented programming language, used with {' '}
                                    <img src={springboot_icon} alt="twbs" width="18" height="18" className="rounded-circle flex-shrink-0"></img>
                                    {' '} Spring Boot.
                                </p>
                                </div>
                            </div>
                        </div>
                        <div className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                            <img src={bootstrap_icon} alt="twbs" width="32" height="32" className="rounded-circle flex-shrink-0"></img>
                            <div className="d-flex gap-2 w-100 justify-content-between">
                                <div>
                                <h6 className="mb-0">Bootstrap</h6>
                                <p className="mb-0 opacity-75">A CSS framework directed at responsive, mobile-first front-end web development.
                                </p>
                                </div>
                            </div>
                        </div>
                        <div className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                        <img src={sql_logo} alt="twbs" width="32" height="32" className="rounded-circle flex-shrink-0"></img>
                        <div className="d-flex gap-2 w-100 justify-content-between">
                            <div>
                            <h6 className="mb-0">SQL Databases</h6>
                            <p className="mb-0 opacity-75">SQL Databases Management and Stored Procedures.</p>
                            </div>
                        </div>
                        </div>
                        <div className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                            <img src={git_icon} alt="twbs" width="32" height="32" className="rounded-circle flex-shrink-0"></img>
                            <div className="d-flex gap-2 w-100 justify-content-between">
                                <div>
                                <h6 className="mb-0">Git</h6>
                                <p className="mb-0 opacity-75">A version control system used to track and manage changes to files and projects.</p>
                                </div>
                            </div>
                            </div>
                        <div className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                            <img src={junit_icon} alt="twbs" width="32" height="32" className="rounded-circle flex-shrink-0"></img>
                            <div className="d-flex gap-2 w-100 justify-content-between">
                                <div>
                                <h6 className="mb-0">JUnit</h6>
                                <p className="mb-0 opacity-75">A unit testing framework for Java used with {' '}
                                    <img src={mockito_icon} alt="twbs" width="22" height="22" className="rounded-circle flex-shrink-0"></img>
                                    {' '} <span id="mockito-1">mock</span><span id="mockito-2">ito</span>.
                                </p>
                                </div>
                            </div>
                        </div>
                        <div className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                            <img src={sonarqube_icon} alt="twbs" width="32" height="32" className="rounded-circle flex-shrink-0"></img>
                            <div className="d-flex gap-2 w-100 justify-content-between">
                                <div>
                                <h6 className="mb-0">SonarQube</h6>
                                <p className="mb-0 opacity-75">A platform used to inspect code quality, detect bugs, code smells, among others.
                                </p>
                                </div>
                            </div>
                        </div>
                        </div>
                        
                    </div>
                    <div id="experience" className="text-center no-select">
                            <h1 className="display-6 fw-bold text-body-emphasis">EXPERIENCE</h1>
                    </div>
                    <div className="acordeon-container no-select">
                        <div className="flex-column flex-md-row gap-4 align-items-center justify-content-center acordeon">
                        <div className="acordion-div">
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header><b>COBISCORP</b></Accordion.Header>
                                    <Accordion.Body>
                                    <div className="d-flex gap-2 w-100 justify-content-between">
                                        <div className="mb-4">
                                        <h6 className="mb-0 margen-p lead role">Software Development Engineer</h6>
                                        <h6 className="mb-0 margen-p">Featured Projects:</h6>
                                        <ul>
                                        <li className="mb-0 opacity-75 job-description margen-p">Cooperativa 23 de Julio DB Migration</li>
                                        <li className="mb-0 opacity-75 job-description margen-p">Santander México Bank Web-App Support</li>
                                        </ul>
                                        <h6 className="mb-0 margen-p">Role:</h6>
                                        <p className="mb-0 opacity-75 job-description">Full-stack web app development with Frontend in JavaScript using React. Improved Look and feel with HTML and CSS. REST API consumption, Java backend support with Spring Boot. Management and maintenance of databases in SQL Server. Analysis of implementation of banking processes and maintenance of platforms.</p>
                                        </div>
                                        <small className="opacity-50 periodo">(Aug 2021 - Jun 2023)</small>
                                    </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header><b>DXC TECHNOLOGY</b></Accordion.Header>
                                    <Accordion.Body>
                                    <div className="d-flex gap-2 w-100 justify-content-between">
                                        <div className="mb-4">
                                        <h6 className="mb-0 margen-p lead role">Software Developer</h6>
                                        <h6 className="mb-0 margen-p">Featured Projects:</h6>
                                        <ul>
                                        <li className="mb-0 opacity-75 job-description margen-p">Itau Bank Enrolement Web-App Support</li>
                                        </ul>
                                        <h6 className="mb-0 margen-p">Role:</h6>
                                        <p className="mb-0 opacity-75 job-description">Development of web applications in JavaScript with Angular 8, HTML, CSS, Java support with Springboot. REST API consumption. Unit tests in JUnit. Best practices with Sonarqube. SQL database management and development of stored procedures.</p>
                                        </div>
                                        <small className="opacity-50 periodo">(Oct 2020 - Aug 2021)</small>
                                    </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header><b>DATAPLUS</b></Accordion.Header>
                                    <Accordion.Body>
                                    <div className="d-flex gap-2 w-100 justify-content-between">
                                        <div className="mb-4">
                                        <h6 className="mb-0 margen-p lead role">Process Manager</h6>
                                        <h6 className="mb-0 margen-p">Featured Projects:</h6>
                                        <ul>
                                        <li className="mb-0 opacity-75 job-description margen-p">Web Design for Alpina campaign</li>
                                        <li className="mb-0 opacity-75 job-description margen-p">Web Design for Universidad de La Sabana campaign</li>
                                        </ul>
                                        <h6 className="mb-0 margen-p">Role:</h6>
                                        <p className="mb-0 opacity-75 job-description">Scripts creation for data capture. Website design with HTML, CSS and Bootstrap. Statistical processing and analysis in SPSS.</p>
                                        </div>
                                        <small className="opacity-50 periodo">(Sep 2016 - Nov 2019)</small>
                                    </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                </div>
                <div id="languages" className="text-center title no-select">
                        <h1 className="display-6 fw-bold text-body-emphasis">LANGUAGES</h1>
                </div>
                <div className="switch-container">
                    <BootstrapSwitchButton className="switch" checked={isSpanishActive} onlabel="Spanish (Native)" offlabel="English (B1)" onstyle="warning" offstyle="primary" onChange={handleSwitchChange}/>                    
                </div>
                <div className="switch-container">
                    <BootstrapSwitchButton className="switch" checked={isEnglishActive} onlabel="Spanish (Native)" offlabel="English (B1)" onstyle="warning" offstyle="primary" onChange={handleSwitchChange}/>
                </div>
                <div id="education" className="text-center title">
                        <h1 className="display-6 fw-bold text-body-emphasis no-select">EDUCATION</h1>
                </div>
                <div className="d-flex flex-column flex-md-row p-4-new gap-4 align-items-center justify-content-center education-title no-select">
                        <div className="list-group list">
                        <div className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                        <img src={ud_icon} alt="twbs" width="60px" height="60px" className="rounded-circle flex-shrink-0"></img>
                        <div className="d-flex gap-2 w-100">
                            <div>
                            <h6 className="education-title mb-0">Telematics Engineer</h6><small className="opacity-50 periodo">2021</small>
                            <p className="mb-0 opacity-75">Universidad Distrital Francisco José de Caldas</p>
                            
                            </div>
                        </div>
                        </div>
                        <div className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                        <img src={ud_icon} alt="twbs" width="60px" height="60px" className="rounded-circle flex-shrink-0"></img>
                        <div className="d-flex gap-2 w-100 justify-content-between">
                            <div>
                            <h6 className="education-title mb-0">Data Systematization Technologist</h6>
                            <small className="opacity-50 periodo">2017</small>
                            <p className="mb-0 opacity-75">Universidad Distrital Francisco José de Caldas</p>
                            </div>
                        </div>
                        </div>
                        
                        </div>
                        
                </div>
                <div id="interest" className="text-center title no-select">
                        <h1 className="display-6 fw-bold text-body-emphasis">INTEREST PAGES</h1>
                </div>
                <Container>
      <Row className="justify-content-center title">
        <Col xs={4} md={4} className="d-flex flex-column align-items-center">
        <a href="https://www.linkedin.com/in/deberriom/" className="text-decoration-none icon-align link">
        <img src={linkedin_icon} alt="in/deberriom" width="60px" height="60px" className="rounded-circle icon-photo" />
        <p className="lead mb-4 icon-text my-2">Linkedin</p>
        </a>
        </Col>
        <Col xs={4} md={4} className="d-flex flex-column align-items-center" href="https://github.com/Danimatasin">
        <a href="https://github.com/Danimatasin" className="text-decoration-none icon-align link">
        <img src={github_icon} alt="github.com/Danimatasin" width="60px" height="60px" className="rounded-circle icon-photo" />
        <p className="lead mb-4 icon-text my-2">GitHub</p>
        </a>
        </Col>
        <Col xs={4} md={4} className="d-flex flex-column align-items-center" href="">
        <a href="https://daniel-berrio-cv-1c312f82bb8d.herokuapp.com/" className="text-decoration-none icon-align link">
          <img src={cv_icon} alt="Web Page" width="60px" height="60px" className="rounded-circle icon-photo" />
          <p className="lead mb-4 icon-text my-2">CV</p>
        </a>
        </Col>
      </Row>
    </Container>

                <ScrollButton/>
            </div>
        </Fragment>
    );
}