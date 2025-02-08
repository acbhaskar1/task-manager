import React from 'react';

function Task(props) {
  return (
    <div className="task">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <button onClick={props.onDelete}>Delete</button> {/* Delete button */}
    </div>
  );
}

export default Task;