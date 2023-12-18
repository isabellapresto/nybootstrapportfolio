import 'bootstrap/dist/css/bootstrap.min.css';
import './Projects.css'; 
import image1 from '../../assets/img/1.png';
import image2 from '../../assets/img/2.png';
import image3 from '../../assets/img/3.png';
import image4 from '../../assets/img/4.png';
import image5 from '../../assets/img/tech store.png';
import image6 from '../../assets/img/todo.png';
import image7 from '../../assets/img/Wordpress.png';
import image8 from '../../assets/img/labb1.png';
// import image9 from '../../assets/img/calc.png';

const ProductCards = () => {
  return (
    <div id='projects' className="container project-container my-5">
    <h1 className='text-center'>Projects</h1>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        <div className="col">
          <div className="card">
            <img src={image1} className="card-img-top" alt="Product 1" />
            <div className="card-overlay">
              <h5 className="card-title">Log in page</h5>
              <p className="card-text">During my internship at Byggdagboken, I built this page together with my classmate Sandra Höst Kannarberg, using React, Typescripr and Node.js. Users can enter their company name and be redirected to their own subdomain to log in.</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card">
            <img src={image2} className="card-img-top" alt="Product 2" />
            <div className="card-overlay">
              <h5 className="card-title">CRUD API Userlist</h5>
              <p className="card-text">- Rest API endpoints created in quarkus backend <br />
              - MySQL database created with tables; id, name, country <br />
              - Php frontend page page with a list of users from the database, add user, edit and delete (CRUD)</p>
              <a className='project-link' href="https://github.com/isabellapresto/quarkus-api/tree/docker-backend">Github repo - quarkus backend</a>
              <a className='project-link'href="https://github.com/isabellapresto/php-frontend/tree/docker-frontend">Github repo - php frontend</a>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card">
            <img src={image4} className="card-img-top" alt="Product 2" />
            <div className="card-overlay">
              <h5 className="card-title">Stripe integration</h5>
              <p className="card-text">Simple webshop with Stripe integration. Users can register and log in. When registering, a customer is created in Stripe. Login is managed with cookies and all products are managed through Stripe. Node.js, express, React, Typescript</p>
              <a className='project-link' href="https://github.com/isabellapresto/stripenew">Github repo</a>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card">
            <img src={image3} className="card-img-top" alt="Product 2" />
            <div className="card-overlay">
              <h5 className="card-title">Chap app with socket.io</h5>
              <p className="card-text">Group project <br />
Chat app built with socket.io to create a real-time chat where users can chat with each other and create different chat rooms</p>
              <a className='project-link' href="https://github.com/ElinForsberg/ChattApp-tsx">Github repo</a>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card">
            <img src={image5} className="card-img-top" alt="Product 2" />
            <div className="card-overlay">
              <h5 className="card-title">Tech Store</h5>
              <p className="card-text">Frontntend group project recreating a store from mockups using HTML; CSS and Javascript.</p>
              <a className='project-link' href="">Github repo</a>
             <a className='project-link' href="https://isabellapresto.github.io/Tech-Store-Grupp-6/">Live demo</a>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card">
            <img src={image6} className="card-img-top" alt="Product 2" />
            <div className="card-overlay">
              <h5 className="card-title">To Do App</h5>
              <p className="card-text">To do app built using HTML, CSS and JavaScript, storing data in local storage</p>
              <a className='project-link' href="https://github.com/isabellapresto/TO-DO">Github repo</a>
              <a className='project-link' href="https://stirring-praline-9b2356.netlify.app/">Live demo</a>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card">
            <img src={image7} className="card-img-top" alt="Product 2" />
            <div className="card-overlay">
              <h5 className="card-title">Wordpress</h5>
              <p className="card-text">
              Created a online sports shop with a custom child-theme</p>
              <a className='project-link' href="https://github.com/isabellapresto/Sports-store-wordpress-childtheme">Github repo</a>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card">
            <img src={image8} className="card-img-top" alt="Product 2" />
            <div className="card-overlay">
              <h5 className="card-title">Wordpress theme</h5>
              <p className="card-text">Converted static HTML code into a WordPress theme using PHP</p>
              <a className='project-link' href="https://github.com/isabellapresto/tema-Inl-mningsuppgift-1">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCards;
