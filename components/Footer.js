import './footer.css';
// Importation d'images importantes
import linkedinLong from 'public//LinkedIn-long.png'
import githubLong from 'public//GitHub-long.png'
import Link from 'next/link';
import Image from 'next/image'


const Footer = () => {
    return (
        <footer>
            <div className='footer-links'>
            <Link href="https://www.linkedin.com/in/nicocarr04/" className='icon-footer'><Image src={linkedinLong} alt="LinkedIn logo"></Image></Link>
            <h3 className='copyright'>Copyright 2023 &copy; Nicolas Games </h3>
            <Link href="https://github.com/nicocarr04" className='icon-footer'><Image src={githubLong} alt='GitHub logo'></Image></Link>
            </div>
        </footer>
    );
  }

export default Footer;