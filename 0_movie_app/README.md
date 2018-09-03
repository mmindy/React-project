- React Js 로 웹 서비스 만들기 강좌 복습
- 2018.08.21 ~ 

- - - -

## **복기**

### npx
- **an npm package runner**
- npm 5.2.0 이후 

### CRA(create react app)
- 사용 시 최고 장점은 configration 없이 개발 서버 만들어 줌

### react 프로젝트를 시작할 때 필요한 건
- 컴포넌트 디자인
- 컴포넌트의 포함관계, 개별 컴포넌트의 구성 등을 먼저 설계

### prop-types 
- 받아온 데이터(props)의 값을 검증하기 위해 사용하는 prop-types
- props의 종류와 타입 선언하여 개발환경에서의 버그 잡음

### life cycle 
- Render : `componentWillMount()` -> `render()` -> `componentDidMount()`
- Update : `componentWillReceiveProps()` -> `shouldComponentUpdate()` -> `componentWillUpdate()` -> `render()` -> `componentDidUpdate()`

### class component(Smart) vs. functional component(Dumb) 
- **class component** : State O / Props O
- **functional component** : State X / Props O   
  - lifecycle 존재X
  - propTypes를 사용 할 땐,
    ```js
      function Movies () {
        //
      }

      Movies.propTypes = {
        title: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired
      }  
    ```
    
### async await
- async : 비동기
- await : 해당 함수가 끝나기를 기다리는 것(성공여부 판단x)

### react-lines-ellipsis
[LINK](https://www.npmjs.com/package/react-lines-ellipsis)
