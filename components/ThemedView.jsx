import { View, useColorScheme } from "react-native";

import { Colors } from "../constants/Colors";

const ThemedView = ({ style, ...props }) => {
  const colorSceheme = useColorScheme();
  const theme = Colors[colorSceheme] ?? Colors.light;

  return (
    <View style={[{ backgroundColor: theme.background }, style]} {...props} />
  );
};

export default ThemedView;
