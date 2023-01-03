import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

function createGradient(color1: any, color2: any) {
    return `linear-gradient(to bottom, ${color1}, ${color2})`;
}

// SETUP COLORS

const GREY = {
    0: '#FFFFFF',
    100: '#F9FAFB',
    200: '#F4F6F8',
    300: '#DFE3E8',
    400: '#C4CDD5',
    500: '#9295A0',
    600: '#637381',
    700: '#454F5B',
    800: '#0E1320',
    900: '#212B36',
    500_8: alpha('#9295A0', 0.08),
    500_12: alpha('#9295A0', 0.12),
    500_16: alpha('#9295A0', 0.16),
    500_24: alpha('#9295A0', 0.24),
    500_32: alpha('#9295A0', 0.32),
    500_48: alpha('#9295A0', 0.48),
    500_56: alpha('#9295A0', 0.56),
    500_80: alpha('#9295A0', 0.8),
};
const MIDNIGHT_BLUE = {
    0: '#152B4B',
    100: '#191970',
    200: '#131846',
    300: '#181F36',
    400: '#13192A',
    500: '#13182a',
    600: '#13162e',
    700: '#0e1024',
    800: '#0D1220',
    900: '#070a12',
    500_8: alpha('#13182a', 0.08),
    500_12: alpha('#13182a', 0.12),
    500_16: alpha('#13182a', 0.16),
    500_24: alpha('#13182a', 0.24),
    500_32: alpha('#13182a', 0.32),
    500_48: alpha('#13182a', 0.48),
    500_56: alpha('#13182a', 0.56),
    500_80: alpha('#13182a', 0.8),
}
const PRIMARY = {
    lighter: MIDNIGHT_BLUE[0],
    light: MIDNIGHT_BLUE[100],
    main: MIDNIGHT_BLUE[300],
    dark: MIDNIGHT_BLUE[800],
    darker: MIDNIGHT_BLUE[900],
    contrastText: GREY[0],
};

const SECONDARY = {
    lighter: '#D6E4FF',
    light: '#84A9FF',
    main: '#3366FF',
    dark: '#1939B7',
    darker: '#091A7A',
    contrastText: '#fff',
};

const INFO = {
    lighter: '#D0F2FF',
    light: '#74CAFF',
    main: '#1890FF',
    dark: '#0C53B7',
    darker: '#04297A',
    contrastText: '#fff',
};

const SUCCESS = {
    lighter: '#E9FCD4',
    light: '#AAF27F',
    main: '#54D62C',
    dark: '#229A16',
    darker: '#08660D',
    contrastText: GREY[800],
};

const WARNING = {
    lighter: '#FFF7CD',
    light: '#FFE16A',
    main: '#FFC107',
    dark: '#B78103',
    darker: '#7A4F01',
    contrastText: GREY[800],
};

const ERROR = {
    lighter: '#FFE7D9',
    light: '#FFA48D',
    main: '#FF4842',
    dark: '#B72136',
    darker: '#7A0C2E',
    contrastText: '#fff',
};

const GRADIENTS = {
    primary: createGradient(PRIMARY.light, PRIMARY.main),
    info: createGradient(INFO.light, INFO.main),
    success: createGradient(SUCCESS.light, SUCCESS.main),
    warning: createGradient(WARNING.light, WARNING.main),
    error: createGradient(ERROR.light, ERROR.main),
};

const CHART_COLORS = {
    violet: ['#826AF9', '#9E86FF', '#D0AEFF', '#F7D2FF'],
    blue: ['#2D99FF', '#83CFFF', '#A5F3FF', '#CCFAFF'],
    green: ['#2CD9C5', '#60F1C8', '#A4F7CC', '#C0F2DC'],
    yellow: ['#FFE700', '#FFEF5A', '#FFF7AE', '#FFF3D6'],
    red: ['#FF6C40', '#FF8F6D', '#FFBD98', '#FFF2D4'],
};

const TEXT = {
    primary: GREY[800],
    secondary: GREY[600],
    disabled: GREY[500],
    subMenu: '#ACBBEE',
    subMenuActive: '#72E9FF',
    white: GREY[0],
    black: '#111111',
};

const COMMON = {
    black: '#000',
    white: '#fff',
    blue: '#4F6BC8',
    specialBlue: '#405AB0',
    activeSpecialBlue: '#284195',
    midnightBlue: '#181F36'
};

const palette = {
    common: COMMON,
    primary: { ...PRIMARY },
    secondary: { ...SECONDARY },
    info: { ...INFO },
    success: { ...SUCCESS },
    warning: { ...WARNING },
    error: { ...ERROR },
    grey: GREY,
    gradients: GRADIENTS,
    chart: CHART_COLORS,
    divider: GREY[500_24],
    text: { ...TEXT },
    // background: { paper: '#fff', default: GREY[100], neutral: GREY[200] },
    action: {
        active: GREY[600],
        hover: GREY[500_8],
        selected: GREY[500_16],
        disabled: GREY[500_80],
        disabledBackground: GREY[500_24],
        focus: GREY[500_24],
        hoverOpacity: 0.08,
        disabledOpacity: 0.48,
    },
};

export default palette;
