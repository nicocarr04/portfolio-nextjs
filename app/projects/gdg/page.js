import Image from 'next/image'
import GDGPic from '@/public/GDGInterface.png'
import './gdg.css'

const gdg = () => {
    return (
      <div className="wrapper">
        <div className="projects-container">
          <div className="image-container">
            <Image src={GDGPic} alt="gdg" className='gdgpic'/>
          </div>
          <div className="description-gdg-container">
            <a className="remove-linkbar" href='https://github.com/nicocarr04/GDG'><h1 className='project-name'>Group Builder</h1></a>
            <h2 className='project-name'>C#, WinForms</h2>
            <p>
                I have developed a group creator program that as the process of organizing students into groups. This software allows you to effortlessly add or remove students from your class. You can also import existing configurations or save your current setup for future use. 
            </p>
          </div>
        </div>
      </div>
    )
}
  

export default gdg;