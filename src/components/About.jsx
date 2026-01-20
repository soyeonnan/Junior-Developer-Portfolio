import './About.css';

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <h3>I turn complex problems into simple systems.</h3>

            <p>
              다양한 프로젝트를 경험하며<br />
              데이터 흐름과 시스템 구조의 중요성을 배워왔습니다.<br />
              <br />
              기능 구현에 앞서
              데이터 전달 방식과 예외 상황을 먼저 고민하고, <br />
              더 안정적인 코드를 만들고자 합니다.
            </p>
            <p className="sub-text">
              #DataFlow #ServiceStructure #LearningByDoing #GrowthMindset
            </p>
          </div>

          <div className="about-cards">
            <div className="card">
              <h4>Role</h4>
              <p>Junior Backend Developer</p>
            </div>
            <div className="card">
              <h4>Focus</h4>
              <p>Data Flow · System Structure · Stability</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
