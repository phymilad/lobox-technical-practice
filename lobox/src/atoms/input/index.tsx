import React from "react";

type Props = {
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

export const Input: React.FC<Props> = ({ value, placeholder, onChange, onKeyDown }) => {
  return (
    <input
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
      className="multi-select-dropdown__input"
    />
  );
};