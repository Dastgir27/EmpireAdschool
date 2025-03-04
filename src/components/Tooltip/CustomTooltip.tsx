import React, {ReactNode} from 'react';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';

import {IoInformationCircle} from "react-icons/io5";

interface MyTooltipProps {
  text: string;
}

const CustomTooltip: React.FC<MyTooltipProps> = ({text}) => {
  return (
      <Tooltip title={text}>
        <IconButton>
          <IoInformationCircle size={16} color={"#2B567E"}/>
        </IconButton>
      </Tooltip>
  );
}

export default CustomTooltip;
