##### 코딩알려주는 누나의 새로운 컨텐츠 따라하기 🐤
##### (단순히 재미를 위해서,,, 재밌잖슴,,, 재밌으면 됐잖아요!)

- Protocol : 소통을 하기 위해 약속한 방식
- 웹에서는 HTTP를 주로 사용하는데 이번에는 웹 소켓 프로토콜을 활용해서 채팅앱을 만들어봄
- socket.io 라이브러리를 활용할 것임!

|HTTP|web socket|
|:--:|:--:|
|일방적인 사랑인거임,,, 단방향 통신</br>클라이언트의 요청이 있을때 서버가 응답할 수 있음</br>클라이언트의 요청 후 서버가 응답하면 그 연결은 끊김</br>할말 다하면 끝나는 사이다 이말이야</br>연결에 지속성이 없음|한번 연결 시작하면 터널 뚫리듯이 계속 열려있음</br>양방향통신이겠지용~?</br>각자 대화를 원할 때 요청할 수 있음</br>정보를 계속 주고받을 수 있는거~!|


1. 백엔드 세팅 : 데이터베이스 세팅(유저정보, 메세지 정보), 웹소켓 세팅 
2. 프론트엔드 세팅 : 웹소켓 세팅
3. 백엔드 프론트엔드 연결 테스트
4. 유저 로그인
5. 메세지 주고받기