import React, { useState } from "react";

export default function ThemeChange() {
  const [isDark, setDark] = useState(false);

  const handleMode = () => {
    setDark(!isDark); // 상태를 반전시켜 업데이트
  };

  return (
    <div>
      {!isDark ? (
        <p onClick={handleMode}>🌞</p>
      ) : (
        <p onClick={handleMode}>🌙</p>
      )}
    </div>
  );
}
