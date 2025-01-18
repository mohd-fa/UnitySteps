import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { Input, Button } from "@rneui/themed";
import { router } from "expo-router";
import { AppState } from "react-native";
import { supabase } from "@/lib/supabase";

// Tells Supabase Auth to continuously refresh the session automatically if
// the app is in the foreground. When this is added, you will continue to receive
// `onAuthStateChange` events with the `TOKEN_REFRESHED` or `SIGNED_OUT` event
// if the user's session is terminated. This should only be registered once.
AppState.addEventListener("change", (state) => {
  if (state === "active") {
    supabase.auth.startAutoRefresh();
  } else {
    supabase.auth.stopAutoRefresh();
  }
});

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function signUpWithEmail() {
    setLoading(true);
    if (name.length <= 4) {
      Alert.alert("Name must be at least 5 characters long.");
      setLoading(false);
      return;
    }

    if (email.length <= 6) {
      Alert.alert("Email must be at least 7 characters long.");
      setLoading(false);
      return;
    }

    if (password.length <= 4) {
      Alert.alert("Password Length should be greater than 4");
      setLoading(false);
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert("Password and confirm password doesn't match!");
      setLoading(false);
      return;
    }
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) Alert.alert(error.message);
    if (!session) {
      Alert.alert("Please check your inbox for email verification!");
      setLoading(false);
      return;
    }
    router.replace("/home");
    setLoading(false);
  }

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <View style={styles.circle}>
          <Text style={styles.backArrow}>←</Text>
        </View>
      </TouchableOpacity>

      {/* Header */}
      <Text style={styles.header}>Create your</Text>
      <Text style={styles.header}>Account</Text>

      {/* Inputs */}
      <View style={styles.inputContainer}>
        <Input
          placeholder="Full Name"
          leftIcon={{ type: "font-awesome", name: "user" }}
          value={name}
          onChangeText={(text) => setName(text)}
          containerStyle={styles.input}
          inputContainerStyle={styles.inputOutlined}
        />
        <Input
          placeholder="Email"
          keyboardType="email-address"
          leftIcon={{ type: "font-awesome", name: "envelope" }}
          value={email}
          autoCapitalize="none"
          onChangeText={(text) => setEmail(text)}
          containerStyle={styles.input}
          inputContainerStyle={styles.inputOutlined}
        />
        <Input
          placeholder="Password"
          autoCapitalize="none"
          secureTextEntry={true}
          leftIcon={{ type: "font-awesome", name: "lock" }}
          value={password}
          onChangeText={(text) => setPassword(text)}
          containerStyle={styles.input}
          inputContainerStyle={styles.inputOutlined}
        />
        <Input
          placeholder="Confirm Password"
          leftIcon={{ type: "font-awesome", name: "lock" }}
          autoCapitalize="none"
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
          containerStyle={styles.input}
          inputContainerStyle={styles.inputOutlined}
        />
      </View>

      <Button
        disabled={loading}
        className="fg-primary"
        title="Register"
        buttonStyle={styles.registerButton}
        titleStyle={styles.registerButtonText}
        onPress={() => signUpWithEmail()}
      />

      {/* Sign-In Link */}
      <TouchableOpacity
        style={styles.footer}
        onPress={() => router.replace("./sign-in")}
      >
        <Text style={styles.footerText}>
          Already Have An Account?{" "}
          <Text style={styles.signInText}>Sign In</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: "#f9fafc",
    paddingHorizontal: 20,
  },
  backButton: {
    marginTop: 40,
    marginBottom: 30,
  },
  inputOutlined: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#e5e7eb",
    paddingHorizontal: 10,
  },
  circle: {
    width: 50,
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  backArrow: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  header: {
    fontSize: 37,
    fontWeight: "semibold",
    color: "#2c2c2c",
    marginTop: 20,
  },
  inputContainer: {
    marginTop: 30,
  },
  registerButton: {
    backgroundColor: "#87E64C",
    borderRadius: 10,
    paddingVertical: 15,
    marginTop: 20,
  },
  registerButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  footer: {
    marginTop: 20,
    alignItems: "center",
  },
  footerText: {
    fontSize: 14,
    color: "#7F7F7F",
  },
  signInText: {
    borderWidth: 1, // Outline border
    color: "#000",
    fontWeight: "bold",
  },
});

export default RegisterScreen;
