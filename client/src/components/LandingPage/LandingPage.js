import React from 'react';
import './LandingPage.css';
import Clouds from './Clouds/Clouds';
import Brain from './static/brain.png';
import Profile from './static/me.svg';
import ContactForm from './ContactForm';
import Logo from './static/logo.svg';
class LandingPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            scrollPosition: window.pageYOffset,
            showContactForm: false
        };
        this.showMenu = this.showMenu.bind(this);
        this.updateScroll = this.updateScroll.bind(this);
    }
    componentDidMount(){
        this.isMenuShown = false;
        document.addEventListener('scroll', this.updateScroll);
    }

    componentWillUnmount(){
        document.removeEventListener('scroll', this.updateScroll);
    }

    updateScroll(){
        var scroll = window.pageYOffset;
        var skyline = document.querySelector('.Skyline');
        skyline.style.transform = 'translate3d(0px, ' + (scroll * .5) + 'px, 0)';
        this.setState({scrollPosition: window.pageYOffset})
    }
    getContactForm(){
        if(this.state.showContactForm){
            return (
                <ContactForm />
            );
        }else{
            return (
                <div className="Container">
                    <h3>Let's Get In Contact!</h3>
                    <h4>Whether You A Non-Profit, Company, Or An Individual, I'd Like To Hear From You!</h4>
                    <button onClick={() =>{
                        this.setState({showContactForm: true});
                    }}>Send Me An Message</button>
                </div>
            );
        }
    }
    showMenu(){
        this.isMenuShown = !this.isMenuShown;
        var desktopmenu = document.querySelector('.Desktop-Menu');
        var menu = document.querySelector('.Menu').firstChild;
        if(this.isMenuShown){
            desktopmenu.style.display = "none";
            menu.style.transform = "translateY(0)";
        }else{
            desktopmenu.style.display = "flex";
            menu.style.transform = "translateY(calc(-100% - 50px))";
        }
    }
    render() {
      return (
        <div className="LandingPage">
            <header>
                <nav className="Desktop" style={ 
                    this.state.scrollPosition === 0 ?
                    {transform: "translateY(-300px)" } :
                    {transform: "translateY(0px)" } }>
                    <div className="Brand" >
                        <img src={Logo} alt="" />
                        <h2>Ben Siefers</h2>
                    </div>
                    <ul className="Desktop-Menu">
                        <li><a href="#LandingStart">Home</a></li>
                        <li><a href="#About">About</a></li>
                        <li><a href="#Skills">Skills</a></li>
                        <li><a href="#Companies">Companies</a></li>
                        <li><a href="#Contact">Contact</a></li>
                    </ul>
                    <i onClick={this.showMenu} className="fas fa-bars"></i>
                </nav>
                <div className="Menu" style={ 
                    this.state.scrollPosition === 0 ?
                    {transform: "translateY(-300px)" } :
                    {transform: "translateY(0px)" }}>
                    <ul>
                        <li><a href="#LandingStart">Home</a></li>
                        <li><a href="#About">About</a></li>
                        <li><a href="#Skills">Skills</a></li>
                        <li><a href="#Companies">Companies</a></li>
                        <li><a href="#Contact">Contact</a></li>
                    </ul>
                </div>
            </header>
            <section id="LandingStart" className="Splash">
                <div className="TitleBox">
                    <h1>
                        Your New Software Developer.
                    </h1>
                    <h2>
                        Let's Reach New Heights Together!
                    </h2>
                </div>
                <div className="Skyline" />
                <Clouds />
            </section>
            <section id="About" className="Profile">
                <div className="AboutMe">
                    <img src={Profile} alt="Me" />
                    <div >
                        <h3>About Me</h3>
                        <p>
                            Hi there, My name is Ben Siefers! I am a computer science student at Indiana University.
                            I am passionate about all facets of software development and as a result have developed a diverse set of skills accross a series fields.
                            I strive to be a continuous learner whether that be learn more about coding or project management as a whole.
                            As a result I want to help people while I continue to strength my skills so while I have time I help various non-profits accross Indiana.
                        </p>
                    </div>
                </div>
                <div className="ThoughtProcess">
                    <div>
                        <h3>My Thought Process</h3>
                        <p>
                            I believe that a software solution should remain simple. Simple is maintainable, it is scaleable, it is easy to refactor, and it readable.
                            Simplictiy helps reduce wasted time spent when requirements change. A simple module is easy communicate and visualize to a team. 
                            It reduces unnecessary tech debt or an enormous code base that inhibits easier solutions further in production.
                            It leads to a more energized team to better find a solution your business related problem.
                        </p>
                    </div>
                    <img src={Brain} alt="" />
                </div>
            </section>
            <section id="Skills" className="Skills">
                <div className="Container">
                    <div className="Description">
                        <h3>Front-End</h3>
                        <p>
                            I have strong front-end development skills, in perticular when it comes to complex graphics web applications. 
                            Generally I have the skills to accomplish any animation or design that is presented to me.
                            I have developed skills with numberous frameworks including Boostrap, React, and many more.
                        </p>
                    </div>
                    <div className="Spacer" />
                    <ul className="Skills1">
                        <li><i className="far fa-check-circle"></i> React & Angular</li>
                        <li><i className="far fa-check-circle"></i> Mastery Of HTML/CSS</li>
                        <li><i className="far fa-check-circle"></i> JavaScript/TypeScript</li>
                    </ul>
                    <ul className="Skills2">
                        <li><i className="far fa-check-circle"></i> WebGL & Three.js</li>
                        <li><i className="far fa-check-circle"></i> Photoshop/Illustrator/3DS MAX</li>
                        <li><i className="far fa-check-circle"></i> Responsive/Progressive Design</li>
                    </ul>
                </div>
                <div className="Container">
                    <div className="Description">
                        <h3>Back-End</h3>
                        <p>
                            I have experience with a multitude of functional, procedurial, and object-oriented languages. 
                            I enjoy working with ASP.NET MVC and Django to create micro-services with as much data as one junior
                            developer can get.
                        </p>
                    </div>
                    <div className="Spacer" />
                    <ul className="Skills1">
                        <li><i className="far fa-check-circle"></i> JavaScript, PHP, Java, Python...</li>
                        <li><i className="far fa-check-circle"></i> Database Management</li>
                        <li><i className="far fa-check-circle"></i> Laravel, Node.js, & MVC</li>
                    </ul>
                    <ul className="Skills2">
                        <li><i className="far fa-check-circle"></i> RESTful Microservices</li>
                        <li><i className="far fa-check-circle"></i> MongoDB</li>
                        <li><i className="far fa-check-circle"></i> MySQL & Postgres</li>
                    </ul>
                </div>
            </section>
            <section id="Companies" className="Companies">
                <div className="Container">
                    <div>
                        <h3>Looking To Expand Your Team?</h3>
                        <p>
                            I am always looking for new opportunities so let me know about yours below! 
                            I am willing to take internships, contract work, or full-time jobs while I finish my schooling regardless if your a small business or a larger one.
                        </p>
                    </div>
                    <div>
                        <h3>Are You A Non-Profit In Indiana?</h3>
                        <p>
                            I may be willing to provide some free software services. If your non-profit focuses on helping others or the community at large regardless of background please feel to contact me below.
                        </p>
                    </div>
                </div>
            </section>
            <section className="Projects">
                <h2>Recent Work</h2>
                <div className="Container">
                    <div className="Box" id="CompuCell3D" >
                        <div className="Container">
                            <h3>CompuCell3D Test Suite</h3>
                            <p>
                               CompuCell3D is used to replicate an enviroment for celluar level organisms. 
                               I worked on a batch test program that allows researchers to run multiple simulations at once and specify what content should be kept.
                               Then organizes the results into a clean format when the program finishs.
                            </p>
                            <button href="https://github.com/bsiefers">See It</button>
                        </div>
                        <div className="Cover" /> 
                    </div>
                    <div className="Box" id="HoosierConnection">
                        <div className="Container">
                            <h3>Hoosier Connection</h3>
                            <p>
                               Hoosier Connection is a social network built for students at IU. 
                               Its features include multi-media posts with comments and sharing, chats, events, 2-factor login, and company pages.
                            </p>
                            <button onClick={() => window.location = "https://github.com/bsiefers"}>See It</button>
                        </div>
                        <div className="Cover" />
                    </div>
                    <div className="Box" id="Frogger">
                        <div className="Container">
                            <h3>Embedded Frogger</h3>
                            <p>
                               Frogger with a custom built driver for a microcomputer. The drive supplies a SPI for FAT32 for textures and sounds, LCD, Wii controller, and more. 
                            </p>
                            <button onClick={() => window.location = "https://github.com/bsiefers"}>See It</button>
                        </div>
                        <div className="Cover" /> 
                    </div>
                    <div className="Box" id="UpBeat">
                        <div className="Container">
                            <h3>Up Beat</h3>
                            <p>
                               Up Beat is a sample insurance policy decision website. I am using it to teach myself the principles of scalabilty using distributed systems.
                            </p>
                            <button onClick={() => window.location = "https://github.com/bsiefers"}>See It</button>
                        </div>
                        <div className="Cover" /> 
                    </div>
                    <div className="Box" id="Constuctor">
                        <div className="Container">
                            <h3>Machine Code Constructor</h3>
                            <p>
                               Takes code in a binary format and reconstructs it into M0 Cortex Assembly code.
                            </p>
                            <button onClick={() => window.location = "https://github.com/bsiefers"}>See It</button>
                        </div>
                        <div className="Cover" /> 
                    </div>
                    <div className="Box" id="MapReduce">
                        <div className="Container">
                            <h3>MapReduce using gRPC & Protocol Buffers</h3>
                            <p>
                               MapReduce is distributed computing idea. Functionally it allows a large problem to be spread accross many machines. 
                               I've implemented a version in Python using gRPC to handle word count.
                            </p>
                            <button onClick={() => window.location = "https://github.com/bsiefers"}>See It</button>
                        </div>
                        <div className="Cover" /> 
                    </div>
                    <div className="Box" id="TerrainGenerator">
                        <div className="Container">
                            <h3>Terrain Generator</h3>
                            <p>
                               Creates simulated hill formations and then colors based on the height. 
                               I used this project for A stepping stone for the shader used to animate the clouds above.
                            </p>
                            <button onClick={() => window.location = "https://github.com/bsiefers"}>See It</button>
                        </div>
                        <div className="Cover" /> 
                    </div>
                    <div className="Box" id="AutoDrone">
                    <div className="Container">
                            <h3>Automous Path-Finding Drone</h3>
                            <p>
                               I am developing a nerual network program as a part of my research 
                               that program finds a path given a road and determines a path for which the drone can take.
                            </p>
                            <button onClick={() => window.location = "https://github.com/bsiefers"}>See It</button>
                        </div>
                        <div className="Cover" /> 
                    </div>
                </div>
            </section>
            <section id="Contact" className="Contact">
                {this.getContactForm()}
            </section>
            <footer>
                <div className="CopyRight">
                    <p>&copy; Ben Siefers 2020</p>
                    <p>Icons Generously Provided By FontAwesome</p>
                </div>
                <div>
                    <div className="Icon">
                        <a href="https://facebook.com/bsiefers"><i className="fab fa-facebook-f"></i></a>
                    </div>
                    <div className="Icon">
                        <a href="https://linkedin.com/bsiefers"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                    <div className="Icon">
                        <a href="https://github.com/bsiefers"><i className="fab fa-github-alt"></i></a>
                    </div>
                </div>
            </footer>
        </div>
      );
    }
}
// Exporting the component 
export default LandingPage; 