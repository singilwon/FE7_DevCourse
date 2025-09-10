// 이넘 연습문제++

{
  // 1
  enum Status {
    UNVERIFIED = "User is unverified",
    PENDING = "User verification is pending",
    VERIFIED = "User is verified",
  }

  function getUserStatus(status: Status): string {
    if (status === Status.UNVERIFIED) return Status.UNVERIFIED;
    if (status === Status.PENDING) return Status.PENDING;
    if (status === Status.VERIFIED) return Status.VERIFIED;
    return "Unknown status";
  }
  console.log(Status.UNVERIFIED);
  console.log(Status.PENDING);
  console.log(Status.VERIFIED);
}

{
  // 2
  enum State {
    INITIATED = 0,
    PROCESSING = 1,
    SHIPPED = 2,
    DELIVERED = 3,
    CANCELLED = 4,
  }

  function getOrderState(state: State): string {
    if (state === State.INITIATED) return "Order initiated";
    if (state === State.PROCESSING) return "Order being processed";
    if (state === State.SHIPPED) return "Order shipped";
    if (state === State.DELIVERED) return "Order delivered";
    if (state === State.CANCELLED) return "Order cancelled";
    return "Unknown state";
  }
}
