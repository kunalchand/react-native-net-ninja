import { StyleSheet, Text } from "react-native";
import { Link } from "expo-router";

// themed components
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import ThemedButton from "../../components/ThemedButton";
import Spacer from "../../components/Spacer";

const Register = () => {
  const handleRegister = () => {
    console.log("register clicked");
  };

  return (
    <ThemedView style={styles.container}>
      <Spacer />
      <ThemedText style={styles.title} title={true}>
        Register for an Account
      </ThemedText>

      <ThemedButton onPress={handleRegister}>
        <Text style={{ color: "#f2f2f2" }}>Register</Text>
      </ThemedButton>

      <Spacer height={100} />
      <Link href="/login" style={styles.link}>
        <ThemedText style={{ textAlign: "center" }}>Login instead</ThemedText>
      </Link>
    </ThemedView>
  );
};

export default Register;

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
});
