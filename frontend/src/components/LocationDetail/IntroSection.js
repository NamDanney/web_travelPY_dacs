// import PropTypes from "prop-types";

// const IntroSection = ({ location, imageMapper }) => (
//   <section id="intro" className="intro mb-8">
//     <h2 className="text-2xl font-semibold mb-4">Giới Thiệu</h2>
//     <img
//       src={imageMapper[location.introduction.image]}
//       alt="Toàn cảnh"
//       className="w-full h-64 object-cover rounded-lg mb-4"
//     />
//     <p>{location.introduction.text}</p>
//   </section>
// );

// IntroSection.propTypes = {
//   location: PropTypes.shape({
//     introduction: PropTypes.shape({
//       image: PropTypes.string.isRequired,
//       text: PropTypes.string.isRequired,
//     }).isRequired,
//   }).isRequired,
//   imageMapper: PropTypes.object.isRequired,
// };

// export default IntroSection;

import React from "react";

const IntroSection = ({ location, imageMapper }) => {
  return (
    <section id="intro" className="intro mb-8">
      <h2 className="text-2xl font-semibold mb-4">Giới Thiệu</h2>
      {location.introduction?.image && (
        <img
          src={imageMapper(location.introduction.image)}
          alt="Toàn cảnh"
          className="w-full h-64 object-cover rounded-lg mb-4"
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/300x200?text=Error+Loading+Image";
          }}
        />
      )}
      <p>{location.introduction?.text || "Không có thông tin"}</p>
    </section>
  );
};

export default IntroSection;