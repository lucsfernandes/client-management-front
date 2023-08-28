export default {
  grid: {
    container: '73.125rem',
    gutter: '2rem'
  },
  border: {
    radius: '0.25rem',
    pill: '999rem'
  },
  font: {
    family:
      "'Red Hat Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    light: 400,
    normal: 500,
    semiBold: 600,
    bold: 700,
    heavy: 900,
    sizes: {
      xsmall: '0.75rem',
      small: '0.875rem',
      medium: '1rem',
      large: '1.2rem',
      xlarge: '1.6rem',
      xxlarge: '2.5rem',
      huge: '3.25rem'
    }
  },
  icon: {
    sizes: {
      small: '16px',
      medium: '24px'
    }
  },
  colors: {
    primary: '#F82E52',
    primary10: '#FEE5E8',
    primary50: '#F82E52',
    primary60: '#C02843',
    primaryMedium: '#FA6871',
    primaryLight: '#FFC3C6',
    black: '#1A1A1A',
    neutral: '#333A44',
    neutral5: '#3D444D',
    neutral10: '#404040',
    neutral15: '#515760',
    neutral20: '#595959',
    neutral30: '#6f747c',
    neutral35: '#808080',
    neutral40: '#83888f',
    neutral50: '#979BA2',
    neutral60: '#ABAEB4',
    neutral70: '#BFBFBF',
    neutral80: '#D3D5DA',
    neutral85: '#D8D8D8',
    neutral90: '#E7E9EC',
    neutral95: '#F1F2F6',
    neutral100: '#FBFCFF',
    neutral105: '#F1F2F6',
    white: '#FFFFFF',
    green: '#87E02D',
    lightGreen: '#A7D6C2',
    darkGreen: '#239867',
    lightYellow: '#F0D3A9',
    yellow: '#FFAF18',
    darkYellow: '#DA9227',
    lightRed: '#F1B4AB',
    red: '#E73C2F',
    teal10: '#E4F4F1',
    teal50: '#4CB3A2',
    teal90: '#305F57',
    quali10: '#DEEDF9',
    quali50: '#2183D9',
    quali70: '#1D4970',
    purple10: '#F1E6F5',
    purple50: '#A256BC',
    purple90: '#5E396B',
    day10: '#FFECEA',
    day50: '#FD7F6F',
    warning: '#ffc107'
  },
  warningColors: {
    success: {
      text: '#5F9B1B',
      background: '#DAF4BD'
    },
    warning: {
      text: '#B16D0B',
      background: '#FFE5C0'
    },
    neutralWarning: {
      text: '#474D57',
      background: '#FFE5C0'
    },
    neutral: {
      text: '#474D57',
      background: '#DDDFE3'
    },
    neutral10: {
      text: '#474D57',
      background: '#F2F2F2'
    },
    border: '#333a440d'
  },
  spacings: {
    xxxsmall: '0.5rem',
    xxsmall: '0.75rem',
    xsmall: '1rem',
    small: '1.5rem',
    medium: '2rem',
    large: '2.5rem',
    xlarge: '3rem',
    xxlarge: '3.5em'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  transition: {
    effect: {
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)'
    },
    duration: {
      fast: '150ms',
      normal: '200ms',
      slow: '300ms'
    }
  }
} as const
