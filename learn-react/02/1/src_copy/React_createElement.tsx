import React from "react";

export default function App() {
  // React.createElement 메서드를 사용하는 방법
  // return React.createElement(
  //   "h1",
  //   null,
  //   React.createElement("h1", null, "Hello, React"),
  //   React.createElement("h2", { class: "title" }, "Hello, h2 tag")
  // );

  return (
    <div>
      <h1 className="title">Hello, React!</h1>
      <h2>Hello, H2 Tag!</h2>
    </div>
  );
}
