import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Stack, useRouter, usePathname } from 'expo-router';
import { useColorScheme } from '@/hooks/useColorScheme';
import { ThemeProvider, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import Icon from 'react-native-vector-icons/Ionicons'; // Certifique-se de instalar react-native-vector-icons

export default function RootLayout() {
  const router = useRouter();
  const pathname = usePathname(); // Obtém o caminho da rota atual
  const colorScheme = useColorScheme();
  const navItems = [
    { name: 'home', route: '/', iconOutline: 'home-outline', iconFilled: 'home' },
    { name: 'search', route: '/Reviews', iconOutline: 'search-outline', iconFilled: 'search' },
    { name: 'notifications', route: '/QrCodeScanner', iconOutline: 'notifications-outline', iconFilled: 'notifications' }, 
    { name: 'settings', route: '/Receitas', iconOutline: 'settings-outline', iconFilled: 'settings' },
    { name: 'profile', route: '/Onboarding', iconOutline: 'person-outline', iconFilled: 'person' },
  ];

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <View style={{ flex: 1, backgroundColor: colorScheme === 'dark' ? '#222' : '#fff' }}>
        {/* Main Content */}
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="Reviews" options={{ headerShown: false }} />
          <Stack.Screen name="Reviews_Publicas" options={{ headerShown: false }} />
          <Stack.Screen name="Perfil" options={{ headerShown: false }} />
          <Stack.Screen name="QrCodeScanner" options={{ headerShown: false }} />
          <Stack.Screen name="Receitas" options={{ headerShown: false }} />
          <Stack.Screen name="Onboarding" options={{ headerShown: false }} />
          <Stack.Screen name="Login" options={{ headerShown: false }} />
          <Stack.Screen name="Register" options={{ headerShown: false }} />
          <Stack.Screen name="Write_Review" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>

        {/* Navbar */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            paddingVertical: 18,
            backgroundColor: '#1d839d', // Cor azul
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            borderTopWidth: 1,
            borderTopColor: '#444',
          }}
        >
          {/* Ícones da Navbar */}
          {navItems.map((item) => (
            <TouchableOpacity key={item.name} onPress={() => router.push(item.route)}>
              <Icon
                name={pathname === item.route ? item.iconFilled : item.iconOutline} // Ícone preenchido se ativo
                size={32}
                color={pathname === item.route ? '#FFD700' : 'white'} // Cor dourada se ativo
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
