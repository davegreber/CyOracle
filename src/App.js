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
      <div className="button-container">
        <img src={randomImage.src} alt={randomImage.alt} style={{ width: "60vw" }}/>
        <p>{randomImage.caption}</p>
        <div className="button-container">
          <button onClick={handleResetClick}>  ask another question  </button>
        </div>
      </div>
    );
  }

  return (
    <div className="button-container">
      <input 
      type="text" 
      value={text} 
      onChange={handleTextChange} 
      placeholder="ask a question about your present"
      style={{ textAlign: "center" }} 
      />

      <div className="button-container">
        <button onClick={handleButtonClick}>  Ask  </button>
      </div>
    </div>
  );
}

export default App;