import { StyleSheet } from "react-native";

// themed components
import ThemedView from "../components/ThemedView";
import ThemedLogo from "../components/ThemedLogo";
import Spacer from "../components/Spacer";
import ThemedText from "../components/ThemedText";
import ThemedLink from "../components/ThemedLink";

const Home = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedLogo />
      <Spacer height={20} />

      <ThemedText style={styles.title} title={true}>
        The Number 1
      </ThemedText>

      <Spacer height={10} />
      <ThemedText>Reading List App</ThemedText>
      <Spacer />

      <ThemedLink href="/login" style={styles.link}>
        <ThemedText>Login Page</ThemedText>
      </ThemedLink>

      <ThemedLink href="/register" style={styles.link}>
        <ThemedText>Register Page</ThemedText>
      </ThemedLink>

      <ThemedLink href="/profile" style={styles.link}>
        <ThemedText>Profile Page</ThemedText>
      </ThemedLink>

      <ThemedLink href="/books" style={styles.link}>
        <ThemedText>Books Page</ThemedText>
      </ThemedLink>

      <ThemedLink href="/create" style={styles.link}>
        <ThemedText>Create Page</ThemedText>
      </ThemedLink>
    </ThemedView>
  );
};

export default Home;

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
