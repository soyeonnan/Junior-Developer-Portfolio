# 💪 Health & Exercise Tracker (Solo Project)

서버 없이 브라우저 환경에서 동작하는 **개인 맞춤형 운동 루틴 관리 및 타이머 웹 애플리케이션**입니다.  
복잡한 설정 없이 바로 운동 기록을 남기고 싶어 하는 니즈를 반영하여, **localStorage**를 활용한 데이터 영속성을 구현했습니다.

## 🛠 Tech Stack
| Category | Technologies |
|----------|--------------|
| **Frontend** | React, Redux Toolkit |
| **UI Library** | Mantine UI (@mantine/core, @mantine/dates) |
| **Storage** | LocalStorage (Browser API) |
| **Deployment** | Vercel / GitHub Pages |

## 🚀 Key Features

### 1. Routine Management (루틴 관리)
- 나만의 운동 루틴 생성, 수정, 삭제
- 운동 항목(세트, 무게, 횟수) 디테일 설정

### 2. Workout Mode & Timer (운동 모드 & 타이머)
- 실전 운동 모드 진입 시 타이머 자동 실행
- 세트 간 휴식 시간(Rest Timer) 카운트다운 제공
- 운동 완료 후 성취감 고취를 위한 완료 페이지

### 3. Calendar & History (캘린더 & 기록)
- **Mantine Dates**를 활용한 직관적인 캘린더 UI
- 날짜별 운동 수행 여부 및 상세 기록(History) 확인 기능
- 운동 빈도를 시각적으로 보여주는 스트릭(Streak) 유사 UI

## 💻 My Contributions (Frontend Solo)
**Role: Sole Developer**

### Client-Side Architecture
- **No-Server Approach**: 별도의 백엔드 없이 `localStorage`를 DB처럼 활용하는 아키텍처 설계.
- **Redux Toolkit**: 전역 상태 관리를 통해 복잡한 타이머 상태와 루틴 데이터를 효율적으로 관리.

### UI/UX Engineering
- **Mantine UI Customization**: 기본 컴포넌트를 커스터마이징하여 다크 모드 기반의 세련된 "Gym App" 테마 구축.
- **Responsive Design**: 모바일에서도 운동 중에 쉽게 터치할 수 있도록 버튼 크기 및 레이아웃 최적화.

## 📂 Project Structure
```
src
├── behaviors  # Redux Slices (store)
├── components # Reusable UI Components
├── pages      # Routing Pages (Home, Routine, History)
├── theme      # Mantine Theme configurations
└── utils      # LocalStorage Helpers
```

## 💡 Troubleshooting & Insights
- **문제**: 브라우저 새로고침 시 타이머나 진행 중인 운동 상태가 초기화되는 문제.
- **해결**: Redux-Persist 또는 LocalStorage 수동 동기화를 통해, 앱이 다시 로드되어도 이전 상태(진행 중이던 세트 등)를 복구하도록 로직 개선.
- **배운점**: 서버가 없는 환경에서의 **클라이언트 측 데이터 모델링(Data Modeling)**과 **상태 보존 전략**에 대해 심도 있게 고민하고 구현해볼 수 있었습니다.
