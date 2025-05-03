// import PropTypes from "prop-types";

// const GallerySection = ({ location, imageMapper }) => (
//   <section id="gallery" className="gallery">
//     <h2>Trải Nghiệm Tại Địa Điểm</h2>
//     <div className="gallery-grid">
//       {location.experiences.map((exp, index) => (
//         <div key={index}>
//           <img
//             src={imageMapper[exp.image]}
//             alt="Trải nghiệm"
//           />
//           <p>{exp.text}</p>
//         </div>
//       ))}
//     </div>
//   </section>
// );

// GallerySection.propTypes = {
//   location: PropTypes.shape({
//     experiences: PropTypes.arrayOf(
//       PropTypes.shape({
//         image: PropTypes.string.isRequired,
//         text: PropTypes.string.isRequired,
//       })
//     ).isRequired,
//   }).isRequired,
//   imageMapper: PropTypes.object.isRequired,
// };

// export default GallerySection;

import React from "react";

const GallerySection = ({ location, imageMapper }) => {
  return (
    <section id="gallery" className="gallery mb-8">
      <h2 className="text-2xl font-semibold mb-4">Trải Nghiệm Tại Địa Điểm</h2>
      {location.experiences && location.experiences.length > 0 ? (
        <div className="gallery-grid grid grid-cols-1 md:grid-cols-3 gap-4">
          {location.experiences.map((exp, index) => (
            <div key={index}>
              {exp.image && (
                <img
                  src={imageMapper(exp.image)}
                  alt={`Trải nghiệm ${index + 1}`}
                  className="w-full h-48 object-cover rounded-lg mb-2"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/300x200?text=Error+Loading+Image";
                  }}
                />
              )}
              <p>{exp.text || "Không có mô tả"}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Không có thông tin.</p>
      )}
    </section>
  );
};

export default GallerySection;