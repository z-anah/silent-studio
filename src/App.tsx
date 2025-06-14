import MarketingPage from './marketing-page/MarketingPage';
import ForcedDarkThemeProvider from './shared-theme/ForcedDarkThemeProvider';


export default function App() {
  return (
    <ForcedDarkThemeProvider>
      <div>
        <MarketingPage />
      </div>
    </ForcedDarkThemeProvider>
  );
}
