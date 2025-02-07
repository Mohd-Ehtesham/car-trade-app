import PropTypes from "prop-types";

export default function FormInput({
  type,
  id,
  name,
  placeholder,
  className,
  value,
  onChange,
}) {
  return (
    <div>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        className={className}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

FormInput.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  className: PropTypes.string,
  value: PropTypes.string.isRequired, // Ensures `value` is always a string
  onChange: PropTypes.func.isRequired, // Ensures `onChange` is a function
};
