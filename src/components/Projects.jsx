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
    duration: "2025.12.09 ~ 2026.01.16",
    githubUrl: "https://github.com/soyeonnan/spider_front",
    subtitle: "Smart Predictive & Integrated Defect Evaluation Robot (스마트 예지 보전 및 품질 검사 통합 시스템)",
    slides: [
      {
        type: "featured",
        title: "Overview",
        content: {
          summary: "S.P.I.D.E.R는 스마트팩토리 환경에서 설비 센서 데이터와 이미지 데이터를 통합 분석하여 설비 이상을 사전에 감지하고, 제품 불량을 실시간으로 검출하는 AI 기반 통합 예지보전 · 품질 검사 시스템입니다. 실시간 데이터 수집부터 AI 기반 분석, 웹 대시보드 시각화까지 하나의 흐름으로 연결된 구조를 목표로 설계되었습니다.",
          role: "IoT Data Collection · System Integration · Auth State Management",
          stack: ["React 18", "TypeScript", "Zustand", "Spring Boot 3.2.1 (Java 17)", "Flask 2.3.2", "MQTT", "MySQL"],
          media: {
            type: "video",
            url: "https://www.youtube.com/embed/jsGmotxAkgI",
            alt: "S.P.I.D.E.R Demonstration",
            caption: "🎥 S.P.I.D.E.R 프로젝트 시연 영상"
          }
        }
      },
      {
        type: "architecture",
        title: "Architecture",
        content: {
          diagram: `[센서]
        ↓
[Raspberry Pi]
   ├─ MQTT ───────────────▶ [Flask] ──────────────────────────────▶ [Azure MySQL DB 저장]
   │                        └─ MQTT Subscriber (sensor/#)
   │                        ├─ JSON Decode & Sensor Validation
   │                        ├─ 데이터 정규화 & 저장 주기 제어 (60초)
   │                        └─ Machine 자동 생성
   │
   └─ HTTP (Heartbeat) ───▶ [Spring]
                            └─ 센서 생존 상태 관리 (ON / OFF)
                                   ↓
                               [Frontend]
                                ├─ 센서 ON / OFF 모니터링
                                └─ Zustand 기반 인증 전역 관리
`,
          description: "Flask는 센서 데이터를 처리하고 DB에 적재하는 역할을 맡고, Spring은 센서 상태와 관련된 비즈니스 로직을 관리하도록 설계했습니다. 데이터 처리와 서비스 로직을 분리하여 시스템 안정성과 확장성을 확보했습니다."
        }
      },
      {
        type: "implementation",
        title: "Key Role & Implementations",
        content: [
          "라즈베리파이 기반 센서 데이터 수집 및 MQTT 전송 (온도, 습도, 무게, 소음, 누수)",
          "Flask(수집) ↔ Spring(관리) 역할 분리 아키텍처 및 파이프라인 설계",
          "5초 주기 Heartbeat 전송을 통한 센서 생존 상태(ON/OFF) 관리",
          "Zustand를 활용한 인증 상태 전역 관리 및 비인가 접근 차단 (리다이렉트 처리)",
          "센서 데이터 수집 주기 최적화(MQTT) 및 DB 적재 로직 구현",
          "불량 제품 이미지 촬영 및 Roboflow 라벨링 데이터 구축 (AI 학습용)",
          "프론트엔드 설비 모니터링 대시보드 실시간 시각화"
        ]
      },
      {
        type: "troubleshooting",
        title: "Troubleshooting & Insight",
        content: [
          {
            problem: "라즈베리파이에서 실행 중인 파이썬 스크립트가 `Ctrl+C`로 종료되지 않는 현상",
            attempt: "터미널에서 인터럽트 신호 반복 전송",
            solution: "프로세스 ID(PID)를 확인하여 `kill -9 [PID]` 명령으로 프로세스를 강제 종료하도록 처리"
          },
          {
            problem: "라즈베리파이 센서 데이터를 Flask 서버에서 백엔드(Spring)로 전송 실패",
            attempt: "단순 로컬호스트(localhost) 경로 사용",
            solution: "Network 구조 상 라즈베리파이와 백엔드 서버가 물리적으로 분리되어 있음을 확인하고, 백엔드가 실행 중인 호스트 PC의 IP 주소로 엔드포인트를 명시적으로 설정하여 통신 연결"
          },
          {
            problem: "AI 모델(Roboflow) 라벨링 시, 불량 제품(찌그러짐 등) 감지 정확도 저하",
            attempt: "병의 전체 형태와 특정 불량 부위를 각각 개별적인 라벨로 학습 시도",
            solution: "라벨링 클래스 전략 수정: '정상', '색상 불량', '형태 불량(찌그러짐)', '복합 불량' 등 상태별로 클래스를 명확히 세분화하여 학습시킴으로써 모델의 분류 정확도를 대폭 향상"
          },
          {
            problem: "다수 센서 데이터 수집 중 데이터 누락(Null) 또는 개수 부족 시 예측 함수(predictData) 예외 발생",
            attempt: "초기 구현 단계에서 예외 처리 로직이 부재함",
            solution: "1. 센서 데이터 수집 주기를 2초에서 5초로 늘려 데이터 안정성 확보\n2. Null 데이터가 포함된 경우 DB 저장을 스킵하는 방어 로직 추가\n3. 예측 알고리즘 담당 팀원과 협업하여 근본적인 예외 처리 로직 보완 요청 및 적용"
          },
          {
            problem: "Growth & Insight",
            solution: "IoT 환경에서의 MQTT 통신 및 Flask-Spring 간의 이기종 시스템 통합 구조를 깊이 이해하고, API 요청/응답 흐름 및 데이터 파이프라인 설계 역량을 강화함"
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Medi.Check!",
    duration: "2025.10.22 ~ 2025.11.28 (38일)",
    githubUrl: "https://github.com/soyeonnan/drug_project_front",
    subtitle: "Pharmaceutical Shopping Mall Web Service (의약품 쇼핑몰 웹 서비스)",
    slides: [
      {
        type: "featured",
        title: "Overview",
        content: {
          summary: "Medi.Check!는 복용 중인 의약품과 영양제를 같이 섭취해도 안전한지 관리할 수 있도록 도와주는 사이트입니다.",
          role: "Member Domain & Cart Feature (Sole Implementation)",
          stack: ["React 18", "Spring Boot 3.1.5 (Java 17)", "Spring Security + JWT", "JPA (Hibernate 6.x)", "Axios", "React-Cookie"],
          media: {
            type: "video",
            url: "https://www.youtube.com/embed/MQPhBeLTY3c",
            alt: "Medi.Check! Demonstration",
            caption: "🎥 Medi.Check! 1차 프로젝트 시연 영상"
          }
        }
      },
      {
        type: "architecture",
        title: "Architecture",
        content: {
          diagram: `[User (Browser)]
      ↓
[Frontend (React)]
  ├─ 회원가입/로그인/로그아웃
  ├─ JWT 토큰 저장 & 인증 상태 관리
  └─ 장바구니 UI 및 상태 관리
      ↓
[Backend (Spring Boot)]
  ├─ JWT 기반 인증 & 권한(Role) 관리
  ├─ 회원 CRUD API
  ├─ 장바구니 CRUD API
  └─ Interceptor/AOP (Auth Check)
      ↓
[RDB (JPA) / DB]
  ├─ 회원 정보
  └─ 장바구니 데이터`,
          description: "프론트엔드에서 토큰 기반 인증 상태를 관리하고, 백엔드에서 권한 및 데이터 처리를 담당하는 구조입니다. 데이터와 인증 로직을 분리하여 유지보수성을 높이고, 안정적인 사용자 경험을 제공하도록 설계했습니다."
        }
      },
      {
        type: "implementation",
        title: "Key Role & Implementations",
        content: [
          "회원 도메인 및 장바구니 기능 전체 단독 구현",
          "JWT 기반 로그인/로그아웃 및 인증 흐름 설계",
          "회원 정보 수정/탈퇴 및 사용자 권한(Role)별 접근 제어(Admin/User) 구현",
          "쿠키 설정을 활용한 토큰 보안 관리 및 자동 로그인 처리",
          "장바구니 상품 추가/삭제, 수량 변경 및 로그인 연동 데이터 지속성 보장",
          "Spring Security 없이 서비스 레이어에서의 커스텀 인증 로직 구축"
        ]
      },
      {
        type: "troubleshooting",
        title: "Troubleshooting & Insight",
        content: [
          {
            problem: "LocalStorage에 JWT 토큰 저장 시 XSS 등 보안 취약점 존재",
            attempt: "편의성을 위해 초기에는 LocalStorage 사용",
            solution: "보안 강화를 위해 Token 저장소를 HttpOnly Cookie로 변경하여 자바스크립트를 통한 탈취를 방지하고 보안성을 높임"
          },
          {
            problem: "비밀번호 재확인 후 페이지 이동/새로고침 시 인증 상태가 유지되지 않아 반복 인증 필요",
            attempt: "단일 페이지 내 상태로만 관리 시도",
            solution: "비밀번호 재확인 성공 상태(Flag)를 전역 상태 관리(Store)에 포함시켜, 페이지 이동 후에도 사용자 경험을 해치지 않고 의도된 작업을 수행할 수 있도록 개선"
          },
          {
            problem: "장바구니 수량 조절 시 재고 부족(0개) 상품에 대한 예외 처리 미흡으로 결제 프로세스 오류 발생",
            attempt: "단순 수량 제한 로직만 적용",
            solution: "재고가 0인 상품은 장바구니 UI에서 '품절' 상태를 명시하고, 선택 및 결제 진행이 불가능하도록 방어 로직을 UI/UX 및 로직 레벨에서 동시에 구현"
          },
          {
            problem: "Growth & Insight",
            solution: "Web Storage(LocalStorage vs Cookie)의 보안적 차이를 이해하고 적용하였으며, DB Role 설계를 통해 백엔드 기반의 권한 제어 시스템을 경험함"
          }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "mbc Board",
    duration: "2025.08.25 ~ 2025.09.05",
    githubUrl: "https://github.com/soyeonnan/mbcBoard_react",
    subtitle: "실시간 소통이 가능한 익명 게시판 서비스",
    slides: [
      {
        type: "featured",
        title: "Overview",
        content: {
          summary: "실시간 소통과 상호작용이 가능한 웹 기반의 익명 커뮤니티 플랫폼입니다. React와 Spring Boot를 기반으로 구축되었으며, 익명 게시글 작성, 실시간 쪽지 송수신, 그리고 룰렛 게임 기능을 통합하여 사용자에게 매끄러운 경험을 제공합니다.",
          role: "Full Stack Developer (Messaging System)",
          stack: ["React 18", "Spring Boot 2.7.15 (Java 11)", "Spring Data JPA", "MySQL", "React-Router-Dom"],
          media: {
            type: "image",
            url: "/images/mbc_board.png",
            alt: "MBC Board Messaging UI",
            caption: "✉️ 실시간 쪽지 송수신 및 게시판 UI"
          }
        }
      },
      {
        type: "architecture",
        title: "Architecture",
        content: {
          diagram: `[User]
   ↓
[Client (React)] 
   ├─ 게시판/쪽지 UI
   └─ Axios Interceptor (Auth)
   ↓        ↕ (REST API)
[Server (Spring Boot)]
   ├─ Controller (API)
   ├─ Service (Biz Logic)
   └─ Repository (JPA)
        ↕
[Database (MySQL)]
   ├─ Member
   ├─ Message
   └─ Board/Reply`,
          description: "클라이언트와 서버 간 RESTful API 통신 구조이며, 백엔드는 Layered Architecture를 따릅니다. 메시지 및 게시판 데이터는 RDB(MySQL)와 연관 관계 매핑을 통해 정합성을 보장합니다."
        }
      },
      {
        type: "implementation",
        title: "Key Role & Implementations",
        content: [
          "Messaging System (쪽지 기능) 전체 Lead 개발 (풀스택)",
          "쪽지 송수신 및 상태(읽음 등) 갱신을 위한 RESTful API 설계 및 구현",
          "Message 엔티티 스키마 설계 및 Member와의 연관 관계 매핑",
          "React 기반 쪽지함 UI (받은/보낸 쪽지) 및 모달/팝업 구현",
          "비동기 통신(Axios)을 활용한 실시간 성격의 쪽지 전송 및 에러 핸들링"
        ]
      },
      {
        type: "troubleshooting",
        title: "Troubleshooting & Insight",
        content: [
          {
            problem: "한쪽 사용자가 쪽지를 삭제하면 상대방의 쪽지함에서도 메시지가 사라지는 데이터 무결성 문제",
            attempt: "단순 DELETE 쿼리 수행",
            solution: "Soft Delete 방식을 도입하여, '보낸 사람'과 '받은 사람'이 모두 삭제했을 때만 실제 DB에서 데이터를 제거하도록 로직을 수정하여 데이터 보존성 확보"
          },
          {
            problem: "Growth & Insight",
            solution: "다대다 관계에서의 데이터 삭제 정책(Cascade vs Soft Delete)을 고민하고 해결하며, UI 상의 편의성(Toggle Select 등)과 백엔드 로직의 연계성을 깊이 학습함"
          }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Health & Exercise Tracker",
    duration: "2025.07.16 ~ 2025.08.01",
    githubUrl: "https://github.com/soyeonnan/mini_project",
    subtitle: "개인 맞춤형 운동 루틴 관리 및 타이머",
    slides: [
      {
        type: "featured",
        title: "Overview",
        content: {
          summary: "운동 루틴 타이머 및 캘린더 기록 시스템을 갖춘, 웹브라우저에서 바로 사용 가능한 가볍고 직관적인 운동 기록 도구입니다.",
          role: "Frontend Developer",
          stack: ["React 18", "Redux Toolkit", "Mantine UI", "LocalStorage (No-Server)"],
          media: {
            type: "image",
            url: "/images/health_tracker.png",
            alt: "Health & Exercise Tracker Overview",
            caption: "💪 운동 기록 및 루틴 관리 메인 화면"
          }
        }
      },
      {
        type: "architecture",
        title: "Architecture",
        content: {
          diagram: `[User]
   ↓
[Browser (React SPA)]
   ├─ UI Components (Mantine)
   ├─ Global State (Redux Toolkit)
   │     ├─ Timer Slice
   │     └─ Record Slice
   └─ Persistence Layer (LocalStorage)
         ↕
[Browser Storage]
   └─ JSON Data (Saved State)
`,
          description: "서버가 없는 SPA(Single Page Application) 구조로, 모든 데이터와 상태 관리는 브라우저 내부에서 Redux와 LocalStorage를 통해 이루어집니다."
        }
      },
      {
        type: "implementation",
        title: "Key Role & Implementations",
        content: [
          "React & Redux Toolkit 기반 프론트엔드 단독 설계 및 구현",
          "LocalStorage를 활용한 데이터 영속성 처리 (운동 기록 영구 저장)",
          "Mantine UI 라이브러리를 활용한 직관적인 캘린더 및 타이머 UI 개발",
          "운동 루틴 상태 관리 및 타이머/휴식 카운트다운 로직 최적화",
          "Redux Slices 분리를 통한 상태 관리 모듈화 (Timer, User, Record)"
        ]
      },
      {
        type: "troubleshooting",
        title: "Troubleshooting & Insight",
        content: [
          {
            problem: "Growth & Insight (프로젝트 성과)",
            solution: "초기 프로젝트로서 Bootstrap 활용법과 반복되는 UI의 컴포넌트화(재사용성)를 체득함. 또한 React Router를 통한 라우팅 구조 이해, LocalStorage와 Calendar 라이브러리를 연동하여 데이터의 영구 저장 및 시각화 흐름을 완성하는 귀중한 경험을 쌓음"
          }
        ]
      }
    ]
  }
];

const Projects = () => {
  const [activeProjectIndex, setActiveProjectIndex] = React.useState(0);
  const [activeSlideIndex, setActiveSlideIndex] = React.useState(0);
  const slideRef = useRef(null);
  const lastScrollTime = useRef(0);
  const touchStartX = useRef(0);

  const currentProject = projects[activeProjectIndex];
  const totalSlides = currentProject.slides.length;

  const nextSlide = () => {
    setActiveSlideIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setActiveSlideIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleProjectTabClick = (index) => {
    setActiveProjectIndex(index);
    setActiveSlideIndex(0);
  };

  // Handle Touch Swipes for Mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchStartX.current - touchEndX;

    if (Math.abs(deltaX) > 50) { // Swipe threshold
      if (deltaX > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  };

  useEffect(() => {
    // Fade in animation when slide or project changes
    gsap.fromTo(slideRef.current,
      { opacity: 0, x: 20 },
      { opacity: 1, x: 0, duration: 0.4, ease: "power2.out" }
    );
  }, [activeProjectIndex, activeSlideIndex]);

  return (
    <section
      id="projects"
      className="section projects-section"
    >
      <div className="container">
        {/* Project Navigation Tabs */}
        <div className="project-nav-container">
          <div className="project-nav">
            {projects.map((project, index) => (
              <button
                key={project.id}
                className={`project-tab ${activeProjectIndex === index ? 'active' : ''}`}
                onClick={() => handleProjectTabClick(index)}
              >
                {project.title}
              </button>
            ))}
          </div>
        </div>

        {/* Carousel Content Area */}
        <div
          className="carousel-wrapper"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <button className="carousel-control prev" onClick={prevSlide} aria-label="Previous Slide">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <div className="carousel-content" ref={slideRef}>
            <div className="project-card slide-card">
              <div className="card-top-info">
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                  <span className="card-project-title">{currentProject.title}</span>
                  {currentProject.githubUrl && (
                    <a
                      href={currentProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="github-link"
                      title="View on GitHub"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                      <span>GitHub</span>
                    </a>
                  )}
                  <span className="project-duration">{currentProject.duration}</span>
                </div>
                <span className="card-pagination">{activeSlideIndex + 1} / {totalSlides}</span>
              </div>

              {/* Slide Content Rendering */}
              {(() => {
                const slide = currentProject.slides[activeSlideIndex];
                if (slide.type === "featured") return <FeaturedSlide {...slide.content} title={slide.title} />;
                if (slide.type === "architecture") return <ArchitectureSlide {...slide.content} title={slide.title} />;
                if (slide.type === "implementation") return <ImplementationSlide items={slide.content} title={slide.title} />;
                if (slide.type === "troubleshooting") return <TroubleSlide items={slide.content} title={slide.title} />;
                return null;
              })()}
            </div>
          </div>

          <button className="carousel-control next" onClick={nextSlide} aria-label="Next Slide">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>

        {/* Indicator Dots */}
        <div className="carousel-dots">
          {currentProject.slides.map((_, idx) => (
            <button
              key={idx}
              className={`dot ${activeSlideIndex === idx ? 'active' : ''}`}
              onClick={() => setActiveSlideIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
