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
        <h2 className="hero-subtitle">Junior Backend Developer</h2>
        <h1 className="hero-title">RUN <span className="highlight">THE CODE</span></h1>
        <p className="hero-author">with <span className="highlight-name">soyeon Han</span></p>
        <p className="hero-desc">
          복잡한 문제를 심플한 구조로 해결하며, <br />
          <span className="text-highlight">멈추지 않고 성장합니다.</span>
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
