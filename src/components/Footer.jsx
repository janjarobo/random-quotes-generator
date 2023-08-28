import { FaFacebook, FaTwitter, FaLinkedinIn, FaReact } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <p>
        by Jay Vee Estilo, code with <FaReact />
      </p>
      <div className='socialLinks'>
        Connect with me
        <br />
        <span>
          <a href='https://www.facebook.com/jayvee.estilo/' target='_blank'>
            <FaFacebook />
          </a>
        </span>
        <span>
          <a href='https://twitter.com/janjarobo' target='_blank'>
            <FaTwitter />
          </a>
        </span>
        <span>
          <a href='https://www.linkedin.com/in/jayvee-estilo/' target='_blank'>
            <FaLinkedinIn />
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
