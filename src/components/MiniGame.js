import React, { useState, useEffect } from 'react';

export default function MiniGame(){
    const [position, setPosition] = useState(0);
    const [velocity, setVelocity] = useState(0);
    const [isJumping, setIsJumping] = useState(false);
  
    const gravity = 0.5;
    const jumpStrength = -10;
  
    useEffect(() => {
      const handleSpaceBar = (event) => {
        if (event.code === 'Space' && !isJumping) {
          setVelocity(jumpStrength);
          setIsJumping(true);
        }
      };
  
      window.addEventListener('keydown', handleSpaceBar);
  
      return () => {
        window.removeEventListener('keydown', handleSpaceBar);
      };
    }, [isJumping]);
  
    useEffect(() => {
      const gameLoop = setInterval(() => {
        setPosition((prev) => {
          const newPos = prev + velocity;
          return newPos < 0 ? 0 : newPos;
        });
        setVelocity((prev) => prev + gravity);
        if (position === 0) {
          setIsJumping(false);
          setVelocity(0);
        }
      }, 20);
  
      return () => clearInterval(gameLoop);
    }, [velocity, position]);
  
    const gameContainerStyle = {
      position: 'relative',
      height: '100vh',
      overflow: 'hidden',
      backgroundColor: '#f0f0f0',
    };
  
    const divStyle = {
      position: 'absolute',
      bottom: `${position}px`,
      left: '50%',
      transform: 'translateX(-50%)',
      width: '100px',
      height: '100px',
      backgroundColor: 'red',
    };
  
    return (
      <div style={gameContainerStyle}>
        <div style={divStyle} />
      </div>
    );
  }