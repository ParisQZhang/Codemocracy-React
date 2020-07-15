import React, { useState } from 'react';

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
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={handleChange} />
      <input type="submit" value="Add Topic" />
    </form>
  );
}

export default Post;
