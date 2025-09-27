// 라우트(Route)
// 라우트들의 집합(Routes)
// 라우터 : 앱 전체에서 라우팅 시스템을 제공하는 컨테이너 (react-router)
// 라우트 : 특정 URL 패턴과 컴포넌트를 매핑하는 규칙

// 중첩 라우트 -> <Outlet />
// 레이아웃 라우트 : 공통의 내용을 모든 곳에서 볼 수 있게 해주는 것
// 라우트 프리픽스 -> URL의 공통의 접두사
// 컴포넌트 안에서 <title>home</title> 이렇게 적으면 페이지 위에 제목에 나옴
import { Navigate, Route, Routes } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Summary from "./pages/Summary";
import Setting from "./pages/Setting";
import DefaultLayout from "./layouts/DefaultLayout";
import Team from "./pages/Team";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <>
      <Routes>
        {/* 레이아웃 라우트, path를 사용하지  않음 */}
        <Route element={<DefaultLayout />}>
          {/* 이렇게 여기에 바로 navigate으로 갈 수 있게 해줄 수도 있음 */}
          <Route index element={<Navigate to="/blog" />} />
          {/* index는 그 경로에서 기본이 되는 경로라고 지정하는 것 */}
          <Route path="blog" element={<Home />} />
          <Route path="about" element={<About />} />
          {/* 동적 세그먼트, 뒤에 식별자 붙여주기, 이러면 어떤값이 와도 똑같이 Team 나옴 
          옵셔널 처리도 가능*/}
          <Route path="team/:id?/group/:groupId" element={<Team />} />
          {/* 이렇게 element 빼고 path만 쓰는 걸 라우트 프리픽스 
          이렇게 쓰면 url 부를 때 무조건 앞에 v1 일단 쓰고 v1/dashboard 이런 식으로 써야 함*/}
          <Route path="v1">
            <Route path="dashboard" element={<Dashboard />}>
              {/* 이렇게 중첩된 걸 나오게 하고 싶으면 겉에(여기서는 Dashboard) 있는 컴포넌트 페이지에서
          <Outlet /> 을 써줌으로서 자리를 만들어줘야 함 
          path 대신에 index를 하면 한 페이지에 같이 나오고, path를 저렇게 지정하면 dashboard/summary 이런 식으로 해야 함*/}
              <Route index element={<Summary />} />
              <Route path="setting" element={<Setting />} />
            </Route>
          </Route>
        </Route>
        {/* 스플렛 : 전체 경로를 모두 캐치하는 것, 그래서 위에 경로가 모두 아닌 경우에 나오게 하는 페이지 */}
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}
