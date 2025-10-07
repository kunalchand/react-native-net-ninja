import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useState } from "react";

import { Colors } from "../../constants/Colors";
import { useUser } from "../../hooks/useUser";
// themed components
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import ThemedButton from "../../components/ThemedButton";
import Spacer from "../../components/Spacer";
import ThemedTextInput from "../../components/ThemedTextInput";
import ThemedLink from "../../components/ThemedLink";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const { login, loginWithOAuth } = useUser();

  const handleLogin = async () => {
    setError(null);

    try {
      await login(email, password);
    } catch (error) {
      setError(error?.message ?? "Login Failed");
    }
  };

  const handleOAuthLogin = async ({ provider }) => {
    setError(null);

    try {
      await loginWithOAuth(provider);
    } catch (error) {
      setError(error?.message ?? `OAuth ${provider} Login Failed`);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ThemedView style={styles.container}>
        <Spacer />
        <ThemedText style={styles.title} title={true}>
          Login to Your Account
        </ThemedText>

        <ThemedTextInput
          style={{ width: "80%", marginBottom: 20 }}
          placeholder="Email"
          keyboardType="email-address"
          onChangeText={setEmail}
          value={email}
        />

        <ThemedTextInput
          style={{ width: "80%", marginBottom: 20 }}
          placeholder="Password"
          onChangeText={setPassword}
          value={password}
          secureTextEntry={true}
        />

        <ThemedButton onPress={handleLogin}>
          <Text style={{ color: "#f2f2f2" }}>Login</Text>
        </ThemedButton>

        <Spacer />

        <ThemedButton
          onPress={() => handleOAuthLogin("google")}
          style={{ backgroundColor: "#2f5ec4" }}
        >
          <Text style={{ color: "#f2f2f2" }}>Sign in with Google</Text>
        </ThemedButton>

        <Spacer />

        {error && <ThemedText style={styles.error}>{error}</ThemedText>}

        <Spacer height={100} />
        <ThemedLink href="/register" style={styles.link}>
          <ThemedText style={{ textAlign: "center" }}>
            Register instead
          </ThemedText>
        </ThemedLink>
      </ThemedView>
    </TouchableWithoutFeedback>
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
  error: {
    color: Colors.warning,
    padding: 10,
    backgroundColor: "#f5c1c8",
    borderColor: Colors.warning,
    borderWidth: 1,
    borderRadius: 6,
    marginHorizontal: 10,
  },
});
