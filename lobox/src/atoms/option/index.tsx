import React from "react";
import "./index.scss";
import { Option } from "../../models/types";
import { HiMiniCheck } from "react-icons/hi2";

type Props = {
  option: Option;
  isSelected: boolean;
  onClick: () => void;
};

export const OptionItem: React.FC<Props> = ({ option, isSelected, onClick }) => {
  return (
    <div
      className={`option-item ${isSelected ? "option-item--selected" : ""}`}
      onClick={onClick}
    >
      {option.label}
      {isSelected && <HiMiniCheck />}
    </div>
  );
};