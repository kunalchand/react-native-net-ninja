import { StyleSheet, Text, View, useColorScheme } from "react-native";
import { Link } from "expo-router";

import { Colors } from "../constants/Colors";

const About = () => {
  const colorSceheme = useColorScheme();
  const theme = Colors[colorSceheme] ?? Colors.light;

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.title, { color: theme.title }]}>About Page</Text>

      <Link
        href="/"
        style={[styles.link, { color: theme.title, borderColor: theme.title }]}
      >
        Back Home
      </Link>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
  },
});
