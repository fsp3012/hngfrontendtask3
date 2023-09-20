import React, { useState, useEffect } from "react";
import ImageCard from "./ImageCard";
import SearchBar from "./SearchBar";
import Loader from "./Loader";

function Gallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

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

  const filteredImages = images.filter((image) =>
    image.tag.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h2 className="text-4xl text-center">Image Gallery</h2>
      <SearchBar setSearchQuery={setSearchQuery} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {loading ? (
          <Loader />
        ) : (
          filteredImages.map((image, index) => (
            <ImageCard key={image.id} image={image} index={index} />
          ))
        )}
      </div>
    </div>
  );
}

export default Gallery;
