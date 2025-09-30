import { Stack } from "expo-router";
import { StyleSheet, useColorScheme } from "react-native";

import { Colors } from "../constants/Colors";
import { StatusBar } from "expo-status-bar";

const RootLayout = () => {
  const colorSceheme = useColorScheme();
  const theme = Colors[colorSceheme] ?? Colors.light;

  return (
    <>
      <StatusBar value="auto" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: theme.navBackground },
          headerTintColor: theme.title,
        }}
      >
        <Stack.Screen name="index" options={{ title: "Home" }} />
        <Stack.Screen name="about" options={{ title: "About" }} />
        <Stack.Screen name="contact" options={{ title: "Contact" }} />
      </Stack>
    </>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
