import React from "react";

function ImageCard({ image, index }) {
  return (
    <div
      className="border rounded-md overflow-hidden shadow-lg"
      draggable="true"
      onDragStart={(e) => e.dataTransfer.setData("text/plain", index)}
    >
      <img src={image.url} alt="image" className="w-full h-auto" />
      <div className="p-2">
        <p>Tag: {image.tag}</p>
      </div>
    </div>
  );
}

export default ImageCard;
