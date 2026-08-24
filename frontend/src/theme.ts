const theme = {
  colors: {
    primary: '#2563EB',
    secondary: '#0EA5E9',
    accent: '#6366F1',
    background: '#F8FAFC',
    backgroundAlt: '#EFF6FF',
    dark: '#0F172A',
    darkMuted: '#334155',
    white: '#FFFFFF',
    glass: 'rgba(255, 255, 255, 0.65)',
    glassBorder: 'rgba(255, 255, 255, 0.3)',
  },
  gradients: {
    hero: 'linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 50%, #BFDBFE 100%)',
    button: 'linear-gradient(135deg, #2563EB, #0EA5E9)',
    sectionAlt: 'linear-gradient(180deg, #FFFFFF 0%, #EFF6FF 100%)',
    text: 'linear-gradient(135deg, #2563EB, #6366F1)',
  },
  glass: {
    background: 'rgba(255, 255, 255, 0.65)',
    backdropFilter: 'blur(12px)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
  },
} as const;

export default theme;
