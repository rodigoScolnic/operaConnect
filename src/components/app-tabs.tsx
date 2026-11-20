import { Tabs } from 'expo-router';

export default function AppTabs() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#253B5B',
        tabBarInactiveTintColor: '#8A9099',
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopColor: '#E8E9EC',
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Inicio',
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explorar',
        }}
      />
    </Tabs>
  );
}
