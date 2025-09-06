## Typescript

- 자바스크립트에 타임(Type)을 추가한 언어
- 타입 -> 데이터의 종류를 의미해요.
- 타입스크립트는 자바스크립트의 슈퍼셋(superset)이다
  - 슈퍼셋은 어떤 집합이나 시스템이 다른 집합이나 시스템을 모두 포함하면서도 추가적인 요소를 더 가지고 있는 것을 말함
- 마이크로 소프트사가 개발함
  - 자바스크립ㅇ트보다 좀 더 정확하고 안정적인 코드를 작성할 수 있기 때문
  - 자바스크립트는 굉장히 유연한 언어
  - 타입스크립트는 자바스크립트에 타입을 추가함 -> 정적 타입
- 웹에는 HTML, CSS, Javascript만 열려서, scss,sass,typescript 같은 걸 javascript로 변환시켜서 띄우는 것 변환시키는 게 컴파일러
  - 컴파일러 - 변환하는 것
  - 컴파일 - 변환이 되는 과정
- ts는 한 폴더 전체에서 변수를 공유함

#### @ts-check

- js에서 ts처럼 검사를 해주는 것
  - @type {number}
- 이걸 쓰고 타입을 정하면 js에서도 ts처러 안전장치를 걸어줌

#### 컴파일러 설치 방법

- npm init -y : 설치할 수 있도록 초기화? 해주는 느낌, 내가 작업하는 폴더 속까지 들어가서 설치하는 것, package.json 나옴
- npm install typescript -D : 이거 치면 설치됨
- npx tsc --init : 쉽게 하는 것?(tsconfig.jsn파일 만들어줌)

#### ts에서 js로 변환

- npx tsc 폴더(src)/ts파일(.ts) : ts파일은 js로 변환해줌(이건 let으로 만들었는데 var로 만들어지고 그럼)
- tsconfig.json에 있는 "module"를 "esnext"로 바꾸면 웹만 생각한다고 하는 것(node 신경 안 쓰고)
  - 그렇게 하면 ts랑 똑같은 js파일이 생성됨

#### 정리

- 최신 tsconfig.json 설정을 사용할 경우
  - ts -> js 모듈로 변환이 됨
    - <script type= "module" src = "..."/>
  - 최신 설정을 바꾸는 방법
    - isolatedModules -> false
    - moduleDetection -> "auto"
    - <script defer src="..." />
  - 5.8 버전의 추천 설정용 코드 활용(강의 노트)
    - <script src="" />
