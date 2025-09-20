import light from "./assets/images/KakaoTalk_20230406_211958170_15.jpg";

export default function App() {
  return (
    <>
      <img src={light} style={{ width: "100%" }} />
      <div className="bg2"></div>
      <div
        style={{
          width: "100%",
          height: "400px",
          background: `url(${light}) no-repeat center center`,
        }}
      ></div>
      <div className="bg"></div>
    </>
  );
}
