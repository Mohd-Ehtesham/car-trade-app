import PropTypes from "prop-types";

export default function FormLabel({ htmlFor, children, className }) {
  return (
    <label htmlFor={htmlFor} className={className}>
      {children}
    </label>
  );
}

FormLabel.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
};
