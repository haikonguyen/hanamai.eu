import React from 'react';
import { PageContentWrapperProps } from './types';
import {styled} from "@mui/material";

// const StyledContainer = styled('div')
//   section {
//     ${tw`py-5`}
//     hr {
//       ${tw`pb-5`}
//     }
//   }
// `;

const PageContentWrapper = ({ children, isPost }: PageContentWrapperProps) => {
  return (
    <div
      className="my-10 px-5 mx-auto"
    >
      {children}
    </div>
  );
};

export default PageContentWrapper;
