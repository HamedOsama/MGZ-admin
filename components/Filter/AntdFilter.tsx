import React, { useState } from 'react';
import { Select, Space } from 'antd';

const { Option } = Select;

interface FilterProps {
  name: string
  options: any[]
  selected: any
  setSelected: any
  style?: string
}
const AntdFilter = ({ name, options, style, selected, setSelected }: FilterProps) => {


  return (

    <Space wrap>
      <div
        className='flex gap-2 items-center'
      >
        <p className='text-black text-base py-2'>{name}</p>
        <Select
          className='w-44 sm:w-56 duration-300'
          value={selected}
          onChange={(value) => setSelected(
            options.find((el) => el.value === value)
          )}
        >
          {options.map((option, index) => (
            <Option
              key={option.value}
              value={option.value}
            >
              {option.value}
            </Option>
          ))}
        </Select>
      </div>
    </Space>
  );
};

export default AntdFilter;