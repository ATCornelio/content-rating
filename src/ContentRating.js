import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


function ContentRating() {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  return (
    <div className="text-center mt-5">
      <h2>Corruption of Flood Control Projects and other Infrastructure projects in the Philippine</h2>
      <p>Do you like this content?</p>
      <div className="mt-3">
        <button className="btn btn-success me-3" onClick={() => setLikes(likes + 1)}>
          <i className="bi bi-hand-thumbs-up"></i> Like ({likes})
        </button>
        <button className="btn btn-danger" onClick={() => setDislikes(dislikes + 1)}>
          <i className="bi bi-hand-thumbs-down"></i> Dislike ({dislikes})
        </button>
      </div>
    </div>
  );
}

export default ContentRating;
