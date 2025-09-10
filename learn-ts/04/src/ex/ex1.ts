// 이넘 연습문제+

{
  // 1
  enum Day {
    MONDAY = 1,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATURDAY,
    SUNDAY,
  }

  function getDayName(day: Day): string {
    switch (day) {
      case Day.MONDAY:
        return "Monday";
      case Day.TUESDAY:
        return "Tuesday";
      case Day.WEDNESDAY:
        return "Wednesday";
      case Day.THURSDAY:
        return "Thursday";
      case Day.FRIDAY:
        return "Friday";
      case Day.SATURDAY:
        return "Saturday";
      case Day.SUNDAY:
        return "Sunday";
      default:
        return "Invalid day";
    }
  }
}

{
  // 2
  enum Message {
    SUCCESS = 200,
    NOT_FOUND = 404,
    INTERNAL_ERROR = 500,
  }
  function getStatusMessage(status: Message): string {
    if (status === Message.SUCCESS) return "Success";
    if (status === Message.NOT_FOUND) return "Not Found";
    if (status === Message.INTERNAL_ERROR) return "Internal Server Error";
    return "Unknown Status";
  }
}

{
  // 3
  enum City {
    SEOUL = "Seoul",
    BUSAN = "Busan",
    DAEGU = "Daegu",
  }

  function getCityByZip(zip: string): City | "Unknown City" {
    switch (zip) {
      case "100":
        return City.SEOUL;
      case "200":
        return City.BUSAN;
      case "300":
        return City.DAEGU;
      default:
        return "Unknown City";
    }
  }
}

{
  // 4
  enum Level {
    ADMIN = "admin",
    USER = "user",
    GUEST = "guest",
  }
  function getPermissionLevel(role: Level): string {
    if (role === Level.ADMIN) return "Full access";
    if (role === Level.USER) return "Limited access";
    if (role === Level.GUEST) return "Guest access";
    return "No access";
  }
}

{
  // 5
  enum Product {
    PENDING = 1,
    SHIPPED,
    DELIVERED,
  }
  function getProductStatus(status: Product): string {
    if (status === Product.PENDING) return "Pending";
    if (status === Product.SHIPPED) return "Shipped";
    if (status === Product.DELIVERED) return "Delivered";
    return "Unknown Status";
  }
}

{
  // 6
  enum Order {
    ORDER_PLACED = "Order Placed",
    PAYMENT_PENDING = "Payment Pending",
    SHIPPED = "Shipped",
    DELIVERED = "Delivered",
  }
  function getOrderStatus(status: Order): string {
    if (status === Order.ORDER_PLACED) return "Your order has been placed.";
    if (status === Order.PAYMENT_PENDING) return "Payment is pending.";
    if (status === Order.SHIPPED) return "Your order has been shipped.";
    if (status === Order.DELIVERED) return "Your order has been delivered.";
    return "Unknown Status";
  }
}

{
  // 7
  enum Status {
    ACTIVE = "true",
    INACTIVE = "false",
  }

  function toggleStatus(status: Status): boolean {
    return status === Status.ACTIVE ? true : false;
  }
}

{
  // 8
  enum Option {
    OPTION_ONE = "Option 1",
    OPTION_TWO = "Option 2",
    OPTION_THREE = "Option 3",
  }
  function getOptionValue(option: Option): string {
    if (option === Option.OPTION_ONE) return "You selected Option 1.";
    if (option === Option.OPTION_TWO) return "You selected Option 2.";
    if (option === Option.OPTION_THREE) return "You selected Option 3.";
    return "Invalid option";
  }
}

{
  // 9
  enum Meal {
    BREAKFAST = "Breakfast",
    LUNCH = "Lunch",
    DINNER = "Dinner",
  }
  function getMealTime(meal: Meal): string {
    if (meal === Meal.BREAKFAST) return "Good morning, it's breakfast time!";
    if (meal === Meal.LUNCH) return "Good afternoon, it's lunch time!";
    if (meal === Meal.DINNER) return "Good evening, it's dinner time!";
    return "Invalid meal time";
  }
}

{
  // 10
  enum Log {
    LOGGED_IN,
    LOGGED_OUT,
  }
  function checkLoginStatus(status: Log): string {
    if (status === Log.LOGGED_IN) return "You are logged in.";
    if (status === Log.LOGGED_OUT) return "You are logged out.";
    return "Unknown status";
  }
}
