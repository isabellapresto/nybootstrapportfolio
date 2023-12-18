import 'bootstrap/dist/css/bootstrap.min.css';
import "./About.css"

const About = () => {
  return (
<div id='about' className="container my-5">
      <h1 className="text-center">About Me!</h1>
      <div className="row">
        <div className="col-md-12">
          <p>
            Hi!</p><p> My name is Isabella. I am a driven web developer student studying the program "Web developer in e-commerce" at Medieinstitutet (graduating in May).
          </p>
          <p>
            I am now looking for an internship during the period 2024/02/05 - 2024/05/17.
          </p>
          <p>
            During my education at Medieinstitutet, I have learned about and worked with HTML, CSS, Javascript, Typescript, Node.js, Express, React, API-development and development for WordPress, etc.
          </p>
          <p>
            I really enjoy working with React and am now learning more about Bootstrap. I like both front and backend development but am leaning a bit more towards  frontend. I'm looking for an internship where I can apply what I have learned during my education, learn more about web development, and grow.
          </p>
          <p>
            I'm based in Barcelona but open to work remotely worldwide.
          </p>
          <p>
            Best, <br/>
            Isabella
          </p>
          
          <a href="https://drive.google.com/file/d/18TKvXeGseitPglJthu6lFJiYb-gYp9Gd/view?usp=sharing" className="custom-link" target="_blank" rel="noopener noreferrer">
              My Resume
            </a>
      
        </div>
      </div>
    </div>
  );
};

export default About;
