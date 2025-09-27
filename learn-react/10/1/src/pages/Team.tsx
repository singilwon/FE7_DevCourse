// /team1
// /team2
// /team3
// 이렇게 url에 다른 path를 입력해도 똑같이 이 컴포넌트가 나오게 하고 싶으면
// 고정은 element 다 똑같이 하고, path는 다 다르게
// 동적은 team/:teamId 이런 식으로 뒤에 식별자 붙이기
// 동적으로 불러오기 위해서 useParams라는 것을 씀, 쓰면 그 아이디가 들어옴
import { useParams, useSearchParams } from "react-router";

export default function Team() {
  const params = useParams();
  const [searchParams] = useSearchParams();
  return (
    <>
      <h1>Team Component</h1>
      <h2>TeamId : {params.id}</h2>
      <h2>GroupId : {params.groupId}</h2>
      <h2>lang : {searchParams.get("lang")}</h2>
    </>
  );
}
