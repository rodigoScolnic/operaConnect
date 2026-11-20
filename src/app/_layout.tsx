import { DefaultTheme, ThemeProvider } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { Platform } from 'react-native';

import { AnimatedSplashOverlay } from '@/components/animated-icon';
import AppTabs from '@/components/app-tabs';

// Native splash handling is intentionally kept off the web path.
// The web app uses client-side rendering (web.output = "single").
if (Platform.OS !== 'web') {
  SplashScreen.preventAutoHideAsync();
}

export default function TabLayout() {
  return (
    <ThemeProvider value={DefaultTheme}>
      {Platform.OS !== 'web' && <AnimatedSplashOverlay />}
      <AppTabs />
    </ThemeProvider>
  );
}
