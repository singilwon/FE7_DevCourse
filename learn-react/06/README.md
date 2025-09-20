## asd

### 리액트 훅

- 함수형 컴포넌트에서도 상태(state)나 생명주기(lifecycle) 같은 리액트 기능을 사용할 수 있게 해주는 특별한 함수

#### useState

- useState 변수에 참조 자료형이 들어가 있을때 값을 바꾸고 싶다면, 새로운 껍데기를 만들어야 한다
- const 새로운 객체 = structuredClone(상태변수)로 새로운 객체를 만들고, set변수(새로운 객체)로 넣어줘야 변경된다
- 이 방법은 보기 좋지 않아서, 콜백함수를 이용한다
- 콜백함수 내에 {...상태변수, 바꿀 변수: 바꿀 값}와 같이 적으면 된다, 새로운 객체처럼 보이기 때문에

#### useState + Form

- onChange (React) => onInput + onChange(Dom)
- select는 박스에서 겉에 value값은 초기값을 의미함
- checkbox는 e.target.checked 여기를 변화시켜야 한다
- checked={상태변수} 이걸 통해서 지금 상황을 checkbox에 최신화시킨다.
- defualtChecked 이걸 통해서 radio의 기본값을 정해줌
- radio input 태그 안에 있는 value는 e.target.value랑 같은 것, input태그 내에 있는 value 값을 가져온다는 뜻

#### useRef

- current 속성을 가지는 객체를 반환합니다
- current 속성으로 우리가 원하는 값을 저장할 수도 있고, DOM 요소에 접근할 수도 있다
- ref 요소 안에 useRef를 선언한 변수를 넣으면 됨 예. const ref = useRef(null);

#### useEffect

- 컴포넌트의 사이드 이펙트(side effect)를 처리하기 위한 훅
- 실제 렌더링을 위한 동작을 제외한, 모든 나머지 코드들을 사이드 이펙트
  - 데이터 가져오기, DOM 조작, 이벤트 등록/ 해제, 타이머 설정/ 해제 ...
- 처음에는 콜백이 들어가고 두 번째는 의존성이 들어가는데, 콜백은 사이드 이펙트를 처리하기 위한 코드를 작성하고, 2번째 배열은 컴포넌트가 생성될 때 실행되는 횟수, 콜백 내에서 리턴 콜백 함수는 컴포넌트가 삭제될 때 호출되는 함수이다.(클린 업 함수)
- 클린업 함수에서 setInterval의 폭주를 막기 위해 clearInterval 메서드를 이용
