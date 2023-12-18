
import 'bootstrap/dist/css/bootstrap.min.css';
// import videoBackground from '../../assets/img/hero.mp4';

export default function Hero() {
  return (
    <section className="hero" style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
      {/* Video overlay */}
      <video autoPlay muted loop style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}>
        {/* <source src={videoBackground} type="video/mp4" /> */}
        Your browser does not support the video tag.
      </video>

      {/* Overlay for color */}
      <div className="hero__overlay" style={{ position: 'absolute', left: 0, top: 0, right: 0, bottom: 0, backgroundColor: 'var(--primary-color)', opacity: 0.5, zIndex: 1 }}></div>

      <div id='home' className="hero__content h-100 container-custom position-relative" style={{ zIndex: 2 }}>
        <div className="d-flex h-100 align-items-center hero__content-width">
          <div className="text-white">
            <h2 className="hero__heading fw-bold mb-4" style={{ fontSize: '3rem', color: 'FFF9F4' }}>Hi! I'm Isabella</h2>
            <p className="lead mb-4" style={{ fontSize: '1.5rem', color: 'FFF9F4' }}>Web developer student graduating in May 2024</p>
            <a href="#about" className="mt-2 btn btn-lg btn-outline-light" role="button" style={{ color: 'FFF9F4', borderColor: 'FFF9F4' }}>About me</a>
          </div>
        </div>
      </div>
    </section>
  );
}
