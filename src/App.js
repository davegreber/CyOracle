import React, { useState } from "react";

const images = [
  {
    name: "tarot_cups_9.jpg",
    src: "/images/tarot_cups_9.jpg",
    alt: "stone relief of vegetables",
    title: "The 9 of Cups",
    caption: "The Smart refrigerator with grocery ordering represents abundance, prosperity, and satisfaction in the emotional and relational aspects of life. This card may indicate that it's time to achieve abundance and satisfaction. Use the smart refrigerator with grocery ordering to ensure your fridge is always stocked and enjoy the abundance in your life."
  },
  {
    name: "tarot_cups_2.jpg",
    src: "/images/tarot_cups_2.jpg",
    alt: "abstract stone rune",
    title: "The 2 of Cups",
    caption: "The Virtual reality wedding planner represents balance, harmony, and stability in the emotional and relational aspects of life. This card may indicate that it's time to find balance and harmony in your relationships and emotions. Use the virtual reality wedding planner to plan the perfect wedding, and experience the harmony and balance in your life."
  },
  // Add the rest of the images with their captions here.
];

function App() {
  const [text, setText] = useState("");
  const [randomImage, setRandomImage] = useState(null);
  const [inputWidth, setInputWidth] = useState("60vw");
  const [inputPlaceholder, setInputPlaceholder] = useState("ask a question about your present");

  const handleTextChange = (event) => {
    setText(event.target.value);
    setInputWidth(`${Math.max(8, event.target.value.length) + 1}ch`);
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
    setInputWidth("60vw");
    setInputPlaceholder("ask another question about your present");
  };

  if (randomImage) {
    return (
      <div className="container">
        <img src={randomImage.src} alt={randomImage.alt} style={{ width: "50vw" }}/>
        <h3>{randomImage.title}</h3>
        <p>{randomImage.caption}</p>
        <div className="button-container">
          <button onClick={handleResetClick}>ask another question</button>
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
        placeholder={inputPlaceholder}
        style={{ width: inputWidth, fontSize: `${Math.min(1.5, 1.5 - 0.01 * text.length)}em` }}
      />

      <div className="button-container">
        <button onClick={handleButtonClick}>Ask</button>
      </div>
    </div>
  );
}

export default App;
