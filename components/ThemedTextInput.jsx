import { TextInput, useColorScheme } from "react-native";

import { Colors } from "../constants/Colors";

const ThemedTextInput = ({ style, ...props }) => {
  const colorSceheme = useColorScheme();
  const theme = Colors[colorSceheme] ?? Colors.light;

  return (
    <TextInput
      style={[
        {
          backgroundColor: theme.uiBackground,
          color: theme.text,
          padding: 20,
          borderRadius: 6,
        },
        style,
      ]}
      {...props}
    />
  );
};

export default ThemedTextInput;
