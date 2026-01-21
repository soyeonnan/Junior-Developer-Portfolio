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
          stack: ["React", "TypeScript", "Zustand", "Spring Boot", "Flask", "Raspberry Pi", "MQTT", "Roboflow"]
        }
      },
      {
        type: "implementation",
        title: "My Role & Contribution",
        content: [
          "라즈베리파이 기반 센서 데이터 수집 및 MQTT 전송 구현",
          "Flask(수집) ↔ Spring(관리) 역할 분리 구조 설계",
          "센서 ON/OFF 생존 상태(Heartbeat) 관리 로직 구현",
          "프론트엔드 설비 상태 실시간 시각화",
          "Zustand를 활용한 인증 상태 전역 관리 및 비인가 접근 차단",
          "불량 제품 촬영 및 라벨링 데이터 구축 (AI 학습용)",
          "실제 하드웨어 데이터를 다루는 엔드투엔드 파이프라인 구축",
          "데이터 수집과 서비스 로직을 분리하여 확장성 확보"
        ]
      },
      {
        type: "architecture",
        title: "Architecture",
        content: {
          diagram: `[센서 / 카메라]
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
        title: "Key Implementations",
        content: [
          "센서 데이터 수집: 온도, 습도, 무게, 소음, 누수 센서 연동 (2초 주기 MQTT 전송)",
          "센서 생존 관리: 5초 주기 Heartbeat 전송 및 프론트엔드 즉시 상태 확인",
          "제품 불량 데이터 구축: 실제 불량 상황 재현 촬영 후 Roboflow 라벨링",
          "인증 상태 전역 관리: Zustand로 로그인 상태 제어 및 새로고침/URL 접근 시 리다이렉트 처리"
        ]
      },
      {
        type: "troubleshooting",
        title: "Troubleshooting & Insight",
        content: [
          {
            problem: "서버 주소를 라즈베리파이에 하드코딩하여 유지보수 어려움",
            solution: "환경 변수 기반으로 설정을 분리하여 배포 및 변경 유연성 확보"
          },
          {
            problem: "센서 수집 주기 과도(2초)로 인한 NULL 데이터 및 부하 발생",
            solution: "수집 주기를 5초 이상으로 조정하여 데이터 안정성 확보"
          },
          {
            problem: "Growth & Insight (프로젝트 성과)",
            solution: "IoT 센서 연동 및 MQTT 비동기 통신 이해, Flask/Spring 분리 아키텍처 설계 역량, Zustand 인증 관리 패턴 습득"
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
          stack: ["React", "Spring Boot", "JWT", "JPA", "RDB"]
        }
      },
      {
        type: "implementation",
        title: "My Role & Contribution",
        content: [
          "회원 도메인 및 장바구니 기능 전체 단독 구현",
          "회원가입 / 로그인 / 로그아웃 및 JWT 기반 인증/인가 처리",
          "회원 정보 수정 및 삭제(탈퇴) 기능 구현",
          "사용자 권한(Role) 설정 및 권한별 접근 제어(Admin/User)",
          "장바구니 상품 추가/삭제, 수량 변경 및 상태 관리",
          "로그인 연동 장바구니 데이터 지속성 보장"
        ]
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
  └─ 장바구니 CRUD API
      ↓
[RDB (JPA) / DB]
  ├─ 회원 정보
  └─ 장바구니 데이터`,
          description: "프론트엔드에서 토큰 기반 인증 상태를 관리하고, 백엔드에서 권한 및 데이터 처리를 담당하는 구조입니다. 데이터와 인증 로직을 분리하여 유지보수성을 높이고, 안정적인 사용자 경험을 제공하도록 설계했습니다."
        }
      },
      {
        type: "implementation",
        title: "Key Implementations",
        content: [
          "JWT 토큰 기반 로그인 인증 흐름 설계 및 구현",
          "권한(Role)에 따른 API 접근 제어 및 보안 강화",
          "회원 CRUD 전반에 대한 REST API 설계 및 프론트 연동",
          "쿠키 기반 토큰 관리 및 자동 로그인 처리",
          "사용자 인증 기반 장바구니 시스템 구축 (DB 연동)"
        ]
      },
      {
        type: "troubleshooting",
        title: "Growth & Insight",
        content: [
          {
            "problem": "쿠키 기반 JWT 토큰 저장 시 Refresh Token 갱신 로직과 Access Token 만료 처리 구조가 분리되어 있지 않음",
            "solution": "Access Token과 Refresh Token 발급 및 갱신 로직을 서비스 레이어에서 통합 관리하여 코드 재사용성과 안정성 강화"
          },
          {
            "problem": "회원 CRUD API에서 중복된 인증/인가 검증 코드가 발생할 수 있음",
            "solution": "공통 JWT 인증 및 Role 체크 미들웨어/데코레이터를 활용해 코드 중복 제거 및 유지보수성 향상"
          },
          {
            "problem": "로그인 시 JWT 토큰을 쿠키에 바로 저장하지만, 보안 옵션(secure, httpOnly) 미설정 시 CSRF 공격 위험 존재",
            "solution": "쿠키 설정 시 `httpOnly=True`, `secure=True` 옵션 적용 및 SameSite 정책 설정으로 보안 강화"
          },
          {
            "problem": "장바구니 기능 구현 시, 로그인 상태와 장바구니 연동 로직이 프론트/백엔드에 분산되어 상태 관리 복잡",
            "solution": "백엔드에서 사용자 인증 기반 장바구니 상태 관리와 API 통합, 프론트는 단순 조회/조작만 수행하도록 구조 개선"
          },
          {
            "problem": "Growth & Insight (프로젝트 성과)",
            "solution": "JWT 인증 흐름, 쿠키 기반 상태 관리, Role 기반 접근 제어, 사용자 인증 연동 장바구니 구현 경험 확보"
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
          summary: "React 프로트엔드와 Spring Boot 백엔드로 구축된 익명 커뮤니티 게시판 및 실시간 쪽지/메세지 서비스 입니다.",
          role: "Full Stack Developer (Messaging System)",
          stack: ["React", "Spring Boot", "Java", "MySQL"]
        }
      },
      {
        type: "implementation",
        title: "My Role & Contribution",
        content: [
          "Messaging System (쪽지 기능) 전체 Lead 개발",
          "RESTful API 설계 및 백엔드 쪽지 관련 비즈니스 로직 구현",
          "Message 엔티티 스키마 설계 및 DB 연관 관계 매핑",
          "React 기반 쪽지 UI 및 리스트/상세 화면 구현",
          "비동기 쪽지 송수신 및 상태 갱신 로직 설계",
        ]
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
            "problem": "쪽지 데이터 조회 시 대량 데이터에 대한 성능 고려가 부족함",
            "solution": "수신자/발신자 인덱싱과 API 레벨에서 페이징 처리를 적용해 조회 성능을 최적화"
          },
          {
            "problem": "Frontend에서 비동기 요청 처리 시 상태 관리가 단순하고 재사용성 낮음",
            "solution": "Axios 요청 로직을 커스텀 훅 또는 공통 통신 서비스로 모듈화하여 코드 중복 제거 및 유지보수성 향상"
          },
          {
            "problem": "게시판/쪽지 UI에서 사용자 반응성(로딩, 에러 피드백) 처리 미흡",
            "solution": "로딩 스피너, 에러 메시지 UI 및 폼 유효성 검증 추가로 UX 향상"
          },
          {
            "problem": "Backend API에서 엔티티 관계 정의에 따른 데이터 무결성/예외 처리 로직이 과도하게 분산될 우려",
            "solution": "서비스 레이어에서 공통 예외 처리 및 책임 분리 구조를 적용해 명확한 비즈니스 로직 분리"
          },
          {
            "problem": "Growth & Insight (프로젝트 성과)",
            "solution": "REST 기반 게시판 CRUD, 실시간 쪽지 시스템, 양방향 통신 설계 및 RDB 연관 관계에 대한 실무 이해 확보"
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
          stack: ["React", "Mantine UI", "Redux Toolkit", "LocalStorage"]
        }
      },
      {
        type: "implementation",
        title: "My Role & Contribution",
        content: [
          "React & Redux Toolkit 기반 프론트엔드 단독 설계 및 구현",
          "Mantine UI 라이브러리를 활용한 모던하고 직관적인 UI 개발",
          "LocalStorage를 활용한 데이터 영속성 처리 로직 구현",
          "운동 타이머 및 캘린더 등 복잡한 상태 관리 로직 최적화",
          "사용자 경험(UX)을 고려한 애니메이션 및 인터랙션 구현"
        ]
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
            "problem": "서버가 없는 구조라서 데이터 영속성 보장이 브라우저에만 의존되어 있음",
            "solution": "LocalStorage 관리 로직을 분리된 유틸로 정리하고 Redux-Persist와 같은 라이브러리 적용으로 상태 복구와 확장성을 확보"
          },
          {
            "problem": "브라우저 새로고침 시 운동 진행 상태(타이머 등)가 초기화됨",
            "solution": "Redux-Persist 또는 LocalStorage 동기화 전략을 도입해 앱 재로드 후에도 진행 중 상태 복구 처리"
          },
          {
            "problem": "루틴/운동 데이터 구조가 복잡해질수록 상태 관리 로직이 분산되어 유지보수성이 떨어질 수 있음",
            "solution": "Redux Toolkit을 활용해 슬라이스별 책임을 명확히 분리하고, selector & thunk로 재사용 가능한 상태 접근 경로를 제공"
          },
          {
            "problem": "UI에서 비동기 없는 상태 변화 처리 시 로딩/상태 표시가 명확하지 않아 UX가 떨어질 수 있음",
            "solution": "운동 시작/정지/완료 등 상태에 따라 UI 로딩/피드백을 강화하고, 애니메이션/토스트 UX를 적용하여 피드백 체감을 개선"
          },
          {
            "problem": "Growth & Insight (프로젝트 성과)",
            "solution": "LocalStorage 기반 데이터 모델링, Redux Toolkit 상태 아키텍처 설계, 브라우저 환경만으로 동작하는 SPA 구현 역량 확보"
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

  useEffect(() => {
    // Fade in animation when slide or project changes
    gsap.fromTo(slideRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
    );
  }, [activeProjectIndex, activeSlideIndex]);

  return (
    <section id="projects" className="section projects-section">
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
        <div className="carousel-wrapper">
          <button className="carousel-control prev" onClick={prevSlide} aria-label="Previous Slide">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <div className="carousel-content" ref={slideRef}>
            {/* The current slide */}
            <div className="project-card slide-card">
              {/* Card Header Info */}
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
                  <span className="project-duration">
                    {currentProject.duration}
                  </span>
                </div>
                <span className="card-pagination">{activeSlideIndex + 1} / {totalSlides}</span>
              </div>

              {/* Slide Content */}
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
