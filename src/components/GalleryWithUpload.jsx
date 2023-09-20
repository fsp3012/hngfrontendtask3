import React, { useState, useEffect } from "react";
import ImageCard from "./ImageCard";
import SearchBar from "./SearchBar";
import Loader from "./Loader";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function GalleryWithUpload() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [newImageTag, setNewImageTag] = useState("");


  useEffect(() => {
    const storedImages = JSON.parse(localStorage.getItem("images"));
    if (storedImages) {
      setImages(storedImages);
      setLoading(false);
    } else {
      fetchImages();
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("images", JSON.stringify(images));
  }, [images]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("./src/image.json");
        if (!response.ok) {
          throw new Error("Failed to fetch images.");
        }
        const data = await response.json();
        setImages(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);
  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const updatedImages = [...images];
    const [reorderedItem] = updatedImages.splice(result.source.index, 1);
    updatedImages.splice(result.destination.index, 0, reorderedItem);

    setImages(updatedImages);
  };

  const filteredImages = images.filter((image) =>
    image.tag.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const newImage = {
          id: (Math.random() + 1).toString(36).substring(7),
          tag: newImageTag,
          url: e.target.result,
        };
        setImages([...images, newImage]);
        localStorage.setItem("images", JSON.stringify([...images, newImage]));
      };
      reader.readAsDataURL(file);
    }
  };
  const handleNewImageTagChange = (event) => {
    setNewImageTag(event.target.value);
  };

  return (
    <div>
      <h2 className="text-4xl text-center">Image Gallery</h2>
      <SearchBar setSearchQuery={setSearchQuery} />
      <div className="my-5 text-center">
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        <input
          type="text"
          value={newImageTag}
          onChange={handleNewImageTagChange}
          className="border border-gray-300 rounded-md px-5"
          placeholder="Add a tag"
        />
      </div>

      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="gallery">
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            >
              {loading ? (
                <Loader />
              ) : (
                filteredImages.map((image, index) => (
                  <Draggable
                    key={image.id.toString()}
                    draggableId={image.id.toString()}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <ImageCard key={image.id} image={image} />
                      </div>
                    )}
                  </Draggable>
                ))
              )}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default GalleryWithUpload;
