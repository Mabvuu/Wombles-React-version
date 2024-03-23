import React from 'react';

const TextImageSection = () => {
  return (
    <div className="about-section flex justify-between items-center">
      <div className="left-side w-1/2 pr-4">
        <div className="text-content">
          <h2 className="underline">Who Are We</h2>
          <p>Wombles is a restaurant renowned as a fine-dining steakhouse in Harare, Zimbabwe.
            Its fascinating and colorful history of local and international culinary excellence stretching
            back almost four decades has made it a household name in the city.</p>
          <p>It is a fine dining restaurant and features an excellent Menu
            and wine list, with prices commensurate with expectations from an A-list venue.
            At the core of the menu is a heart a steakhouse, but with a wide selection of other dishes, including
            vegetarian options - makes it both varied and interesting to folk looking for non-beef content.</p>
        </div>
        <img src="img1/5.jpg" alt="Your Description" className="image2" />
        <img src="img1/4.jpg" alt="image1" className="image1" />
      </div>
      <div className="right-side w-1/2">
        <img src="img1/4.jpg" alt="image1" />
      </div>
    </div>
  );
}

export default TextImageSection;
