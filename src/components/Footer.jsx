import { FaFacebook, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const coderData = [
  {
    id: 1,
    icon: 'FaFacebook',
    link: 'https://www.facebook.com/jayvee.estilo/',
  },
  {
    id: 2,
    icon: 'FaTwitter',
    link: 'https://twitter.com/janjarobo',
  },
  {
    id: 3,
    icon: 'FaLinkedinIn',
    link: 'https://www.linkedin.com/in/jayvee-estilo/',
  },
];

const Footer = () => {
  return (
    <footer>
      <p>by Jay Vee Estilo</p>
      <div className='socialLinks'>
        Connect with me
        <div>
          <a href='https://www.facebook.com/jayvee.estilo/' target='_blank'>
            <FaFacebook />
          </a>
        </div>
        <div>
          <a href='https://twitter.com/janjarobo' target='_blank'>
            <FaTwitter />
          </a>
        </div>
        <div>
          <a href='https://www.linkedin.com/in/jayvee-estilo/' target='_blank'>
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
