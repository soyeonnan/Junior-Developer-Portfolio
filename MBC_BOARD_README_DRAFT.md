# 📢 MBC Board (익명 커뮤니티 서비스)

## 📖 소개
**MBC Board**는 실시간 소통과 상호작용이 가능한 웹 기반의 **익명 커뮤니티 플랫폼**입니다.
**React**와 **Spring Boot**를 기반으로 구축되었으며, 익명 게시글 작성, 실시간 쪽지 송수신, 댓글 및 대댓글 기능을 통해 사용자에게 매끄러운 경험을 제공합니다.
이 프로젝트는 **RESTful API 설계 원칙**, **JWT 기반의 보안 인증**, 그리고 **복잡한 상태 관리**를 실전에서 적용하고 학습하기 위해 설계되었습니다.

> **Note**: 이 문서는 `develop` 브랜치의 기능들과 제가 직접 수행한 성능 및 구조 개선 경험을 중심으로 작성되었습니다.

---

## 🛠 기술 스택 (Tech Stack)

### Frontend
- **Framework**: React (Vite)
- **Language**: JavaScript
- **Styling**: CSS, Styled-components
- **State Management**: Context API / Custom Hooks
- **Communication**: Axios (with Interceptors)

### Backend
- **Framework**: Spring Boot
- **Language**: Java
- **Database**: MySQL (JPA/Hibernate)
- **Security**: JWT (JSON Web Tokens), BCrypt

---

## ✨ 주요 기능 (Key Features)

### 1. 사용자 시스템
- **인증 (Auth)**: JWT를 이용한 회원가입 및 보안 로그인.
- **권한 관리**: 일반 회원 vs 익명 사용자 간의 권한 분리.

### 2. 게시판 및 커뮤니티 (핵심 기능)
- **CRUD**: 게시글 작성, 조회, 수정, 삭제 기능.
- **익명성 보장**: 사용자가 자신의 신원을 밝히지 않고 자유롭게 글을 작성 가능.
- **댓글 시스템**: 게시글에 대한 댓글 및 대댓글 기능 지원.
- **검색 및 필터**: 키워드 및 카테고리 기반의 빠른 게시글 검색.

### 3. 쪽지 시스템 (Messaging System) - [담당 구현 파트]
- **1:1 실시간 쪽지**: 사용자 간의 개인적인 메시지 송수신 기능.
- **수신/발신함 관리**: 보낸 쪽지와 받은 쪽지를 구분하여 체계적으로 관리.
- **상태 동기화**: 쪽지 읽음 여부 및 도착 알림 상태 실시간 반영.

### 4. 인터랙티브 요소
- **룰렛 게임**: 사용자가 즐길 수 있는 미니 게임 기능.
- **반응형 디자인**: PC 및 모바일 환경 모두에 최적화된 UI 제공.

---

## 🏗 아키텍처 (Architecture)

```mermaid
graph TD
    Client[Client (React)] -->|REST API| Server[Server (Spring Boot)]
    Server -->|JPA/Hibernate| DB[(MySQL Database)]
    
    subgraph Frontend
    Auth[Auth Interceptor]
    MsgUI[Messaging UI]
    BoardUI[Board UI]
    end
    
    subgraph Backend
    Controller -- calls --> Service
    Service -- calls --> Repository
    end
```

---

## 🚀 트러블 슈팅 및 개선 사항 (Troubleshooting & Improvements)

*(성능 최적화 및 제가 주도적으로 개선한 아키텍처 내용입니다)*

### 1. 대용량 데이터 조회 성능 최적화
- **문제 (Problem)**: 쪽지와 게시글 데이터가 쌓이면서 단순 `findAll` 조회 시 **DB 부하가 증가하고 페이지 로딩 속도가 느려지는 현상** 발생.
- **해결 (Solution)**: 
  - API 레벨에서 **페이징(Pagination)** 기법을 도입하여 한 번에 전송하는 데이터 양을 제한.
  - 자주 조회되는 `receiver_id`, `sender_id` 등의 컬럼에 **DB 인덱싱(Indexing)** 적용.
- **결과 (Result)**: 쿼리 실행 속도가 대폭 단축되었으며, 대량의 데이터에서도 UI 반응 속도가 유지됨.

### 2. 복잡한 비동기 로직 및 인증 토큰 관리 효율화
- **문제 (Problem)**: 모든 API 호출마다 헤더에 JWT 토큰을 수동으로 추가하고 401 에러 처리를 반복하다 보니 **코드 중복이 심하고 유지보수가 어려움**.
- **해결 (Solution)**: 
  - **Axios Interceptor**를 도입하여 요청 로직을 중앙화.
  - 요청 시 자동으로 Access Token을 헤더에 주입하고, 응답 에러 발생 시 중앙에서 토큰 갱신 또는 리다이렉트 처리하도록 개선.
- **결과 (Result)**: 코드가 간결해짐(DRY 원칙 준수)과 동시에 인증 관련 에러에 대한 방어 로직이 견고해짐.

### 3. 실시간 쪽지 상태 동기화
- **문제 (Problem)**: 쪽지를 보내거나 읽었을 때, 새로고침 없이는 '안 읽은 쪽지 개수'나 UI 상태가 즉시 갱신되지 않는 문제.
- **해결 (Solution)**: 
  - 쪽지 관련 상태(읽음 처리 등)를 반환하는 전용 API 설계.
  - React 상태 관리 로직을 개선하여, 서버 응답 대기 시간 동안 UI를 먼저 업데이트하는 **Optimistic UI** 패턴을 일부 적용하거나, 상태 업데이트 트리거를 최적화.

---

## 👨‍💻 제작자 (Contributors)
- **한소연 (본인)**: Full Stack Developer (쪽지 시스템 구현, Axios 아키텍처 설계)
- **송상윤**: 팀장, Backend
- **배연희**: Frontend
- **배기웅**: Backend
