import React from 'react';
import { PageContentWrapperProps } from './types';
import { styled } from '@mui/material';

const StyledContainer = styled('div')`
  section {
    padding: 1.25rem 0;

    hr {
      padding-bottom: 1.25rem;
    }
  }
`;

const PageContentWrapper = ({ children, isPost }: PageContentWrapperProps) => {
  return (
    <StyledContainer className="my-10 px-5 mx-auto">{children}</StyledContainer>
  );
};

export default PageContentWrapper;
