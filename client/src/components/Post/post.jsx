import React, { useState } from 'react';
import './post.css';

function Post(props) {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    console.log(value);
    props.addTopic(value);
    event.preventDefault();
  };

  return (
    <div className="post">
      <form onSubmit={handleSubmit}>
        <input
          className="text"
          type="text"
          value={value}
          onChange={handleChange}
        />
        <input className="submit" type="submit" value="Add Topic" />
      </form>
    </div>
  );
}

export default Post;
