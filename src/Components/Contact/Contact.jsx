import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';


const Contact = () => {
  return (
    <div id="contact" className="container my-5">
      <h4 className="text-center">Feel free to reach out to me</h4>
      <p className="text-center">isabella.presto@gmail.com <br />
      0034 691 905 892</p>
      <a href="https://www.linkedin.com/in/isabella-presto-4100a6159/" target="_blank" rel="noopener noreferrer" style={{ color: '#4D3D71', marginRight: '10px' }}>
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>

        <a href="https://github.com/isabellapresto" target="_blank" rel="noopener noreferrer" style={{ color: '#4D3D71' }}>
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>

   
    </div>
  );
};

export default Contact;
