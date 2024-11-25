import React from 'react';
import { BgPropType } from '@/types/componentTypes';

const AboutBgItem: React.FC<BgPropType> = ({ bgImage, showStory, toggleStory }) => {
  return (
    <div className="about-item" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="about-content flex flex-col justify-center items-start">
        <div className="name">About Us</div>
        <div className="desc mt-2">
          Our chocolate-making journey began in 1999 with a simple vision: to create high-quality, handcrafted chocolates for everyone to enjoy. What started as a small passion project has blossomed into a beloved brand, celebrated for its delectable variety and meticulous craftsmanship. Today, we remain committed to innovation while honoring the traditions that have been at the heart of our story from the very beginning.
        </div>
        <div className="desc text-lg leading-7 mb-4">
          {showStory
            ? "OUR STORY: Since 1999, we have been passionately creating the finest chocolates, driven by the love for craftsmanship and innovation. Our journey began with a simple idea: to make every moment sweeter with artisanal chocolates. Over the years, we have perfected our craft, using the best ingredients to ensure each bite is a celebration."
            : ""}
        </div>
        <button
          onClick={toggleStory}
          className="toggle-btn mt-4 text-orange-950
           font-semibold border-2 shadow-md p-2 rounded-lg"
        >
          {showStory ? "See Less" : "See More"}
        </button>
      </div>
    </div>
  );
};

export default AboutBgItem;