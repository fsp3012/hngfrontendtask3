import React, { useState } from "react";
import ImageCard from "./ImageCard";
import SearchBar from "./SearchBar";
import Loader from "./Loader";
import staticImages from "../ImageList";

function Gallery() {
  
  const [images, setImages] = useState(staticImages);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

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
