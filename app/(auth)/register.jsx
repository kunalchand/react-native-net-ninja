import { StyleSheet } from "react-native";
import { Link } from "expo-router";

// themed components
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import Spacer from "../../components/Spacer";

const Register = () => {
  return (
    <ThemedView style={styles.container}>
      <Spacer />
      <ThemedText style={styles.title} title={true}>
        Register for an Account
      </ThemedText>

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
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    marginBottom: 30,
  },
});
