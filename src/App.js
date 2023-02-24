import React, { useState } from "react";

const images = [
  {
    name: "tarot_cups_9.jpg",
    src: "/images/tarot_cups_9.jpg",
    alt: "Cups 9",
    caption: "This is the caption for Cups 9."
  },
  {
    name: "tarot_cups_2.jpg",
    src: "/images/tarot_cups_2.jpg",
    alt: "Cups 2",
    caption: "This is the caption for Cups 2."
  },
  // Add the rest of the images with their captions here.
];

function App() {
  const [text, setText] = useState("");
  const [randomImage, setRandomImage] = useState(null);

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const selectRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  };

  const handleButtonClick = () => {
    setRandomImage(selectRandomImage());
  };

  const handleResetClick = () => {
    setText("");
    setRandomImage(null);
  };

  if (randomImage) {
    return (
      <div>
        <img src={randomImage.src} alt={randomImage.alt} />
        <p>{randomImage.caption}</p>
        <button onClick={handleResetClick}>Reset</button>
      </div>
    );
  }

  return (
    <div>
      <input type="text" value={text} onChange={handleTextChange} />
      <button onClick={handleButtonClick}>Select Random Image</button>
    </div>
  );
}

export default App;