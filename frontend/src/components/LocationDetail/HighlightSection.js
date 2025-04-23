// import PropTypes from "prop-types";

// const HighlightSection = ({ location, imageMapper }) => (
//   <section id="highlight" className="highlight">
//     <h2>Vì Sao Bạn Nên Ghé Thăm?</h2>
//     <div className="highlight-grid">
//       <div>
//         <h3>{location.whyVisit.architecture.title}</h3>
//         <p>{location.whyVisit.architecture.text}</p>
//         <img
//           src={imageMapper[location.whyVisit.architecture.image]}
//           alt="Kiến trúc"
//         />
//       </div>
//     </div>
//     <p>{location.whyVisit.culture}</p>
//   </section>
// );

// HighlightSection.propTypes = {
//   location: PropTypes.shape({
//     whyVisit: PropTypes.shape({
//       architecture: PropTypes.shape({
//         title: PropTypes.string.isRequired,
//         text: PropTypes.string.isRequired,
//         image: PropTypes.string.isRequired,
//       }).isRequired,
//       culture: PropTypes.string.isRequired,
//     }).isRequired,
//   }).isRequired,
//   imageMapper: PropTypes.object.isRequired,
// };

// export default HighlightSection;

import React from "react";

const HighlightSection = ({ location, imageMapper }) => {
  return (
    <section id="highlight" className="highlight mb-8">
      <h2 className="text-2xl font-semibold mb-4">Vì Sao Bạn Nên Ghé Thăm?</h2>
      <div className="highlight-grid grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h3 className="text-xl font-medium">{location.whyVisit?.architecture?.title || "Không có tiêu đề"}</h3>
          <p>{location.whyVisit?.architecture?.text || "Không có thông tin"}</p>
          {location.whyVisit?.architecture?.image && (
            <img
              src={imageMapper(location.whyVisit.architecture.image)}
              alt="Kiến trúc"
              className="w-full h-48 object-cover rounded-lg mt-2"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/300x200?text=Error+Loading+Image";
              }}
            />
          )}
        </div>
      </div>
      <p className="mt-4">{location.whyVisit?.culture || "Không có thông tin"}</p>
    </section>
  );
};

export default HighlightSection;