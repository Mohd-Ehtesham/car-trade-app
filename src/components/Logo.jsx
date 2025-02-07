import PropTypes from "prop-types";

export default function Logo({ src, alt, className }) {
  return (
    <div>
      <img src={src} alt={alt} className={className} />
    </div>
  );
}

Logo.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
};
