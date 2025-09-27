import { Link, NavLink, Outlet, useNavigate } from "react-router";

// Link -> 단순이동
// NavLink -> 단순이동 + isActive
export default function DefaultLayout() {
  // navigate으로 button 눌렀을 때 다른 곳으로 이동하게 할 수 있음
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/v1/dashboard");
  };
  return (
    <>
      <header>
        <h1>Header</h1>
        <ul>
          <li>
            {/* a 태그의 역할을 대체하는 게 Link, href 대신에 to를 쓰는데, 그렇게 되면 페이지 이동할 때 전체 새로고침 X
            그냥 딱 필요한 부분만 바뀌게 해주는 것, 그게 react의 추구방식 */}
            <Link to="/">home</Link>
          </li>
          <li>
            {/* 이렇게 isActive를 쓰면 활성화 되어있을 때 색이 바뀌게 할 수 있음 
            저런 식으로 이름도 바꿀 수 있게 해줌*/}
            <NavLink
              to="/about"
              style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
            >
              {({ isActive }) => <span>about{isActive && "(선택됨)"}</span>}
            </NavLink>
          </li>
          <li>
            <button onClick={handleClick}>대시보드로 이동</button>
          </li>
        </ul>
      </header>
      <Outlet />
      <footer>
        <h1>Footer</h1>
      </footer>
    </>
  );
}
