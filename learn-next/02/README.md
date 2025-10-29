## NextJs 기초

### 세그먼트 루트에 대한 것

- app 아래로 폴더를 만들어 나가면 도메인에서는 /경로가 되는 것
- 폴더를 [id] 형식으로 만들면 동적 라우트가 되는 것

#### 동적 도메인 번호를 받는 것들

#### params

- server components에 경우
  - {params}를 params: Promise<{ id: string }>; 타입을 받는 매개변수를 쓰면 됨
  - 마지막에 await으로 불러줘야됨, 루트 함수도 async 붙이고
- client components인 경우
  - 그냥 리액트에서 했던 것처럼 똑같이 useParams() 쓰면 됨

#### ?뒤에 lang=en 이런 거 받는 방법

- server components에 경우

  ```
  searchParams: Promise<{ lang: string }>;
   이걸 추가로 type에 넣고 매개변수 받는 것도 searchParams 넣을 것
  ```

  - 얘도 그 후에 따로 await으로 불러줘야 함

- client components인 경우

  ```
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang");
  ```

#### 중첩 - 동적 라우트 같이 있는 경우

- 하위 컴포넌트에 있는 동적 라우트의 폴더 이름은 상위 폴더의 동적 라우트 폴더 이름과 같이 하면 안된다
- 하위 컴포넌트에서는 상위 컴포넌트 동적 라우트의 id를 가져올 수 있지만, 상위에서는 하위 id 못 가져옴
- 하위에서 가져오는 방법은 그냥 매개변수, 즉 props 자리에 그냥 상위 동적 라우트 폴더 이름과 똑같이 하나 더 받아오면 됨

#### catch-all segment

- id나 새로운 segment 가 그 뒤에 따라와도 다 도메인 값을 읽어냄
- ... 폴더 이름에 쓰면 됨 예) [...slug]
- 만약 [[...slug]] 이렇게 쓰면 페이지에 맨 상위 컴포넌트도 같은 곳을 바라보게 만듦(첫 번째 세그먼트)
