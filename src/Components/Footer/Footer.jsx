import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from '../Contact/Contact';

const Footer = () => {
  return (
    <footer className="text-center py-3">
      <Contact/>
      <p style={{ fontSize: '12px' }}>&copy; 2023 Isabella Presto</p>
    </footer>
  );
};

export default Footer;
