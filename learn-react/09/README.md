### Zustand

- npm install zustand로 다운받기
- stores 폴더 따로 만듦
- 커스텀 훅 : 파일 내에 쓰는 함수 이름은 항상 use~~~Store로 씀
- 컴포넌트 함수 변수에 create(콜백함수) 씀
- create 옆에는 제네릭으로 타입 해줘야함
  - 타입 지정해줄 때 제네릭 옆에는 () 소괄호 붙여줘야 함
- 그리고 콜백함수 안에 예를 들어 count:10만 써도 전역으로 공유됨
- 받아올 때는 쓸 변수에 커스텀 훅, 즉 컴포넌트 함수 이름 쓰고 그 안에 콜백함수로 부르고, 콜백함수 매개변수로는 state, 그리고 return으로는 state.내가 zustand ts에서 선언했던 변수 이름을 쓰면 불러와짐
  - 구조분해할당으로 받아올 수 있음
  - 대신 컴포넌트 최적화가 안됨
- create 함수 안에 콜백함수의 첫 번째 매개변수는 보통 set으로 관례로 짓는데, useState의 set변수와 비슷한 역할을 함, setter 역할
- set 안의 콜백함수의 첫 번째(보통 state)는 이전 값을 불러옴, return으로 새로 할당하면 됨
- 컴포넌트 최적화를 자동으로 해줌
- 매개변수를 넘어주고 싶으면 타입 지정 잘해주고 아까 set 쪽에서 콜백함수 return에 set 넣고 하는 거였다면 매개변수는 그 set을 리턴으로 쓰는 곳의 매개변수로 받음, 즉 함수를 선언하면 그 첫 번째 매개변수에 들어온다는 것
- zustand는 set 말고 get 함수도 있음
  - 현재 상태를 알려주는 것
  - set 범위 밖에서 현재 상태가 궁금할 때 씀
  - 맨 처음에 set 매개변수 받을 때 옆에 get도 같이 쓰면 같이 써짐

#### middleware

##### immer

- 상태관리, 불변성을 자동으로 관리해줌
- store에서 create로 만든 콜백함수를 immer(콜백함수)로 묶으면 됨
- 그럼 불변성 신경 안 쓰면서 바꿔줄 수 있음

##### devtools

- devtools는 redux devtools를 함께 쓸 수 있음(개발자 도구에 있는)
- immer를 똑같이 devtools(immer(~~)) 이렇게 감싸면 됨
- devtools의 첫 번째는 immer이고, 두 번째는 trace이다. 그건 devtools의 trace 부분을 쓸 수 있다(개발자 도구에서)

##### subscribeWithSelector

- 이것도 똑같이 subscribeWithSelector(전 내용) 감싸면 됨
- 특정 상태값이 변경되었는지를 구독할 수 있음
- store 컴포넌트 이름.subscribe(구독할 상태, 구독중인 상태가 변경되면 호출될 함수) 이런 식으로 쓰면 됨, 쓰는 컴포넌트 쪽에서
- 예시
  ```
  useCounterStore.subscribe(
    (state) => state.count,
    (newCount, prevCount) => {
      console.log(`count 변경됨 ${prevCount} -> ${newCount}`);
    }
  );
  ```

##### combine

- 상태와 상태업데이트 함수를 나눌 수 있음, 가독성을 위하여
- combine(상태(count 같은 변수), 상태 업데이트 함수(액션))

#### persist

- store에 내가 원하는 상태값을 로컬스토리지에 저장할 수 있음
- 첫 번째 매개변수에 그 전까지의 값 넣고, 두 번째는 이름을 객체 형태로 써줌(한마디로 두 번째 매개변수는 이름 지어주는 것)
- 로컬스토리지는 브라우저 껐다 켜도 남고, 세션 스토리지는 브라우저 끄고 다시 키면 사라짐
  - 로컬 말고 세션에 넣는 방법 : 이름 넣는 객체 안에 storage: createJSONStorage(() => sessionStorage) 이걸 같이 넣으면 됨

##### middlaware 순서

- combine -> immer -> persist -> devtools -> subscribeWithSelector

### 데이터패칭

- src 폴더 동일선상에 DB폴더 만들고 파일 만들고 그 안에 사이트에서 가져온 코드 붙여넣기
- json 파일에 scripts에 밑에 2개 붙여넣기
  - "db" : "npx json-server --watch db/db.json --port 3001",
  - "db_delay": "npx json-server --watch db/db.json --port 3001 -- delay 2000"
