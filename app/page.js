import Image from 'next/image'
import profilePic from '../public/profile-pic.jpg'
import './page.css'

export default function Home() {
  return (
    <div className="wrapper">
      <div className="about-container">
        <div className="profile-name-container">
          <Image src={profilePic} alt="Profile pic" className='profile'/>
          <h3>Nicolas Carriere</h3>
          <h5 className="current">Currently Studying Computer Programming</h5>
        </div>
        <div className="description-container">
          <h1>Let's me introduce myself</h1>
          <p>
            Hi, I am Nic and I am French. I also speak English as my second language because I am bilingual. I am starting my first year of university soon and I am also finishing my second year in my college program soon. I am 20 years old and ready to learn in life and achieve my future goals. To be transparent, I am someone who has ADHD but I use it to my advantage to get some ideas for my future projects. I won't call this a weakness, but it is more like a strength.
          </p>
          <p>
            Now, for what we call technology, this is my biggest passion in life. That's what I discovered when I was young and still playing some video games in my free time. But when I discovered that it was possible to make a program that could help you, a game that you could have fun showcasing to others, or just trying something and learning it because while programming, we don't stop learning. Technology evolves day by day and that's what I love about it.
          </p>
          <div className='skills-container-main'>
            <h1>My Skills</h1>
            <div className="skills-container">
              <div className="frontend-skills-container">
              <div className="skillbar">
                  <div className="sexy-side html"></div>
                  <span className="title">HTML</span>
                  <span className="percent">HIGH-INTERMEDIATE</span>
                </div>
                <div className="skillbar">
                  <div className="sexy-side css"></div>
                  <span className="title">CSS</span>
                  <span className="percent">INTERMEDIATE</span>
                </div>
                <div className="skillbar">
                  <div className="sexy-side js"></div>
                  <span className="title">JS</span>
                  <span className="percent">INTERMEDIATE</span>
                </div>
              </div>
              <div className="backend-skills-container">
              <div className="skillbar">
                  <div className="sexy-side csharp"></div>
                  <span className="title">C#</span>
                  <span className="percent">HIGH-INTERMEDIATE</span>
                </div>
                <div className="skillbar">
                  <div className="sexy-side java"></div>
                  <span className="title">Java</span>
                  <span className="percent">HIGH-INTERMEDIATE</span>
                </div>
                <div className="skillbar">
                  <div className="sexy-side sql"></div>
                  <span className="title">SQL</span>
                  <span className="percent">HIGH-INTERMEDIATE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
