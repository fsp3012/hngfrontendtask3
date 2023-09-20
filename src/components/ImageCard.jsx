import React from "react";
import { useSortable } from "@dnd-kit/sortable";

function ImageCard({ image, index, setActiveId }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: image.id,
  });

  return (
    <div
      {...attributes}
      {...listeners}
      ref={setNodeRef}
      className={`border rounded-md overflow-hidden shadow-lg ${
        isDragging ? "opacity-50" : ""
      }`}
      style={{
        cursor: "grab",
        transform,
        transition,
      }}
    >
      <img src={image.imageUrl} alt={image.tag} className="w-full h-auto" />
      <div className="p-2">
        <p>Tag: {image.tag}</p>
      </div>
    </div>
  );
}

export default ImageCard;
