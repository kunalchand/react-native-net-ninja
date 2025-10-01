import { Stack } from "expo-router";
import { StyleSheet, useColorScheme } from "react-native";
import { StatusBar } from "expo-status-bar";

import { Colors } from "../constants/Colors";
import { UserProvider } from "../contexts/UserContext";

const RootLayout = () => {
  const colorSceheme = useColorScheme();
  const theme = Colors[colorSceheme] ?? Colors.light;

  return (
    <UserProvider>
      <StatusBar value="auto" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: theme.navBackground },
          headerTintColor: theme.title,
        }}
      >
        <Stack.Screen name="index" options={{ title: "Home" }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(dashboard)" options={{ headerShown: false }} />
      </Stack>
    </UserProvider>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
