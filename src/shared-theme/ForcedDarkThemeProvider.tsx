import * as React from 'react';
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
import AppTheme from './AppTheme';

interface ForcedDarkThemeProviderProps {
  children: React.ReactNode;
}

export default function ForcedDarkThemeProvider({ children }: ForcedDarkThemeProviderProps) {
  return (
    <CssVarsProvider defaultMode="dark" disableTransitionOnChange modeStorageKey="mui-mode">
      <AppTheme>{children}</AppTheme>
    </CssVarsProvider>
  );
}
