{
  // enum(이넘)
  // moveX -> 왼쪽과 오른쪽을 이동할 수 있게만 만든 것
  type MoveX = "left" | "right";
  function charactermoveX(direction: MoveX): void {
    if (direction === "left") {
      console.log("왼쪽으로 이동");
    }
    if (direction === "right") {
      console.log("오른쪽으로 이동");
    }
  }

  charactermoveX("left");
  charactermoveX("right");

  type Move = "left" | "right" | "up" | "down";
  function vehicleMove(direction: Move): void {
    if (direction === "left") {
      console.log("왼쪽으로 이동");
    }
    if (direction === "right") {
      console.log("오른쪽으로 이동");
    }
    if (direction === "up") {
      console.log("위쪽으로 이동");
    }
    if (direction === "down") {
      console.log("아래쪽으로 이동");
    }
  }
  vehicleMove("up");
  vehicleMove("down");
  vehicleMove("left");
  vehicleMove("right");
}

{
  // 이넘 (enum)
  // 고정된 값들의 집합을 정의하는 데 사용하는 특수한 타입
  enum CharactermoveX { // 방향
    LEFT,
    RIGHT,
  }

  enum RotationMoveX { // 회전
    LEFT,
    RIGHT,
  }

  function charactermoveX(direction: CharactermoveX | RotationMoveX): void {
    if (direction === CharactermoveX.LEFT) {
      console.log("왼쪽으로 이동");
    }
    if (direction === CharactermoveX.RIGHT) {
      console.log("오른쪽으로 이동");
    }
    if (direction === RotationMoveX.LEFT) {
      console.log("왼쪽으로 이동");
    }
    if (direction === RotationMoveX.RIGHT) {
      console.log("오른쪽으로 이동");
    }
  }
  charactermoveX(CharactermoveX.LEFT);
  charactermoveX(CharactermoveX.RIGHT);

  charactermoveX(RotationMoveX.LEFT);
  charactermoveX(RotationMoveX.RIGHT);
}

{
  // 숫자형 enum
  enum Direction {
    UP, // 0
    DOWN = 100, // 1 인데 이렇게 100 할당하면 100 시작
    LEFT, // 2 , 101되고
    RIGHT, // 3 , 102 됨
  }
  console.log(Direction.UP); // 0
  console.log(Direction.DOWN); // 1
  console.log(Direction.LEFT); // 2
}

{
  // 숫자형 enum 다른 예시
  enum StatusCode {
    OK = 200,
    BadRequest = 400,
    Unauthorized = 401,
    NotFound = 404,
  }

  function handleResponse(code: StatusCode) {
    switch (code) {
      case StatusCode.OK:
        return "성공";
      case StatusCode.BadRequest:
        return "실패";
      case StatusCode.Unauthorized:
        return "인증에러";
      case StatusCode.NotFound:
        return "찾을 수 없음";
    }
  }
  handleResponse(StatusCode.BadRequest);
}

{
  // 문자 enum(열거형)
  enum Direction {
    UP = "Up",
    DOWN = "Down",
    LEFT = "Left",
    RIGHT = "Right",
  }
  console.log(Direction.DOWN);
}

{
  // 혼합 enum(열거형)
  enum Mix {
    YES = 1,
    NO = "NO",
  }

  enum Direction {
    UP = 200,
    DOWN = "UP",
    LEFT = 300,
    RIGHT = "DOWN",
  }
}

{
  // 리버스 매핑(역방향 매핑)
  // 숫자형 이넘에만 지원한 개념
  enum Direction {
    UP,
    DOWN,
    LEFT,
    RIGHT,
  }
  console.log(Direction.UP); // 0
  console.log(Direction[0]); // "UP"
}

{
  // const enum

  const enum DirectionConst {
    UP,
    DOWN,
    LEFT,
    RIGHT,
  }
}
