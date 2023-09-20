
import React, { useState } from "react";
import ImageCard from "./ImageCard";
import SearchBar from "./SearchBar";
import Loader from "./Loader";

function Gallery() {
  const staticImages = [
    {
      id: 1,
      tag: "Food",
      imageUrl: "./src/assets/breakfast.jpg",
    },
    {
      id: 2,
      tag: "Mountain",
      imageUrl: "./src/assets/cld-sample-2.jpg",
    },
    {
      id: 3,
      tag: "Cat",
      imageUrl: "./src/assets/kitten-playing.gif",
    },
    {
      id: 4,
      tag: "Nature",
      imageUrl: "./src/assets/nature-mountains.jpg",
    },
    {
      id: 5,
      tag: "Sound",
      imageUrl: "./src/assets/jazz.jpg",
    },
    {
      id: 6,
      tag: "Kitchen",
      imageUrl: "./src/assets/kitchen-bar.jpg",
    },
    {
      id: 7,
      tag: "City",
      imageUrl: "./src/assets/imagecon-group.jpg",
    },
    {
      id: 8,
      tag: "Pot",
      imageUrl: "./src/assets/pot-mussels.jpg",
    },
    {
      id: 9,
      tag: "Animal",
      imageUrl: "./src/assets/reindeer.jpg",
    },
    {
      id: 10,
      tag: "Sport",
      imageUrl: "./src/assets/iel993luwvvc9pev05xr.png",
    },
  ];

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
