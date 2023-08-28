import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #__next {
    height: 100%;
  }

  button {
    cursor: pointer;
  }

  ol, ul {
    padding-left: 0;
  }

  p {
    margin-bottom: 0;
  }

  ${({ theme }) => css`
    body {
      font-family: ${theme.font.family};
      font-weight: ${theme.font.normal};
      background-color: ${theme.colors.neutral100};
    }

    button,
    input {
      font-family: ${theme.font.family};
    }

    .inguide-Button.yellow {
      background-color: #faaf43;
    }

    .inguide-InputText > .input > input {
      padding: 1rem 0 0.5rem 0;
      font-size: ${theme.font.sizes.small};
    }

    .inguide-Button:disabled,
    .inguide-Button.disabled {
      opacity: 1;
    }

    .inguide-Button:disabled > .btn-container,
    .inguide-Button.disabled > .btn-container {
      background-color: #dddfe3;
    }

    .inguide-Button.primary > .btn-container > .label {
      font-weight: 700;
    }

    .inguide-InputText.invalid > .input > input,
    .inguide-InputText.invalid > .input > label,
    .inguide-InputText.invalid > .feedback {
      color: ${theme.colors.red};
    }

    .inguide-Switch {
      display: flex;
      margin: 0;
    }

    .react-datepicker-popper {
      z-index: 21;
    }

    .md-chat-widget-wrapper {
      visibility: hidden;
    }

    .md-chat-widget-wrapper-show {
      visibility: unset;
    }
  `}


`

export default GlobalStyles
