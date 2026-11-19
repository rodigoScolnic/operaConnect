import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

const colors = {
  background: '#F6F1E8',
  ink: '#2D2526',
  burgundy: '#6D2638',
  gold: '#B8955A',
};

export default function RootLayout() {
  return (
    <>
      <StatusBar style="dark" backgroundColor={colors.background} />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: colors.background },
          animation: 'fade',
        }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="role-selection" />
        <Stack.Screen name="sign-in" />
        <Stack.Screen name="sign-up" />
      </Stack>
    </>
  );
}
