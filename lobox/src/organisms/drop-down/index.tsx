import React, { useState, useRef, useEffect } from "react";
import "./index.scss";
import { Option } from "../../models/types";
import { Input } from "../../atoms/input";
import { OptionItem } from "../../atoms/option";
import { options } from "../../utils/constants";


const DropDown: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);
  const [showOptions, setShowOptions] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowOptions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setShowOptions(true);
  };

  const handleOptionClick = (option: Option) => {
    const isSelected = selectedOptions.some((item) => item.id === option.id);
    if (isSelected) {
      setSelectedOptions(selectedOptions.filter((item) => item.id !== option.id));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  // Filter static options based on inputValue
  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(inputValue.toLowerCase())
  );

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const firstOption = filteredOptions[0];
      if (firstOption) {
        const isSelected = selectedOptions.some((item) => item.id === firstOption.id);
        if (isSelected) {
          setSelectedOptions(selectedOptions.filter((item) => item.id !== firstOption.id));
        } else {
          setSelectedOptions([...selectedOptions, firstOption]);
        }
      }
    }
  };

  return (
    <div className="dropdown" ref={dropdownRef}>
      <div className="dropdown__input-container" onClick={() => setShowOptions(!showOptions)}>
        {selectedOptions.map((option) => (
          <span key={option.id} className="dropdown__selected-option">
            {option.label}
          </span>
        ))}
        <Input
          value={inputValue}
          placeholder="Type to search"
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
        />
      </div>
      {showOptions && (
        <div className="dropdown__options-container">
          {filteredOptions.map((option) => (
            <OptionItem
              key={option.id}
              option={option}
              isSelected={selectedOptions.some((selected) => selected.id === option.id)}
              onClick={() => handleOptionClick(option)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDown;