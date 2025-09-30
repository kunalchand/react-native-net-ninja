import { StyleSheet, Text } from "react-native";
import { Link } from "expo-router";

import { Colors } from "../../constants/Colors";
// themed components
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import ThemedButton from "../../components/ThemedButton";
import Spacer from "../../components/Spacer";

const Login = () => {
  const handleLogin = () => {
    console.log("login clicked");
  };

  return (
    <ThemedView style={styles.container}>
      <Spacer />
      <ThemedText style={styles.title} title={true}>
        Login to Your Account
      </ThemedText>

      <ThemedButton onPress={handleLogin}>
        <Text style={{ color: "#f2f2f2" }}>Login</Text>
      </ThemedButton>

      <Spacer height={100} />
      <Link href="/register" style={styles.link}>
        <ThemedText style={{ textAlign: "center" }}>
          Register instead
        </ThemedText>
      </Link>
    </ThemedView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    marginBottom: 30,
  },
  btn: {
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 5,
  },
  btnPressed: {
    opacity: 0.8,
  },
});
