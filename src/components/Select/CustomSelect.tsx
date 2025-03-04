import React from 'react';
import Select from 'react-select';

interface Option {
  value: string;
  label: string;
}

interface MySelectProps {
  options: Option[];
  onChange?: (option: Option | null) => void;
  isDisabled?: boolean;
  value?: any
}

const CustomSelect: React.FC<MySelectProps> = ({
                                                 options,
                                                 isDisabled,
                                                 onChange,
                                                 value
                                               }) => {

  return (
        <Select
            className={"w-full justify-center cerebri-sans-light fs-14"}
            isDisabled={isDisabled}
            value={value}
            onChange={onChange}
            options={options}
            styles={{menu: base => ({...base, zIndex: 9999})}}
        />
  );
}

export default CustomSelect;
