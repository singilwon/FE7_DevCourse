import Profile from "./components/Profile";

export default function App() {
  const name = "Sally Ramose";
  const instaId = "@sallytheramos";
  const bg =
    "https://images.pexels.com/photos/158251/forest-the-sun-morning-tucholskie-158251.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
  const ug =
    "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
  const handleButton = () => {
    console.log("짜잔");
  };
  return (
    <>
      <Profile
        name={name}
        instaId={instaId}
        handleButton={handleButton}
        bg={bg}
        ug={ug}
      />
    </>
  );
}
