import CssBaseline from '@mui/material/CssBaseline';
import AppTheme from '../shared-theme/AppTheme';
import AppAppBar from './components/AppAppBar';
import Hero from './components/Hero';
import LogoCollection from './components/LogoCollection';
import Features from './components/Features';
import Footer from './components/Footer';
import { useEffect } from 'react';
import { useColorScheme } from '@mui/material/styles';

// Function to force dark mode
function ForceDarkMode() {
  const { setMode } = useColorScheme();
  
  useEffect(() => {
    setMode('dark');
  }, [setMode]);
  
  return null;
}

export default function MarketingPage(props: { disableCustomTheme?: boolean }) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <ForceDarkMode />

      <AppAppBar />
      <Hero />
      <div>
        <LogoCollection />
        <Features />
        <Footer />
      </div>
    </AppTheme>
  );
}
