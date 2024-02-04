"use client";
import React, { useRef, useState, useEffect } from 'react';

const GrowingTree: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [currentLength, setCurrentLength] = useState(0);
  const initialLength = 100;
  const growIncrement = 10; // Increment per drag

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault(); // Allow dropping
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const canvas = canvasRef.current;
    const rect = canvas?.getBoundingClientRect(); // Get canvas position and size
    const x = e.clientX - (rect?.left ?? 0); // Adjust mouse x coordinate
    const y = e.clientY - (rect?.top ?? 0); // Adjust mouse y coordinate
    if (canvas && x >= 0 && y >= 0 && x <= canvas.width && y <= canvas.height) {
      // Only grow the tree if currentLength is less than initialLength
      if (currentLength < initialLength) {
        setCurrentLength(prevLength => Math.min(prevLength + growIncrement, initialLength));
      }
    }
  };

  const draw = (ctx: CanvasRenderingContext2D, length: number) => {
    if (length <= 0) return;

    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(0, -length);
    ctx.strokeStyle = '#8B4513'; // Color for the branch
    ctx.lineWidth = length / 10;
    ctx.stroke();

    ctx.translate(0, -length);

    let newLength = length * 0.67;
    if (length > 2) {
      ctx.save();
      ctx.rotate(Math.PI / 4);
      draw(ctx, newLength);
      ctx.restore();

      ctx.save();
      ctx.rotate(-Math.PI / 4);
      draw(ctx, newLength);
      ctx.restore();
    } else {
      // Draw leaves at the ends
      ctx.beginPath();
      ctx.arc(0, 0, 10, 0, Math.PI * 2, true);
      ctx.fillStyle = '#228B22'; // Color for leaves
      ctx.fill();
    }
  };

  useEffect(() => {
    const animate = () => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext('2d');
      if (ctx) {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.save();
        ctx.translate(ctx.canvas.width / 2, ctx.canvas.height);
        draw(ctx, currentLength);
        ctx.restore();
      }
    };

    animate(); // Call animate directly within useEffect
  }, [currentLength]); // Re-run the drawing logic when currentLength changes

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
      <canvas ref={canvasRef} width={400} height={400} onDragOver={handleDragOver} onDrop={handleDrop} />
      <div
        onDragStart={(e) => e.dataTransfer.setData('text/plain', '')}
        draggable="true"
        style={{ cursor: 'grab', marginTop: '20px', fontSize: '32px' }}
      >
        🌱 {/* Icon to drag */}
      </div>
    </div>
  );
};

export default GrowingTree;