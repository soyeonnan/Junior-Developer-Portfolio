import React, { useState } from 'react';
import './Projects.css';
import ProjectModal from './ProjectModal';

const projects = [
  {
    id: 1,
    title: "S.P.I.D.E.R",
    desc: "IoT 기반 스마트 결함 탐지 및 평가 로봇 시스템. 다중 센서 데이터 수집(MQTT) 및 실시간 모니터링 대시보드.",
    stack: ["React", "Python (Flask)", "Spring Boot", "Raspberry Pi", "MQTT", "Zustand"],
    role: "IoT Integration & Frontend Lead",
    achievement: "라즈베리파이 센서 통합 및 MQTT/HTTP 이중 통신 구조 구축. Zustand 전역 상태 관리를 통한 보안 인증 프로세스 구현.",
    background: "위험한 배관 탐사 환경을 대체할 수 있는 스마트 로봇 시스템이 필요했습니다. 하지만 하드웨어 한계로 인해 센서 데이터를 실시간으로 모니터링하는 데 어려움이 있었습니다.",
    problemSolution: "문제: 라즈베리파이와의 통신 지연 및 센서 오작동.\n해결: MQTT 프로토콜을 도입하여 실시간 데이터 전송 속도를 개선하고, 고장 상황 시뮬레이션을 통해 예외 처리 로직을 강화했습니다.",
    actionsInsights: "다양한 센서(온습도, 무게, 누수)를 통합 관리하는 로직을 설계했습니다. 특히, React-Zustand를 활용해 복잡한 인증 상태를 전역으로 관리하며 리다이렉트 흐름을 매끄럽게 개선했습니다.",
    contribution: "하드웨어와 소프트웨어를 잇는 '연결'의 중요성을 배웠습니다. 복잡한 IoT 데이터를 사용자에게 직관적으로 전달하는 UI 역량을 바탕으로, 실시간 모니터링 시스템 구축에 기여할 수 있습니다.",
    github: "https://github.com/soyeonnan/spider_front",
    image: "https://placehold.co/600x400/161616/D41F4D?text=S.P.I.D.E.R",
    architecture: "https://placehold.co/800x400/1e1e1e/D41F4D?text=Architecture:+IoT+MQTT+Flow"
  },
  {
    id: 2,
    title: "Medi.Check!",
    desc: "사용자의 약물 및 영양제 섭취를 안전하게 관리하고 교차 분석하는 헬스케어 서비스.",
    stack: ["React", "Python (Flask)", "Vite", "JWT"],
    role: "Full Stack Developer (Member & Cart)",
    achievement: "회원가입/수정/탈퇴 및 장바구니 풀스택 구현. Flask 기반 JWT 인증 시스템 구축 및 React 상태 관리 최적화.",
    background: "잘못된 약물 혼용으로 인한 부작용을 예방하고자 시작했습니다. 사용자에게 개인화된 약물 정보를 제공하는 것이 핵심이었습니다.",
    problemSolution: "문제: 새로고침 시 로그인 상태가 유실되는 문제.\n해결: JWT 토큰을 활용한 인증 시스템을 Flask로 구축하고, React 상태 관리와 연동하여 영속적인 로그인 세션을 구현했습니다.",
    actionsInsights: "사용자 경험을 최우선으로 생각하여 장바구니 및 회원 정보 관리 기능을 직관적으로 설계했습니다. 백엔드와 프론트엔드의 데이터 흐름을 완벽하게 이해하고 구현하는 경험을 했습니다.",
    contribution: "사용자 중심의 UI/UX 설계 능력과 풀스택 개발 경험을 살려, 서비스의 안정성과 편의성을 높이는 데 기여하겠습니다.",
    github: "https://github.com/soyeonnan/drug_project_front",
    image: "https://placehold.co/600x400/161616/A0153E?text=Medi.Check!",
    architecture: "https://placehold.co/800x400/1e1e1e/A0153E?text=Architecture:+Flask+JWT+Auth"
  },
  {
    id: 3,
    title: "mbc Board",
    desc: "팀 프로젝트로 진행한 게시판 서비스. React 프론트엔드와 Spring Boot 백엔드로 구성.",
    stack: ["React", "Spring Boot", "Java", "MySQL"],
    role: "Full Stack Developer (Messaging System)",
    achievement: "사용자 간 쪽지/메시지 송수신 기능 및 관리 풀스택 구현. 백엔드 DB 설계부터 프론트엔드 UI 연동까지 전담.",
    background: "기본적인 게시판 기능을 넘어, 사용자 간의 실시간 소통이 가능한 커뮤니티 플랫폼을 만들고자 했습니다.",
    problemSolution: "문제: 실시간 메시지 데이터 처리의 복잡성.\n해결: Spring Boot와 MySQL을 연동하여 효율적인 메시지 DB 스키마를 설계하고, React에서 비동기로 데이터를 매끄럽게 처리하도록 구현했습니다.",
    actionsInsights: "DB 설계부터 API 구현, UI 연동까지 하나의 기능을 풀스택으로 책임지고 완성했습니다. 특히 메시지 송수신 로직에서의 예외 처리를 통해 시스템 안정성을 높였습니다.",
    contribution: "백엔드 로직에 대한 깊은 이해를 바탕으로 프론트엔드와의 협업 효율을 극대화할 수 있습니다. 시스템 전체 구조를 보는 눈을 키웠습니다.",
    github: "https://github.com/soyeonnan/mbcBoard_react",
    image: "https://placehold.co/600x400/161616/800020?text=MBC+Board",
    architecture: "https://placehold.co/800x400/1e1e1e/800020?text=Architecture:+Messaging+System+DB"
  },
  {
    id: 4,
    title: "Health & Exercise Tracker",
    desc: "개인 맞춤형 운동 루틴 관리 및 타이머 서비스. 운동 기록 캘린더 기능을 통한 체계적인 건강 관리 웹사이트.",
    stack: ["React", "Mantine UI", "Redux Toolkit", "LocalStorage"],
    role: "Frontend Developer (Solo Project)",
    achievement: "운동 루틴 타이머 구현 및 Mantine Dates를 활용한 캘린더 기록 시스템 개발. 비로그인 데이터 영속성 확보.",
    background: "복잡한 앱 대신, 웹브라우저에서 바로 사용 가능한 가볍고 직관적인 운동 기록 도구가 필요했습니다.",
    problemSolution: "문제: 서버 없이 사용자 데이터를 유지해야 함.\n해결: LocalStorage를 적극 활용하여 비로그인 상태에서도 사용자의 운동 루틴과 기록이 영구적으로 보존되도록 구현했습니다.",
    actionsInsights: "Mantine UI 라이브러리를 커스터마이징하여 개발 생산성을 높였고, Redux Toolkit을 통해 복잡한 타이머 및 캘린더 상태를 효율적으로 관리했습니다.",
    contribution: "새로운 기술(Mantine UI, Redux)을 빠르게 습득하여 프로젝트에 적용하는 적응력을 길렀습니다. 주도적으로 문제를 해결하는 개발자가 되겠습니다.",
    github: "https://github.com/soyeonnan/mini_project",
    image: "https://placehold.co/600x400/161616/700F2B?text=Health+Tracker",
    architecture: "https://placehold.co/800x400/1e1e1e/700F2B?text=Architecture:+Client-Side+Persistence"
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.project-card').forEach(card => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={project.id} className={`project-card stagger-${(index % 4) + 1}`}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <button onClick={() => openModal(project)} className="btn primary-btn">
                    Read More
                  </button>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn secondary-btn">
                    GitHub
                  </a>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
                <div className="project-details">
                  <p><strong>Role:</strong> {project.role}</p>
                  <p><strong>Effect:</strong> {project.achievement}</p>
                </div>
                <div className="project-stack">
                  {project.stack.map(tech => <span key={tech}>{tech}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ProjectModal project={selectedProject} onClose={closeModal} />
    </section>
  );
};

export default Projects;
