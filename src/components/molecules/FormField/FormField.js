import React from "react";
import PropTypes from "prop-types";
import Label from "components/atoms/Label/Label";
import { Input } from "components/atoms/Input/Input";

const FormField = React.forwardRef(
  ({ id, onChange, name, text, value, type, children, ...props }, ref) => {
    return (
      <Label name={name} text={text}>
        <Input
          id={id}
          onChange={onChange}
          name={name}
          value={value}
          type={type}
          {...props}
          ref={ref}
        />
        {children}
      </Label>
    );
  }
);
FormField.propTypes = {
  props: PropTypes.shape({
    text: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
  }),
};
export default FormField;
