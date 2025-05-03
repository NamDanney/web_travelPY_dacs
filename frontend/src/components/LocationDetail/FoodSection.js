// import PropTypes from "prop-types";

// const FoodSection = ({ location, imageMapper }) => (
//   <section id="food" className="food">
//     <h2>Ẩm Thực Đặc Sắc</h2>
//     <div className="food-grid">
//       {location.cuisine.map((dish, index) => (
//         <div key={index}>
//           <img
//             src={imageMapper[dish.image]}
//             alt="Ẩm thực"
//           />
//           <p>{dish.text}</p>
//         </div>
//       ))}
//     </div>
//   </section>
// );

// FoodSection.propTypes = {
//   location: PropTypes.shape({
//     cuisine: PropTypes.arrayOf(
//       PropTypes.shape({
//         image: PropTypes.string.isRequired,
//         text: PropTypes.string.isRequired,
//       })
//     ).isRequired,
//   }).isRequired,
//   imageMapper: PropTypes.object.isRequired,
// };

// export default FoodSection;

import React from "react";

const FoodSection = ({ location, imageMapper }) => {
  return (
    <section id="food" className="food mb-8">
      <h2 className="text-2xl font-semibold mb-4">Ẩm Thực Đặc Sắc</h2>
      {location.cuisine && location.cuisine.length > 0 ? (
        <div className="food-grid grid grid-cols-1 md:grid-cols-3 gap-4">
          {location.cuisine.map((dish, index) => (
            <div key={index}>
              {dish.image && (
                <img
                  src={imageMapper(dish.image)}
                  alt={`Ẩm thực ${index + 1}`}
                  className="w-full h-48 object-cover rounded-lg mb-2"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/300x200?text=Error+Loading+Image";
                  }}
                />
              )}
              <p>{dish.text || "Không có mô tả"}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Không có thông tin.</p>
      )}
    </section>
  );
};

export default FoodSection;

