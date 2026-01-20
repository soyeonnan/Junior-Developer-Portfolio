import './About.css';

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <h3>Run with Passion, Code with Precision.</h3>
            <p>
              안녕하세요, 끊임없이 달리는 신입 개발자입니다.<br />
              코드를 작성하며 느끼는 몰입의 즐거움과<br />
              어제보다 더 나은 내가 되기 위한 성장의 가속도를 지향합니다.
            </p>
            <p className="sub-text">
              #WebDeveloper #Frontend #Passion #FastLearner
            </p>
          </div>

          <div className="about-cards">
            <div className="card">
              <h4>Education</h4>
              <p>Computer Science / 2024</p>
            </div>
            <div className="card">
              <h4>Experience</h4>
              <p>Personal Projects & Open Source</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
