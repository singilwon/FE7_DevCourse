import "../styles/Profile.css";

interface Type {
  name: string;
  instaId: string;
  handleButton: () => void;
  bg: string;
  ug: string;
}

export default function Profile({ name, instaId, handleButton, bg, ug }: Type) {
  return (
    <>
      <article className="card">
        <div>
          <img className="card-img" src={bg} alt="background-pic" />
        </div>
        <div className="profile">
          <img className="prof-img" src={ug} alt="profile-pic" />
          <h3 className="alias">{name}</h3>
          <p className="username">{instaId}</p>
          <button onClick={handleButton}>Follow</button>
        </div>
      </article>
    </>
  );
}
