import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1>My Favourite Foods</h1>
    <ul>
      <img
        className="photo"
        src="https://www.si.com/.image/c_fit%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_620/MTc5NTMwMzAxNjQ1NTMwMjQ5/gettyimages-891445.jpg"
        alt="ronaldo 1"
      />
      <img
        className="photo"
        src="https://www.dreamteamfc.com/c/wp-content/uploads/sites/4/2017/03/Ronaldo_1998.jpg?strip=all&quality=100"
        alt="ronaldo 2"
      />
      <img
        className="photo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLMWwxzlBM3eWy1jIFh3JWaMLlxlX9lqoXRw&usqp=CAU"
        alt="ronaldo 3"
      />
    </ul>
  </div>,
  document.getElementById("root")
);
