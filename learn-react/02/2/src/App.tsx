import styles from "./App.module.css";
import First from "./components/First";
import classNames from "classnames/bind";
import className from "classnames";
// css module이면 blind랑 접목, global css는 일반 classNames 사용
// 그냥 외부 css는 저렇게 이름 지정하면 알아서 됨, module은 아래처럼 .bind 해야함

export default function App() {
  const isCancel = true;
  const cx = classNames.bind(styles);
  const isItalic = true;
  return (
    <>
      <h1 className={`${styles.title} ${isCancel ? styles.line_through : ""}`}>
        App Component
      </h1>
      <h1 className={cx("title", { line_through: isCancel })}>App Component</h1>
      {/* 지금 위, 아래는 둘 다 같은 코드(아래는 classNames를 접목시킴) */}
      <h1 className={className("primary", { italic: isItalic })}>Global</h1>
      <First />
    </>
  );
}
