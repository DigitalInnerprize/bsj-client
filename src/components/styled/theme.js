import { TRANSITION } from '../../constants/general.js';
const { LG_DURATION, SM_DURATION, MD_DURATION } = TRANSITION;

const theme = {
    breakpoints: {
        xs: 420,
        sm: 768,
        md: 992,
        lg: 1200,
        xl: 1400,
        xxl: 1900,
    },
    colors: {
        gray2: '#787878',
        gray4: '#4a4a4a',
        gray7: '#76797e',
        gray9: '#9b9b9b',
        grayBg: '#efeff3',
        grayFade: '#e5e8ed',
        grayFadeAlt: '#e0dfe4',
        grayFadeAltLightest: '#f2f2f2',
        grayb: '#bdccd6',
        graybAlt: '#b3b3b9',
        premium: '#376afb',
        premiumHover: '#2c55c7',
        primary: '#0033a0',
        white: '#fff',
        whiteAlt: '#f9f9f9',
        black: '#222222',
        lightBlue: '#5fcff8',
        maroon: '#d8357b',
        yellow: '#f4d330',
    },
    hardCodedSizes: {
        buttonHeight: 50,
        buttonMinWidth: 168,
        containedInnerPaperContentHeight: 282,
        minPaperHeight: 600,
    },
    spacing: {
        alternate: {
            sm: '.8em',
            md: '1em',
        },
        fixed: {
            md: '17px',
            accordionIndentation: '42px',
            accordionIndentationAlt: '48px',
            headerHeight: '72px',
        },
        horizontal: {
            0: 0,
            auto: '0 auto',
            xs: '.3em',
            sm: '.6em',
            md: '1.2em',
            lg: '1.8em',
            lg2: '2.8em',
            xl: '4.6em',
            xlAlt: '6.2em',
            xxl: '8em',
        },
        vertical: {
            0: 0,
            xs: '.2em',
            sm: '.45em',
            sm2: '.8em',
            md: '1.2em',
            lg: '2em',
            lg2: '3em',
            xl: '4em',
            xlAlt: '6em',
            xxl: '8em',
        },
    },
    transition: {
        easing: {
            default: 'ease-out',
            sCurve: 'cubic-bezier(0.3, 0.8, 0.1, 0.95)',
        },
        duration: {
            xs: '0.2s',
            sm: `${SM_DURATION}ms`,
            md: `${MD_DURATION}ms`,
            lg: `${LG_DURATION}ms`,
            xl: '1.4s',
            xxl: '1.8s',
            xxxl: '2.6s',
            xxxxl: '3.4s',
        },
    },
    type: {
        family: {
            default: 'Karla',
            heading: 'Rubik',
        },
        letterSpacing: {
            narrow: '-0.03em',
            regular: '0.01em',
            wide: '0.015em',
            extraWide: '0.16em',
        },
        lineHeight: {
            compressed: 1.4,
            compressedAlt: 1.5,
            regular: 1.6,
            extended: 3.8,
        },
        multipliers: {
            body: {
                sm: 1,
                md: 1.05,
                lg: 1.08,
                xl: 1.1,
                xxl: 1.12,
            },
            heading: {
                sm: 1.05,
                md: 1.08,
                lg: 1.1,
                xl: 1.2,
                xxl: 1.3,
            },
        },
        size: {
            h1: 45,
            h1Alt: 36, // home header
            h2: 28,
            h3: 18,
            h4: 14,
            h5: 9,
            h6: 7,
            logo: 21,
            splashLogotype: 32,
            body: 14,
            bodyAlt: 15,
            bodyLarge: 16,
            xxs: 9,
            xs: 10.5,
            sm: 12,
            md: 17,
            lg: 28,
        },
    },
    zIndex: {
        zero: 0, // ContentBackground
        one: 1,
        two: 2, // ModalUnderlay
        three: 3, // Modal
        four: 4, // InteractionsBlocker
    },
};

// wrap root App component with styled-components {ThemeProvider} and import this theme
export default theme;
