// ToggleBackground.tsx
import React, { useEffect, useRef, useState } from 'react';
import * as anime from 'animejs';

// ✅ THIS is the key
// {
//   backgroundColor: nextColor,
//   duration: 800,
//   easing: 'easeInOutQuad',
// }

const ToggleBackground: React.FC = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isBlack, setIsBlack] = useState(true);

  const nextColor = isBlack ? '#FFFFFF' : '#000000';
  const handleClick = () => {
    setIsBlack(!isBlack);
  };
  useEffect(()=>{
    anime.animate('.backgroundChange',{
      backgroundColor: nextColor,
 duration: 800,
easing: 'easeInOutQuad',
    });
  },[])

  return (
    <div
      className='backgroundChange'
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
