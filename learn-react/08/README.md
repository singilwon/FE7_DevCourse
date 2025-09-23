### 전역상태 관리

#### Context API 의 커스텀 Provider

- provider 관련 폴더는 항상 이름을 ~~~Provider로 이름을 짓는다
- provider는 children을 사용함
- react.memo, useCallback을 써도 메모이제이션 안되는 이유 :
  value로 넘어갈 때 항상 객체가 새로 정의되어서 넘어감, 그때 값이 바뀌었다고 생각하고 메모이제이션이 풀림
  - 근데 useMemo를 쓰면 아예 값이 안 바뀌기 때문에
  - 고정되는 값이랑 고정이 되면 안되는 값을 나눠서 createContext 해줌

#### 커스텀 훅

- 리액트에서 use로 시작하는 사용자 정의 함수를 말함
- 리액트에서 제공하는 기본 훅을 조합해서 공통 로직을 재사용 가능하게 만드는 도구
- 기존에 존재하는 리액트 훅을 사용해서 나만의 훅을 새로 정의하는 것

### Redux ToolKit

- 중앙 집중형 장치 같은 느낌이라 생각(하나의 redux store 안에 여러가지 스랄이스를 꽂아넣는다 생각, 그걸 공급해주는 것)
- (Redux vs Redux Toolkit)

  - Redux -> 2015년부터 출시된 (자바스크립트) 전역 상태 관리 라이브러리
  - Redux Toolkit(2019) -> Redux를 더 쉽게 쓰게 하기 위한 보조 도구
  - 둘은 다른거임, Redux 는 라이브러리, ToolKit은 도구 집합
  - redux toolkit 홈페이지에 써있는 install 2개 설치
  - 기본 틀 가져오기(store.ts는 관례), store 폴더 안 store.ts
  - redux store를 공급하기 위해 <Provider store={store}> 를 써주는데, app에 써도 되고 main에 써도 됨

- react redux는 자동으로 최적화가 됨(redux의 장점)

- 공급해주는 방법(쓰는 방법)
  - useSelector로 꽂혀있는 것 중에서 하나를 골라오는 것
  - 콜백함수로 표현
  - state는 store파일에서 제공하는 상태파일이 제공되는 것
  - state.count의 count는 우리가 store에서 이름 지어진 것
    - 그의 value 값은 counterSlice의 value값에 접근하는 것
    - 만약 거기서 value라고 이름 안 지었으면 그 이름에 맞춰서 불러야됨
  - 액변발생함수(reducer)에 접근하기 위해서는 useDispatch 사용해야 함
  - 여기서 이벤트에 줄 때 name/그에 맞는 reducer 형식으로 불러옴
  - 쓰는 곳에서 매개변수를 넘겨주는 방식으로 하고 싶으면, state 다음에 action으로 받아주면 됨(type 잘 확인할 것)
