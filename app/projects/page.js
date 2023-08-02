import Image from 'next/image';
import Link from 'next/link';
import githubLogo from '/public/GitHub.png';
import ipGolfLogo from '/public/IPGolf.png';
import objectiviaLogo from '/public/Objectivia.png';
import './projects.css'

const projects = () => {
    return (
        <div className="wrapper">
          <div className="content-container">
            <div className="warning-container">
              <div className="text-warn">
                Warning
              </div>
              <div className="message">
                Don't forget that the applications and software listed here could still be in development at the moment.
              </div>
            </div>
            <div className="work-container">
              <div className="open-source-container">
                <h2>Open Source Projects</h2>
                <Link className="GDG" href="projects/gdg">
                  <Image src={githubLogo} className="icon"/>
                  <div className="box">
                    <div className="font-title-box">nicocarr04/GDG</div>
                    <div className="paragraph-box">
                      This is the source code of a program that I made for a professor that I know, and it makes creating groups much easier. It's not perfect yet because it still has some difficulty putting students in the right places, but it works!
                    </div>
                  </div>
                </Link>
                <Link className="Website" href="projects/wski">
                  <Image src={githubLogo} className="icon"/>
                  <div className="box">
                    <div className="font-title-box">nicocarr04/website-ski-exemple</div>
                    <div className="paragraph-box">
                      This is the source code of a website that I made. The design of the website may not be perfect as I am not a graphic designer.
                    </div>
                  </div>
                </Link>
                <Link className="MarkManager" href="https://github.com/nicocarr04/ProjetAQL-GestionDesNotesEtudiant">
                  <Image src={githubLogo} className="icon"/>
                  <div className="box">
                    <div className="font-title-box">nicocarr04/ProjetAQL-GestionDesNotesEtudiant</div>
                    <div className="paragraph-box">
                      This is the source code of a program that I made with my colleagues for a school project in the software quality assurance class. It was a great way to learn JavaFX and work with classes and structs.
                    </div>
                  </div>
                </Link>
              </div>
              <div className="app-software-container">
                <h2>App, Software That I am working on</h2>
                <a className="IPGolf">
                  <Image src={ipGolfLogo} className="icon"/>
                  <div className="box">
                    <div className="font-title-box">IPGolf</div>
                    <div className="paragraph-box">
                      This application is for improving yourself at golf by using AI to analyze your moves and how you hit the ball. It provides advice and showcases where your moves are wrong by tracing a line on your body in red and showing a proper example of how it should be done.
                    </div>
                  </div>
                </a>
                <a className="Objectivia">
                  <Image src={objectiviaLogo} className="icon"/>
                  <div className="box">
                    <div className="font-title-box">Objectivia</div>
                    <div className="paragraph-box">
                      This application is used to set objectives for a 30-day period. For example, it can be used to stop eating unhealthy foods or to break a bad habit related to stress.
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      );
}

export default projects;