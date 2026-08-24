const theme = {
  colors: {
    primary: '#5B8C5A',
    secondary: '#8FB996',
    accent: '#D4A574',
    background: '#F7F6F2',
    backgroundAlt: '#EEF2E6',
    dark: '#1A2E1A',
    darkMuted: '#3D5A3D',
    white: '#FFFFFF',
    glass: 'rgba(255, 255, 255, 0.65)',
    glassBorder: 'rgba(255, 255, 255, 0.3)',
  },
  gradients: {
    hero: 'linear-gradient(135deg, #F7F6F2 0%, #E8EDDE 50%, #D5DFC8 100%)',
    button: 'linear-gradient(135deg, #5B8C5A, #8FB996)',
    sectionAlt: 'linear-gradient(180deg, #FFFFFF 0%, #EEF2E6 100%)',
    text: 'linear-gradient(135deg, #5B8C5A, #D4A574)',
  },
  glass: {
    background: 'rgba(255, 255, 255, 0.65)',
    backdropFilter: 'blur(12px)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
  },
} as const;

export default theme;
