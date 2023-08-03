import { Link } from "react-router-dom";

function Song({ song, id }) {
  return (
    <tr className="Song">
      <td>
        {song.is_favorite ? (
          <span>⭐️</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      <td>
        <Link to={`/songs/${id}`}>{song.name}</Link>
      </td>
      <td>
        <Link to={`/songs/${id}`}>{song.artist}</Link>
      </td>
      <td>
        <Link to={`/songs/${id}`}>{song.time}</Link>
      </td>
    </tr>
  );
}

export default Song;
