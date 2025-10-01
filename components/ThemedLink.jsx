import { useColorScheme } from "react-native";
import { Link } from "expo-router";

import { Colors } from "../constants/Colors";

const ThemedLink = ({ style, title = false, ...props }) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  const textColor = title ? theme.title : theme.text;
  const borderColor = title ? theme.title : theme.text;

  return (
    <Link
      style={[{ color: textColor, borderColor: borderColor }, style]}
      {...props}
    />
  );
};

export default ThemedLink;
