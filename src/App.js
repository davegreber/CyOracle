import React, { useState } from "react";


const images = [
  
  {
    name: "tarot_cups_1.jpg",
    src: "/images/tarot_cups_1.jpg",
    alt: "abstract stone rune",
    title: "Ace of Smart-Cups",
    caption: "The Smart Water Bottle with Filtration represents new beginnings, clarity and potential in the emotional and relational aspects of life. This card may indicate that it's time to start something new in your emotional life, such as a new relationship or a deeper connection with your current partner. Use the smart water bottle with filtration to ensure you are hydrated and not poisoned by toxic water. Take a sip, and begin a new journey!"
  },
  {
    name: "tarot_cups_2.jpg",
    src: "/images/tarot_cups_2.jpg",
    alt: "abstract stone rune",
    title: "Two of Smart-Cups",
    caption: "The Virtual Reality Wedding Planner represents balance, harmony, and stability in the emotional and relational aspects of life. This card may indicate that it's time to find balance and harmony in your relationships and emotions. Use the virtual reality wedding planner to plan the perfect union of energies, and experience the consonance and euphony in your life."
  },
  {
    name: "tarot_cups_3.jpg",
    src: "/images/tarot_cups_3.jpg",
    alt: "abstract stone rune",
    title: "Three of Smart-Cups",
    caption: "The Online Party Planning App represents celebration, joy, and togetherness in the emotional and relational aspects of life. This card may indicate that it's time to celebrate, have fun and enjoy the company of others. Use your online party planning app to plan the perfect gathering and make memories with your loved ones."
  },
  {
    name: "tarot_cups_4.jpg",
    src: "/images/tarot_cups_4.jpg",
    alt: "abstract stone rune",
    title: "Four of Smart-Cups",
    caption: "The Meditation App with Brainwave Tracking represents introspection, contemplation, and inner peace in the emotional and relational aspects of life. This card may indicate that it's time to look within yourself and find serenity. You have to track your waves before you can improve them. Observe your patterns for mental well-being and achieve composure."
  },
  {
    name: "tarot_cups_5.jpg",
    src: "/images/tarot_cups_5.jpg",
    alt: "abstract stone rune",
    title: "Five of Smart-Cups",
    caption: "The Virtual Reality Funeral Service represents loss, grief, and healing in the emotional and relational aspects of life. This card may indicate that it's time to restore and move on from a loss. Use a virtual reality funeral service to honor and remember lost parts of yourself, and find closure and healing."
  },
  {
    name: "tarot_cups_6.jpg",
    src: "/images/tarot_cups_6.jpg",
    alt: "abstract stone rune with clouds",
    title: "Six of Smart-Cups",
    caption: "The Cloud Storage with Automatic Backup represents memories, nostalgia, and looking back in the personal and social dimensions of life. This card may indicate that it's time to look back on past experiences and reflect. What can I learn from this? Use a metaphysical cloud storage with automatic backup to store and preserve your memories, and look back on them with contemplation."
  },
  {
    name: "tarot_cups_7.jpg",
    src: "/images/tarot_cups_7.jpg",
    alt: "abstract stone rune with ice cream",
    title: "Seven of Smart-Cups",
    caption: "The Virtual Reality Ice Cream Shop represents temptation, indulgence, and pleasure in the emotional and relational aspects of life. This card may be a sign that it's time to spoil yourself a little and indulge in some well-deserved treats or luxuries. Use the virtual reality ice cream shop to indulge in your favorite flavors of life, and spoil yourself with some sweet delight."
  },
  {
    name: "tarot_cups_8.jpg",
    src: "/images/tarot_cups_8.jpg",
    alt: "abstract stone rune with tree",
    title: "Eight of Smart-Cups",
    caption: "The Virtual Reality Nature Walk represents tranquility, serenity, and escape in the affective and relational aspects of life. This card may indicate that it's time to retreat and find calm. Take a forest bath: deeply breathe in some digital phytoncides and terpenes, which promote relaxation and reduce stress."
  },
  {
    name: "tarot_cups_9.jpg",
    src: "/images/tarot_cups_9.jpg",
    alt: "stone relief of vegetables",
    title: "Nine of Smart-Cups",
    caption: "The Smart Refrigerator with Grocery Ordering represents abundance, prosperity, and gratification in the personal and social aspects of life. This card may indicate that it's time to achieve surplus and satisfaction. Use the smart refrigerator with grocery ordering to ensure the fridge of your heart is always well-stocked and with healthy nourishment."
  },
  {
    name: "tarot_cups_10.jpg",
    src: "/images/tarot_cups_10.jpg",
    alt: "stone relief of vegetables",
    title: "Ten of Smart-Cups",
    caption: "The Smart Home with Voice Control represents contentment, happiness, and fulfillment in the emotional and relational aspects of life. Let your home become the manifestation of your voice. Experience contentment and fulfillment when the vibration and the form align."
  },
  {
    name: "tarot_cups_11.jpg",
    src: "/images/tarot_cups_11.jpg",
    alt: "stone relief of vegetables",
    title: "Page of Smart-Cups",
    caption: "The Audiobook with AI-generated Sound Effects represents messages, new information, and new opportunities in the emotional and relational aspects of life. This card may indicate that it's time to be open to new information and new opportunities. Enhance your listening experience and open yourself up to new perspectives, ideas and sound effects."
  },
  {
    name: "tarot_cups_12.jpg",
    src: "/images/tarot_cups_12.jpg",
    alt: "stone relief of vegetables",
    title: "Knight of Smart-Cups",
    caption: "The Streaming Movie with Interactive Elements represents action and courage in the emotional and relational aspects of life. The movie of inaction is over, and the movie of doing is upon us. Pursue your passions. Immerse yourself in the story and take action in your own life. Choose your own adventure."
  },
  {
    name: "tarot_cups_13.jpg",
    src: "/images/tarot_cups_13.jpg",
    alt: "stone relief of vegetables",
    title: "Queen of Smart-Cups",
    caption: "The Telemedicine with Virtual Reality Consultations represents nurturing, care, and support in the emotional and relational aspects of life. This card may indicate that it's time to cultivate yourself and others. You have the knowledge and abilities to receive medical care and support from the comfort of your own home."
  },
  {
    name: "tarot_cups_14.jpg",
    src: "/images/tarot_cups_14.jpg",
    alt: "stone relief of vegetables",
    title: "King of Smart-Cups",
    caption: "The Self-Care App with Biofeedback represents leadership, success and power in the emotional and relational aspects of life. This card may indicate that it's time to take charge and lead the way. You can tap into the universe of biofeedback and gain greater insight into your emotional state, allowing you to make more informed decisions and take actions that align with your values and goals."
  },


  // Add the rest of the images with their captions here.
];

