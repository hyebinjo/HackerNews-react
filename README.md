# Hacker News
![hacker-news](https://user-images.githubusercontent.com/90256059/166223052-c7b776ff-1335-46b4-81d9-8d8b9c31e2a2.PNG)
## 📖 프로젝트 소개
- Fastcampus 교육과정중 진행했던 미니프로젝트
- 소셜 뉴스 웹사이트 [해커뉴스](https://news.ycombinator.com/)의 글을 읽을 수 있는 모바일 전용 Reader 사이트를 React로 개발
- 해커뉴스 공식 API : https://github.com/HackerNews/API
- UX/UI팀과 협업
## 🛠 사용기술
- 프로그래밍 언어: Javascript
- UI 라이브러리: React
- 스타일링 : CSS modules
- 빌드도구: CRA
- 라우트: React Router
## 🗂 폴더구조
![캡처](https://user-images.githubusercontent.com/90256059/166223452-8d40bd54-3ca7-4384-a1e2-0ee6f0db2258.PNG)
## ✅ 주요 기능
- 각 주제와 페이지에 맞는 글 목록을 조회
- 선택한 글의 내용과 코멘트 목록을 조회
- 글을 작성한 유저의 정보 조회
- Pagination : 많은 데이터를 한꺼번에 가져오지 않고 페이징하여 관리
- 대댓글 보기 : comment.jsx와  commentList.jsx를 재귀적으로 사용하여 대댓글 기능을 구현
### 📱 동작페이지
https://hyebinjo.github.io/HackerNews-react/
