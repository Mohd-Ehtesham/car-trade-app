import { forwardRef } from "react";
import PropTypes from "prop-types";

const CompareModal = forwardRef(({ cars }, ref) => {
  // Ensure two cars are selected
  if (cars.length !== 2) return null;

  return (
    <dialog ref={ref} className="modal mx-auto my-auto">
      <div className="modal-content p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4 text-center">Compare Cars</h2>

        {/* ✅ Car Comparison Table */}
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">Attribute</th>
              <th className="border border-gray-300 p-2">
                {cars[0].make} {cars[0].model}
              </th>
              <th className="border border-gray-300 p-2">
                {cars[1].make} {cars[1].model}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2 font-bold">Price</td>
              <td className="border border-gray-300 p-2">${cars[0].price}</td>
              <td className="border border-gray-300 p-2">${cars[1].price}</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 font-bold">Year</td>
              <td className="border border-gray-300 p-2">{cars[0].year}</td>
              <td className="border border-gray-300 p-2">{cars[1].year}</td>
            </tr>
          </tbody>
        </table>

        {/* Close Button */}
        <div className="flex justify-center mt-4">
          <button
            onClick={() => ref.current.close()}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            Close
          </button>
        </div>
      </div>
    </dialog>
  );
});

CompareModal.displayName = "CompareModal"; // ✅ Fix ESLint warning

CompareModal.propTypes = {
  cars: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      make: PropTypes.string.isRequired,
      model: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      year: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default CompareModal;