function App() {
  const [text, setText] = useState("");
  const [randomImage, setRandomImage] = useState(null);
  const [inputWidth, setInputWidth] = useState("60vw");
  const [inputPlaceholder, setInputPlaceholder] = useState("ASK A QUESTION");
  const [showPlaceholderImage, setShowPlaceholderImage] = useState(true);
  const [showImage, setShowImage] = useState(false);
  const [showText, setShowText] = useState(false);
  

  const handleTextChange = (event) => {
    setText(event.target.value);
    setInputWidth(`${Math.max(8, event.target.value.length) + 1}ch`);
    if (!randomImage) {
      setShowPlaceholderImage(true);
    }
  };

  const selectRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  };

  const handleButtonClick = () => {
    const trimmedText = text.trim();
    if (trimmedText === "") {
      return;
    }
    const lastChar = trimmedText.charAt(trimmedText.length - 1);
    if (lastChar !== "?") {
      setText("");
      setInputWidth("60vw");
      setInputPlaceholder("MUST BE A QUESTION");
      setShowPlaceholderImage(true);
      setShowText(false);
      return;
    }
    const randomImage = selectRandomImage();
    setRandomImage(randomImage);
    setShowPlaceholderImage(false);
    setShowImage(false);
    setShowText(true);
    setTimeout(() => {
      setShowImage(true);
      setRandomImage(randomImage);
    }, 200);
  };

  const handleResetClick = () => {
    setText("");
    setRandomImage(null);
    setInputWidth("60vw");
    setInputPlaceholder("ASK ANOTHER QUESTION");
    setShowPlaceholderImage(true);
    setShowText(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (text.endsWith("?")) {
        handleButtonClick();
      } else {
        setText("");
        setInputPlaceholder("ENTER A QUESTION");
        setInputWidth("60vw");
      }
    }
  };

  return (
    <div className="container">
      {showText ? (
        <h3 id="quote">"{text}"</h3>
      ) : (
        <input
          type="text"
          value={text}
          onChange={handleTextChange}
          onKeyDown={handleKeyDown}
          placeholder={inputPlaceholder}
          style={{  width: inputWidth, fontSize: `${Math.min(1.5, 1.5 - 0.01 * text.length)}em`, overflow: "visible" }}
        />
      )}

      {randomImage && (
        <>
          <img src={randomImage.src} alt={randomImage.alt} style={{ width: "50vw" }} className={`fade ${showImage ? "fadeIn" : "fadeOut"}`} />
          <h3>{randomImage.title}</h3>
          <p>{randomImage.caption}</p>
        </>
      )}
      {showPlaceholderImage && !randomImage && (
        <img src="/images/tarot_back.jpg" alt="placeholder" className="fade fadeIn" style={{ width: "50vw" }} />
      )}

      <div className="bottom-container">
        {randomImage && (
          <div className="button-container">
            <button onClick={handleResetClick}>ASK ANOTHER</button>
          </div>
        )}
      </div>

      {!randomImage && (
        <div className="button-container">
          <br />
          <button onClick={handleButtonClick}>DEAL</button>
        </div>
      )}
    </div>
  );
}


export default App;
