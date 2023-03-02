import React, { useState } from "react";


const images = [
//cups
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
    caption: "The Virtual Reality Ice Cream Shop represents temptation, indulgence, and pleasure in the emotional and relational aspects of life. This card may be a sign that it's time to indulge in some well-deserved treats or luxuries. Use the virtual reality ice cream shop to taste the favorite flavors of life, and spoil yourself with some sweet delight."
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

  //wands

  {
    name: "tarot_wands_1.jpg",
    src: "/images/tarot_wands_1.jpg",
    alt: "abstract stone rune",
    title: "Ace of Smart-Wands",
    caption: "The Electric Skateboard represents new beginnings and potential in the area of action, creativity and pursuit of one's goals. This card may indicate that it's time to start something new and exciting, such as a new project, a new hobby or a new venture. Take the skateboard and ride into the future!"
  },
  {
    name: "tarot_wands_2.jpg",
    src: "/images/tarot_wands_2.jpg",
    alt: "abstract stone rune",
    title: "Two of Smart-Wands",
    caption: "The GPS Tracking for Pets represents planning, vision and decision making in the area of action, creativity and pursuit of one's goals. This card may indicate that it's time to make decisions and plan for the safety and well-being of your animal companions. With the help of GPS tracking you can keep an eye on your pet's location and ensure their safety. Keep the pets of your consciousness safe and secure!"
  },
  {
    name: "tarot_wands_3.jpg",
    src: "/images/tarot_wands_3.jpg",
    alt: "abstract stone rune",
    title: "Three of Smart-Wands",
    caption: "The Virtual Reality Travel App represents exploration, adventure and broadening horizons. This card may indicate that it's time to explore new places, discover new cultures and broaden your horizons. Travel to the unknown and expand your mind!"
  },
  {
    name: "tarot_wands_4.jpg",
    src: "/images/tarot_wands_4.jpg",
    alt: "abstract stone rune",
    title: "Four of Smart-Wands",
    caption: "The Streaming Device with Voice Control represents stability, security and celebration. This card may indicate that it's time to enjoy the fruits of your labor and celebrate your achievements. Use the streaming device with voice control to access your favorite shows and celebrate in style!"
  },
  {
    name: "tarot_wands_5.jpg",
    src: "/images/tarot_wands_5.jpg",
    alt: "abstract stone rune",
    title: "Five of Smart-Wands",
    caption: "The Social Media Fact-Checking Tool represents competition, challenges, and conflict. This card may indicate that it's time to face challenges and competition head-on. Use the social media fact-checking tool to make sure you're getting accurate information and stay ahead of the competition."
  },
  {
    name: "tarot_wands_6.jpg",
    src: "/images/tarot_wands_6.jpg",
    alt: "abstract stone rune with clouds",
    title: "Six of Smart-Wands",
    caption: "The Online Reputation Management service represents victory, recognition, and success. This card may indicate that it's time to take control of your online presence and enhance your reputation. Use the online reputation management service to improve your image and gain recognition for your achievements."
  },
  {
    name: "tarot_wands_7.jpg",
    src: "/images/tarot_wands_7.jpg",
    alt: "abstract stone rune with ice cream",
    title: "Seven of Smart-Wands",
    caption: "The Cybersecurity for IoT devices represents defense, resilience and protection. This card may indicate that it's time to protect yourself and your assets from cyber threats. Use cybersecurity for IoT devices to keep your connected devices safe and secure."
  },
  {
    name: "tarot_wands_8.jpg",
    src: "/images/tarot_wands_8.jpg",
    alt: "abstract stone rune with tree",
    title: "Eight of Smart-Wands",
    caption: "The End-to-end encrypted messaging app represents communication, travel and movement. This card may indicate that it's time to communicate effectively and securely with others. Use the end-to-end encrypted messaging app to ensure your messages are private and protected."
  },
  {
    name: "tarot_wands_9.jpg",
    src: "/images/tarot_wands_9.jpg",
    alt: "stone relief of vegetables",
    title: "Nine of Smart-Wands",
    caption: "The AI-powered antivirus software represents preparation, resilience, and perseverance. This card may indicate that it's time to prepare for challenges and protect yourself from threats. Use the AI-powered antivirus software to keep your ego safe from psychic malware and other cyber threats."
  },
  {
    name: "tarot_wands_10.jpg",
    src: "/images/tarot_wands_10.jpg",
    alt: "stone relief of vegetables",
    title: "Ten of Smart-Wands",
    caption: "The Smart luggage with built-in scale represents completion, responsibility, and hard work. This card may indicate that it's time to finish what you've started and take responsibility for your actions. Use the smart luggage with built-in scale to make traveling a breeze and avoid any unexpected metaphorical charges for overweight luggage."
  },
  {
    name: "tarot_wands_11.jpg",
    src: "/images/tarot_wands_11.jpg",
    alt: "stone relief of vegetables",
    title: "Page of Smart-Wands",
    caption: "The Delivery drone with package locker represents messages, new information and new opportunities. This card may indicate that it's time to be open to mysterious communications and windfalls. Use a delivery drone with package locker to receive your incoming content safely and securely."
  },
  {
    name: "tarot_wands_12.jpg",
    src: "/images/tarot_wands_12.jpg",
    alt: "stone relief of vegetables",
    title: "Knight of Smart-Wands",
    caption: "The Search and Rescue drone with Thermal Imaging represents action, adventure, and courage. This card may indicate that it's time to take action and pursue your passions. Use the search and rescue drone with thermal imaging to help others in need and make a difference."
  },
  {
    name: "tarot_wands_13.jpg",
    src: "/images/tarot_wands_13.jpg",
    alt: "stone relief of vegetables",
    title: "Queen of Smart-Wands",
    caption: "The Smart Kitchen Appliance with Voice Control represents creativity, inspiration, and nurturing. This card may indicate that it's time to tap into your creative potential and nurture yourself and others. Use the smart kitchen appliance with voice control to compose masterful meals with the skill of a chef."
  },
  {
    name: "tarot_wands_14.jpg",
    src: "/images/tarot_wands_14.jpg",
    alt: "stone relief of vegetables",
    title: "King of Smart-Wands",
    caption: "The Robotics Engineer with Machine Learning represents leadership, success and power. This card may indicate that it's time to take charge and lead the way in your field. Use the knowledge and skills of a robotics engineer with machine learning to create innovative and efficient solutions. With this card, you are ready to create something truly amazing."
  },

  //swords

  {
    name: "tarot_swords_1.jpg",
    src: "/images/tarot_swords_1.jpg",
    alt: "aabstract sand relief sculpture",
    title: "Ace of Smart-Swords",
    caption: "The Voice Recognition Software represents new beginnings, clarity, and decision making. This card may indicate that it's time to start something new, express yourself clearly and make important decisions. Use the voice recognition software to command your devices and take control of your environment. Let your voice be heard… and understood."
  },
  {
    name: "tarot_swords_2.jpg",
    src: "/images/tarot_swords_2.jpg",
    alt: "abstract sand relief sculpture",
    title: "Two of Smart-Swords",
    caption: "The Self-Driving Car represents balance, harmony and stability in the mental and intellectual aspects of life. This card may indicate that it's time to find equilibrium in your thoughts and actions. Let your mind drive you safely and efficiently, while your heart can focus on what's important."
  },
  {
    name: "tarot_swords_3.jpg",
    src: "/images/tarot_swords_3.jpg",
    alt: "abstract sand relief sculpture",
    title: "Three of Smart-Swords",
    caption: "The Virtual Personal Shopping Assistant represents celebration, joy and togetherness in the mental and intellectual aspects of life. This card may indicate that it's time to honor, have fun and enjoy the company of others. Let the shopping assistant guide you towards making thoughtful and informed purchases, while also encouraging you to take time to appreciate the people in your life who support your intellectual growth."
  },
  {
    name: "tarot_swords_4.jpg",
    src: "/images/tarot_swords_4.jpg",
    alt: "abstract sand relief sculpture",
    title: "Four of Smart-Swords",
    caption: "The Smart Mirror with Virtual Try-On represents introspection, contemplation and inner peace in the mental and intellectual aspects of life. This card may indicate that it's time to look within yourself and find inner peace. Experiment with different styles and looks, express yourself authentically and confidently, while also supporting your inner journey towards self-discovery and inner harmony."
  },
  {
    name: "tarot_swords_5.jpg",
    src: "/images/tarot_swords_5.jpg",
    alt: "abstract sand relief sculpture",
    title: "Five of Smart-Swords",
    caption: "The Virtual Reality Language Learning App represents loss, grief and healing in mental and intellectual aspects of life. This card may indicate that it's time to grieve, heal, and move on from a loss. Use the Virtual Reality Language Learning App to learn a new language, and find closure and healing."
  },
  {
    name: "tarot_swords_6.jpg",
    src: "/images/tarot_swords_6.jpg",
    alt: "abstract sand relief sculpture",
    title: "Six of Smart-Swords",
    caption: "The Smart Scale with Body Composition Analysis represents memories, nostalgia and looking back in the mental and intellectual aspects of life. This card may indicate that it's time to look back on past memories and reflect. As you track your physical progress, let it also serve as a reminder to honor the memories and experiences that have shaped you, and use them to inspire and motivate you towards greater mental and physical well-being."
  },
  {
    name: "tarot_swords_7.jpg",
    src: "/images/tarot_swords_7.jpg",
    alt: "abstract sand relief sculpture",
    title: "Seven of Smart-Swords",
    caption: "The Virtual Reality Job Interview Software represents temptation, indulgence, and pleasure in the mental and intellectual aspects of life. This card may indicate that it's time to indulge in pleasure and treat yourself. Use the virtual reality job interview software to prepare and ace your next interview, and treat yourself to the satisfaction of having a new job."
  },
  {
    name: "tarot_swords_8.jpg",
    src: "/images/tarot_swords_8.jpg",
    alt: "abstract sand relief sculpture",
    title: "Eight of Smart-Swords",
    caption: "The Virtual Reality Public Speaking Simulator represents tranquility, serenity, and escape in the mental and intellectual aspects of life. This card may indicate that it's time to escape and find peace. Practice and perfect your public speaking skills, and escape from the stresses of stage fright."
  },
  {
    name: "tarot_swords_9.jpg",
    src: "/images/tarot_swords_9.jpg",
    alt: "abstract sand relief sculpture",
    title: "Nine of Smart-Swords",
    caption: "The Smart Air Purifier with Air Quality Monitoring represents abundance, prosperity, and satisfaction in the intellectual aspects of life. Let the Smart Air Purifier serve as a symbol of the possibilities available to you as you strive towards greater mental clarity and peace, and breathe in the fresh air that comes with a mind free from mental clutter."
  },
  {
    name: "tarot_swords_10.jpg",
    src: "/images/tarot_swords_10.jpg",
    alt: "abstract sand relief sculpture",
    title: "Ten of Smart-Swords",
    caption: "The Virtual Reality Therapy App represents contentment, happiness, and fulfillment in the mental and intellectual aspects of life. Improve your mental health and experience contentment and fulfillment. Through the immersive experience, you can gain new perspectives, expand your awareness, and find greater peace and happiness in your inner world."
  },
  {
    name: "tarot_swords_11.jpg",
    src: "/images/tarot_swords_11.jpg",
    alt: "abstract sand relief sculpture",
    title: "Page of Smart-Swords",
    caption: "The Smart Bike Lock with GPS tracking represents messages, new information, and new opportunities in the mental and intellectual aspects of life. By staying alert and aware of your surroundings, you can allow yourself to be open to new possibilities and opportunities for growth and exploration."
  },
  {
    name: "tarot_swords_12.jpg",
    src: "/images/tarot_swords_12.jpg",
    alt: "abstract sand relief sculpture",
    title: "Knight of Smart-Swords",
    caption: "The Virtual Reality Sports Training Program represents action, adventure, and courage in the mental and intellectual aspects of life. It's time to take action and pursue your passions. Improve your skills to inspire you to push beyond your limits and unlock your full potential, as you take bold and courageous action towards achieving your goals and dreams."
  },
  {
    name: "tarot_swords_13.jpg",
    src: "/images/tarot_swords_13.jpg",
    alt: "abstract sand relief sculpture",
    title: "Queen of Smart-Swords",
    caption: "The Smart Notebook with Automatic Transcription represents nurturing and support in the mental and intellectual aspects of life. It's time to care for yourself and others. Use this symbol to prioritize self-care and support your own development, while also nurturing and empowering those around you with the insights you gain."
  },
  {
    name: "tarot_swords_14.jpg",
    src: "/images/tarot_swords_14.jpg",
    alt: "abstract sand relief sculpture",
    title: "King of Smart-Swords",
    caption: "The Virtual Reality Coding Bootcamp represents leadership, success and power in the mental and intellectual aspects of life. It's time to take charge gain the skills needed to assert your leadership and achieve success in your intellectual pursuits, while also inspiring and supporting others on their own paths to success."
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
