import React from 'react';

function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[rgb(85,17,0)] z-50">
      <div className="container-cradle">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </div>
  );
}

export default Loading;
