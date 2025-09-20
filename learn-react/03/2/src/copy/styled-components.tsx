import styled from "styled-components";

export default function App() {
  // styled.태그명 ``
  const HelloWorld = styled.h1`
    color: red;
    text-decoration: underline;
  `;
  return (
    <>
      <HelloWorld>App Component</HelloWorld>
    </>
  );
}
