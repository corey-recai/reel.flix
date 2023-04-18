import { Component } from "solid-js";
interface Props {
  name: string;
  type: string;
  title: string;
  className: string;
  placeholder?: string;
  // onChange: () => void;
  autoComplete: string;
  value?: string;
  errorDiv?: string;
  errorMsg?: string;
}

export const Input: Component<Props> = ({
  name,
  type,
  title,
  className,
  placeholder,
  // onChange,
  autoComplete,
  value = "",
  errorDiv,
  errorMsg,
}) => {
  return (
    <div class='mb-3'>
      <label for={name} class='form-label'>
        {title}
      </label>
      <input
        type={type}
        class={className}
        id={name}
        name={name}
        placeholder={placeholder}
        // onKeyUp={onChange}
        autocomplete={autoComplete}
        value={value}
      />
      <div class={errorDiv}>{errorMsg}</div>
    </div>
  );
};

export default Input;
