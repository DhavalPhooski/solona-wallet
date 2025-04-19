// ToggleBackground.tsx
import React, { useRef, useState } from 'react';
import * as anime from 'animejs';

// ✅ THIS is the key

const ToggleBackground: React.FC = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isBlack, setIsBlack] = useState(true);

  const handleClick = () => {
    const nextColor = isBlack ? '#FFFFFF' : '#000000';

    if (divRef.current) {
      anime({
        targets: divRef.current,
        backgroundColor: nextColor,
        duration: 800,
        easing: 'easeInOutQuad',
      });
    }

    setIsBlack(!isBlack);
  };

  return (
    <div
      ref={divRef}
      onClick={handleClick}
      style={{
        width: '100vw',
        height: '100vh',
        backgroundColor: isBlack ? '#000000' : '#FFFFFF',
        transition: 'background-color 0.3s',
        color: isBlack ? '#FFFFFF' : '#000000',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '24px',
        cursor: 'pointer',
      }}
    >
      Click to Toggle Background
    </div>
  );
};

export default ToggleBackground;
