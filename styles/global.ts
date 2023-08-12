import { css } from '@emotion/react';
import { useTheme } from '@mui/styles';
import { CustomTheme } from '@mui/material/styles';

const useGlobalStyle = () => {
  const theme: CustomTheme = useTheme();
  const { palette } = theme || {};

  return css`
    html,
    body {
      height: 100%;
    }

    body {
      color: ${palette.text.primary};
      font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
      background-color: ${palette.background.default};
      outline: none;
      overflow-wrap: break-word;
      word-wrap: break-word;
      display: flex;
      flex-direction: column;
    }

    #__next {
      display: flex;
      flex-direction: column;
      height: 100%;
    }
    

    a:-webkit-any-link {
      text-decoration: none;
    }
  `;
};

export default useGlobalStyle;
