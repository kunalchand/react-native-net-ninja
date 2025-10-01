import { StyleSheet, Text } from "react-native";
import { useState } from "react";

import { Colors } from "../../constants/Colors";
import { useUser } from "../../hooks/useUser";
import Spacer from "../../components/Spacer";
import ThemedText from "../../components/ThemedText";
import ThemedView from "../../components/ThemedView";
import ThemedButton from "../../components/ThemedButton";

const Profile = () => {
  const [error, setError] = useState(null);

  const { logout } = useUser();

  const handleLogout = async () => {
    setError(null);

    try {
      await logout();
    } catch (error) {
      setError(error?.message ?? "Logout Failed");
    }
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText title={true} style={styles.heading}>
        Your Email
      </ThemedText>
      <Spacer />

      <ThemedText>Time to start reading some books...</ThemedText>
      <Spacer />

      <ThemedButton onPress={handleLogout}>
        <Text style={{ color: "#f2f2f2" }}>Logout</Text>
      </ThemedButton>

      <Spacer />

      {error && <ThemedText style={styles.error}>{error}</ThemedText>}
    </ThemedView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
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
