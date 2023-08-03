import Songs from "../Components/Songs";
import { NavLink } from "react-router-dom";

function Index() {
  return (
    <>
      <div className="Index">
        <h2>Index</h2>
        <button>
          <NavLink to="/songs/new">New Song</NavLink>
        </button>
      </div>
      <Songs />
    </>
  );
}

export default Index;
