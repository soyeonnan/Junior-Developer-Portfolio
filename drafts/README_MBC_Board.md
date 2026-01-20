# 📋 MBC Board (Team Project)

React 프론트엔드와 Spring Boot 백엔드로 구축된 **커뮤니티 게시판 및 실시간 쪽지/메시지 서비스**입니다.  
사용자 간의 원활한 소통을 위해 게시판의 기본 기능뿐만 아니라, **1:1 쪽지 송수신 시스템**을 중점적으로 구현했습니다.

## 🛠 Tech Stack
| Category | Technologies |
|----------|--------------|
| **Frontend** | React, CSS3, Axios |
| **Backend** | Java, Spring Boot, JPA |
| **Database** | MySQL |
| **Tools** | Git/GitHub, IntelliJ, VS Code |

## 🚀 Key Features

### 1. Board System (게시판)
- 일반적인 게시판의 **CRUD (작성, 조회, 수정, 삭제)** 기능 완벽 구현
- 게시글 **검색 및 페이징(Pagination)** 처리
- 댓글 및 대댓글 기능

### 2. Messaging System (쪽지 기능) - ⭐ My Main Contribution
- **실시간 쪽지 송수신**: 사용자 간 1:1 메시지 전송 기능
- **쪽지 보관함**: 받은 쪽지 / 보낸 쪽지 분리 관리 및 보관 기능
- **삭제 및 복구**: 쪽지 휴지통 기능 및 복구 로직 구현
- **알림(Badge)**: 읽지 않은 메시지 개수 표시

## 💻 My Contributions (Full Stack)
**Role: Messaging System Lead Developer**

### Backend (Spring Boot)
- **DB Schema Design**: `Message` 엔티티 설계 (Sender, Receiver, Content, Status 등) 및 연관 관계 매핑
- **API Development**: 쪽지 송수신, 조회, 삭제를 위한 RESTful API 개발
- **Business Logic**: 본인 확인 로직 및 예외 처리 (잘못된 수신자, 삭제된 메시지 처리 등)

### Frontend (React)
- **UI/UX Implementation**: 직관적인 쪽지함 UI 및 메시지 작성 모달 구현
- **State Management**: 비동기 데이터 통신(Axios) 처리 및 리스트 갱신 로직 구현
- **Integration**: 백엔드 API와 프론트엔드 컴포넌트 간 데이터 파이프라인 구축

## 📂 Project Structure
```
src
├── main
│   ├── java/com/mbc/board
│   │   ├── controller  # MessageController included
│   │   ├── entity      # Message Entity
│   │   ├── repository  # JPA Repositories
│   │   └── service     # Business Logic
│   └── resources
└── ...
```

## 💡 Troubleshooting & Insights
- **문제**: 쪽지 데이터가 많아질수록 조회 속도가 느려질 우려.
- **해결**: 수신자/발신자 인덱싱(Indexing) 고려 및 페이징 처리를 API 단계에서 적용하여 성능 최적화.
- **배운점**: 단순한 CRUD를 넘어, 두 사용자(Sender-Receiver) 간의 관계를 다루는 로직을 구현하며 **RDB의 연관 관계 및 데이터 무결성**의 중요성을 깊이 이해하게 되었습니다.
