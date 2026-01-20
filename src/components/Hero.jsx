import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <div className="line line-1"></div>
        <div className="line line-2"></div>
        <div className="line line-3"></div>
        <div className="line line-4"></div>
        <div className="line line-5"></div>
      </div>
      <div className="container hero-content">
        <h2 className="hero-subtitle">Junior Developer</h2>
        <h1 className="hero-title">RUN <span className="highlight">THE CODE</span></h1>
        <p className="hero-desc">
          심플하지만 강력하게. <br />
          몰입의 즐거움, <span className="text-highlight">멈추지 않는 성장</span>.
        </p>
        <div className="hero-btns">
          <button className="btn" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
            View Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
