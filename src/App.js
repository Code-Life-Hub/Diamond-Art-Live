import React from "react";
import "./App.css";

function DonationButton() {
  const cashAppURL = "https://cash.app/$CurvysDiamondArt"; // Your Cash App URL

  const handleDonateClick = () => {
    window.open(cashAppURL, "_blank"); // Opens the Cash App URL in a new window/tab
  };

  return <button onClick={handleDonateClick}>Donations</button>;
}

function Header() {
  return (
    <header>
      <h1>Curvys Diamond Art</h1>
      <DonationButton />     
      <h2>If you would like to support creation of more Diamond Art, <b>Donate above.</b></h2>
    </header>
  );
}

function ArtPiece({ title, imageSrc, description }) {
  // Function to handle the double-click event
  const handleDoubleClick = () => {
    window.open(imageSrc, "_blank"); // Opens the image in a new window
  };

  return (
    <article className="art-piece">
      <h2>{title}</h2>
      <img
        src={imageSrc}
        alt={description}
        title={description} // This will display the description as a tooltip on hover
        onDoubleClick={handleDoubleClick}
      />
    </article>
  );
}

function Gallery() {
  const artPieces = [
    {
      title: "DC Heroes",
      imageSrc: require("./IMG_4020.JPG"),
      description: "The Super Heroes From The DC Comics",
    },
    {
      title: "A Powerful Reflection",
      imageSrc: require("./IMG_4003.JPG"),
      description:
        "An African tree with the sunset behind it and a mirror image on the bottom half",
    },
    {
      title: "The Face of Freedom",
      imageSrc: require("./IMG_4004.JPG"),
      description: "A face shot of an American Bald Eagle",
    },
    {
      title: "Tranquility",
      imageSrc: require("./IMG_4005.JPG"),
      description:
        "A colony of blue Butterflies with a large multi-colored Butterfly in the middle",
    },
    {
      title: "Rainbelephant",
      imageSrc: require("./IMG_4007.JPG"),
      description:
        "An elephant throwing rainbow colored water from its trunk over its head",
    },
    {
      title: "Classic Farm Truck",
      imageSrc: require("./IMG_4009.JPG"),
      description: "An oldschool classic blue farm truck",
    },
    {
      title: "Mid-Summers Mist",
      imageSrc: require("./IMG_4011.JPG"),
      description: "A Dhalia flower being softly misted on by the rain",
    },
    {
      title: "Dhalias Beauty",
      imageSrc: require("./IMG_4013.JPG"),
      description: "A beautiful Dhalia flower in the sun",
    },
    {
      title: "Freedoms Limits",
      imageSrc: require("./IMG_4015.JPG"),
      description:
        "An eagle with feathers matching the american flag soaring high",
    },
    {
      title: "Blissful Purity",
      imageSrc: require("./IMG_4016.JPG"),
      description: "Sea turtle swimming underwater",
    },
    {
      title: "Scent of Autumn",
      imageSrc: require("./IMG_4002.JPG"),
      description: "Tree showing all the Autumn colors",
    },
    {
      title: "Crabapples Blossom",
      imageSrc: require("./IMG_4018.JPG"),
      description: "Crabapples blooming",
    },
    {
      title: "Fright Night",
      imageSrc: require("./IMG_4023.JPG"),
      description: "Horror Movie Characters",
    },
  ];

  return (
    <section className="gallery">
      {artPieces.map((piece) => (
        <ArtPiece key={piece.title} {...piece} />
      ))}
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <h3>&copy; 2023 by Code-Life-Hub. All rights reserved.</h3>
    </footer>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
