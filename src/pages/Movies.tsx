import data from "../MovieData.json";
import React from "react";

const md = data.MovieData;

// Movie list that displays all movies from MovieData.json
function MovieList() {
  return (
    <>
      <div className="App" style={{ marginTop: "10px" }}>
        <h3>Joel Hilton's Movie Collection</h3>
      </div>
      <br />
      <div>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Category</th>
              <th>Edited</th>
            </tr>
          </thead>
          <tbody>
            {md.map((m) => (
              <tr>
                <td>{m.Title}</td>
                <td>{m.Year}</td>
                <td>{m.Director}</td>
                <td>{m.Rating}</td>
                <td>{m.Category}</td>
                <td>{m.Edited}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default MovieList;
