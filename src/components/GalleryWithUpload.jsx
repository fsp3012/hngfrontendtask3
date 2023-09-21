import React, { useState } from "react";
import ImageCard from "./ImageCard";
import SearchBar from "./SearchBar";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  rectSortingStrategy,
} from "@dnd-kit/sortable";
import staticImages from "../ImageList";

function GalleryWithUpload() {
  const [images, setImages] = useState(staticImages);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeId, setActiveId] = useState(null);

  const filteredImages = images.filter((image) =>
    image.tag.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const SortableImageCard = () => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredImages.map((image, index) => (
          <ImageCard
            key={image.id}
            image={image}
            index={index}
            setActiveId={setActiveId}
          />
        ))}
      </div>
    );
  };

  const handleDragEnd = ({ over }) => {
    if (over) {
      const oldIndex = images.findIndex((image) => image.id === activeId);
      const newIndex = images.findIndex((image) => image.id === over.id);
      const updatedImages = [...images];
      const [movedImage] = updatedImages.splice(oldIndex, 1);
      updatedImages.splice(newIndex, 0, movedImage);
      setImages(updatedImages);
      setActiveId(null);
      return arrayMove(images, oldIndex, newIndex);
    }
  };

  return (
    <div>
      <h2 className="text-4xl text-center">Image Gallery</h2>
      <SearchBar setSearchQuery={setSearchQuery} />
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext
          items={filteredImages.map((image) => image.id)}
          strategy={rectSortingStrategy}
        >
          <SortableImageCard />
        </SortableContext>
      </DndContext>
    </div>
  );
}

export default GalleryWithUpload;
