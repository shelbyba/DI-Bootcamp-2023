// PostList.js
import React from 'react';
import data from './data.json';

function PostList() {
  return (
    <div>
      {data.map((post, index) => (
        <div key={index} className="post">
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export default PostList;
