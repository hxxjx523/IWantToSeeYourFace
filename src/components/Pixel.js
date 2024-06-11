import React, { useRef, useEffect } from 'react';
import './css/pixel.module.css';

function Pixel({ pixelImg }) {
    const canvasRef = useRef(null);

    useEffect(() => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      console.log(pixelImg)
      const img = new Image()
      
      img.src = `./images/${pixelImg}/${pixelImg}_face1-1.png`
      console.log(img)
  
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
  
      const pixel = {
        x: canvas.width,
        y: canvas.height / 2,
        size: 500,
        speed: 50
      };
  
      const update = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
  
        pixel.x -= pixel.speed;
        if (pixel.x < -pixel.size) {
          pixel.x = canvas.width;
          pixel.y = canvas.height
        }
  
        ctx.drawImage(img, pixel.x, pixel.y, pixel.size, pixel.size);
  
        requestAnimationFrame(update);
      };
  
      img.onload = () => {
        update();
      };
    }, []);
  
    return <canvas ref={canvasRef}></canvas>;
}

export default Pixel;