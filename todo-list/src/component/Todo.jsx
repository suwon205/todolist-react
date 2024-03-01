// Todo 컴포넌트
import React from "react";

export default function Todo({ content }) {
  return (
    <div>
      <p>State: {content.state}</p>
      <p>Content: {content.content}</p>
    </div>
  );
}
