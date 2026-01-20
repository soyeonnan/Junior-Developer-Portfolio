import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import './Projects.css';
import { FeaturedSlide, ArchitectureSlide, ImplementationSlide, TroubleSlide } from './ProjectSlides';

// Register ScrollToPlugin
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const projects = [
  {
    id: 1,
    title: "S.P.I.D.E.R",
    subtitle: "Smart Predictive & Integrated Defect Evaluation Robot (스마트 예지 보전 및 품질 검사 통합 시스템)",
    slides: [
      {
        type: "featured",
        title: "Overview",
        content: {
          summary: "IoT 센서 데이터를 MQTT로 수집·통합하고, 제품 불량 데이터 라벨링을 통해 품질 관리를 자동화하는 시스템입니다. 센서 생존 모니터링과 Zustand 기반 인증 전역 관리를 구현했습니다.",
          role: "IoT Integration & Frontend Lead",
          stack: ["React", "Python (Flask)", "Spring Boot", "Raspberry Pi", "MQTT", "Zustand", "Roboflow"]
        }
      },
      {
        type: "architecture",
        title: "Architecture",
        content: {
          diagram: `[센서 / 카메라]
      ↓
[Raspberry Pi]
  ├─ MQTT (센서 데이터: 온도, 무게, 소음, 누수)
  └─ HTTP (Heartbeat)
      ↓
[Flask] ── 센서 데이터 수집·통합 (구독)
      ↓
[Spring] ── 센서 생존 상태 관리 (ON/OFF)
      ↓
[Frontend]
  ├─ 센서 ON/OFF 모니터링 대시보드
  └─ Zustand 기반 인증 전역 관리`,
          description: "현장 데이터 수집(Flask/MQTT)과 비즈니스 로직(Spring)을 분리하고, 사용자 접근 제어(Frontend)를 강화한 아키텍처입니다."
        }
      },
      {
        type: "implementation",
        title: "Key Implementations",
        content: [
          "제품 불량 데이터 촬영 및 Roboflow 활용 라벨링 (데이터 품질 개선 경험)",
          "라즈베리파이 센서 연동 (온도/무게/소음/누수) 및 2초 주기 MQTT 전송",
          "Flask-MQTT 통합: 확장 가능한 센서 데이터 구독 구조 설계",
          "Spring 생존 신호 관리: 5초 주기 Heartbeat 수신 및 센서 ON/OFF 상태 분리",
          "프론트엔드 - 센서 ON/OFF 상태 실시간 시각화 및 모니터링",
          "Zustand 인증 전역 관리: 로그인 상태 제어 및 불필요한 Prop Drilling 제거",
          "보안: 새로고침 시 인증 유지 및 비인가 직접 접근 차단 (Route Guard)"
        ]
      },
      {
        type: "troubleshooting",
        title: "Troubleshooting & Insight",
        content: [
          {
            problem: "Spring 서버 주소 하드코딩으로 인한 이식성 저하",
            solution: "서버 주소 및 브로커 정보를 환경 변수(Env)로 분리하여 유연성 확보"
          },
          {
            problem: "센서 수집 주기(1초) 과부하로 NULL 값 발생",
            solution: "수집 주기를 5초 이상으로 조정하고 예외 처리 로직을 추가하여 데이터 안정성 확보"
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Medi.Check!",
    subtitle: "약물 및 영양제 섭취 관리 헬스케어 서비스",
    slides: [
      {
        type: "featured",
        title: "Overview",
        content: {
          summary: "사용자의 약물 및 영양제 섭취를 안전하게 관리하고 교차 분석하여 부작용을 예방하는 헬스케어 서비스입니다. 풀스택 개발을 담당하여 인증 및 장바구니 기능을 구현했습니다.",
          role: "Full Stack Developer (Member & Cart)",
          stack: ["React", "Python (Flask)", "Vite", "JWT"]
        }
      },
      {
        type: "implementation",
        title: "Key Implementations",
        content: [
          "Flask 기반 JWT 인증 시스템 구축 및 React 연동",
          "회원가입/수정/탈퇴 및 장바구니 기능 풀스택 구현",
          "React 상태 관리 최적화 및 사용자 경험 개선"
        ]
      },
      {
        type: "troubleshooting",
        title: "Troubleshooting & Insight",
        content: [
          {
            problem: "새로고침 시 로그인 상태 유실",
            solution: "JWT 토큰을 로컬 스토리지에 저장하고 앱 초기화 시 검증 로직 추가하여 세션 유지"
          }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "mbc Board",
    subtitle: "실시간 소통이 가능한 게시판 서비스",
    slides: [
      {
        type: "featured",
        title: "Overview",
        content: {
          summary: "기본적인 게시판 기능을 넘어 사용자 간의 실시간 쪽지/메시지 송수신이 가능한 커뮤니티 플랫폼입니다.",
          role: "Full Stack Developer (Messaging System)",
          stack: ["React", "Spring Boot", "Java", "MySQL"]
        }
      },
      {
        type: "implementation",
        title: "Key Implementations",
        content: [
          "사용자 간 쪽지/메시지 송수신 기능 풀스택 구현",
          "효율적인 메시지 DB 스키마 설계",
          "메시지 송수신 로직 예외 처리를 통한 시스템 안정성 확보"
        ]
      },
      {
        type: "troubleshooting",
        title: "Troubleshooting & Insight",
        content: [
          {
            problem: "실시간 메시지 데이터 처리의 복잡성",
            solution: "Spring Boot와 MySQL을 연동한 효율적 스키마 설계 및 비동기 처리"
          }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Health & Exercise Tracker",
    subtitle: "개인 맞춤형 운동 루틴 관리 및 타이머",
    slides: [
      {
        type: "featured",
        title: "Overview",
        content: {
          summary: "운동 루틴 타이머 및 캘린더 기록 시스템을 갖춘, 웹브라우저에서 바로 사용 가능한 가볍고 직관적인 운동 기록 도구입니다.",
          role: "Frontend Developer",
          stack: ["React", "Mantine UI", "Redux Toolkit", "LocalStorage"]
        }
      },
      {
        type: "implementation",
        title: "Key Implementations",
        content: [
          "운동 루틴 타이머 구현",
          "Mantine Dates를 활용한 캘린더 기록 시스템 개발",
          "Redux Toolkit을 통한 복잡한 타이머 및 캘린더 상태 관리"
        ]
      },
      {
        type: "troubleshooting",
        title: "Troubleshooting & Insight",
        content: [
          {
            problem: "서버 없이 사용자 데이터 유지 필요",
            solution: "LocalStorage를 활용하여 비로그인 상태에서도 영구 보존 구현"
          }
        ]
      }
    ]
  }
];

const Projects = () => {

  const sectionRef = useRef(null);
  const wrapperRef = useRef(null);
  const [activeProject, setActiveProject] = React.useState(projects[0].id);

  // Flatten all slides to calculate total width and mapping
  const allSlides = projects.flatMap(project =>
    project.slides.map((slide, index) => ({
      ...slide,
      projectId: project.id,
      projectTitle: project.title,
      slideIndex: index,
      totalSlides: project.slides.length
    }))
  );

  useEffect(() => {
    // Note: Provide ScrollToPlugin via window or import if possible.
    // Assuming GSAP is globally available or imported correctly.
    const wrapper = wrapperRef.current;
    const totalSlides = allSlides.length;

    const scrollTween = gsap.to(wrapper, {
      xPercent: -100 * (totalSlides - 1) / totalSlides,
      ease: 'none',
      scrollTrigger: {
        id: "projects-scroll",
        trigger: sectionRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (totalSlides - 1),
        end: () => "+=" + (window.innerWidth * (totalSlides - 1)),
        onUpdate: (self) => {
          const currentSlideIndex = Math.round(self.progress * (totalSlides - 1));
          const currentSlide = allSlides[currentSlideIndex];
          if (currentSlide && currentSlide.projectId !== activeProject) {
            setActiveProject(currentSlide.projectId);
          }
        }
      }
    });

    return () => {
      scrollTween.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [allSlides.length]);

  const scrollToProject = (projectId) => {
    const slideIndex = allSlides.findIndex(slide => slide.projectId === projectId);
    if (slideIndex !== -1) {
      const totalSlides = allSlides.length;
      const progress = slideIndex / (totalSlides - 1);

      const scrollTriggerInstance = ScrollTrigger.getById("projects-scroll");
      if (scrollTriggerInstance) {
        const start = scrollTriggerInstance.start;
        const end = scrollTriggerInstance.end;
        const targetScroll = start + (end - start) * progress;

        gsap.to(window, { scrollTo: targetScroll, duration: 1, ease: "power2.inOut" });
      }
    }
  };

  return (
    <section ref={sectionRef} id="projects" className="section projects-section" style={{ overflow: 'hidden', position: 'relative' }}>

      {/* Sticky Navigation */}
      <div className="project-nav-container">
        <div className="project-nav">
          {projects.map((project) => (
            <button
              key={project.id}
              className={`project-tab ${activeProject === project.id ? 'active' : ''}`}
              onClick={() => scrollToProject(project.id)}
            >
              {project.title}
            </button>
          ))}
        </div>
      </div>

      <div className="container" style={{ maxWidth: '100%', padding: 0 }}>
        <div style={{ padding: '0 5%', marginBottom: '20px', marginTop: '80px' }}>
          <h2 className="section-title">Detail Experience</h2>
        </div>

        <div ref={wrapperRef} className="projects-list" style={{
          display: 'flex',
          width: `${allSlides.length * 100}%`,
          maxWidth: 'none',
          flexDirection: 'row',
          flexWrap: 'nowrap',
          gap: 0
        }}>
          {allSlides.map((slide, idx) => (
            <div key={`${slide.projectId}-${slide.slideIndex}`} className="project-slide-container" style={{
              width: '100vw',
              flexShrink: 0,
              height: '80vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative'
            }}>
              <div className="project-card slide-card">
                {slide.type === "featured" && <FeaturedSlide {...slide.content} title={slide.title} />}
                {slide.type === "architecture" && <ArchitectureSlide {...slide.content} title={slide.title} />}
                {slide.type === "implementation" && <ImplementationSlide items={slide.content} title={slide.title} />}
                {slide.type === "troubleshooting" && <TroubleSlide items={slide.content} title={slide.title} />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
