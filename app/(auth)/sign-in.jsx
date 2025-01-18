import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Input, Button } from "@rneui/themed";
import { router } from "expo-router";
import { AppState } from "react-native";
import { Alert } from "react-native";
import { supabase } from "@/lib/supabase";

AppState.addEventListener("change", (state) => {
  if (state === "active") {
    supabase.auth.startAutoRefresh();
  } else {
    supabase.auth.stopAutoRefresh();
  }
});
const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function signInWithEmail() {
    setLoading(true);
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

    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      Alert.alert(error.message);
      setLoading(false);
      return;
    }
    setLoading(false);
    router.replace("/home");
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
      <Text style={styles.header}>Login your</Text>
      <Text style={styles.header}>Account</Text>

      {/* Inputs */}
      <View style={styles.inputContainer}>
        <Input
          placeholder="Email"
          leftIcon={{ type: "font-awesome", name: "envelope" }}
          value={email}
          autoCapitalize="none"
          keyboardType="email-address"
          onChangeText={(text) => setEmail(text)}
          containerStyle={styles.input}
          inputContainerStyle={styles.inputOutlined}
        />
        <Input
          placeholder="Password"
          secureTextEntry={true}
          autoCapitalize="none"
          leftIcon={{ type: "font-awesome", name: "lock" }}
          value={password}
          onChangeText={(text) => setPassword(text)}
          containerStyle={styles.input}
          inputContainerStyle={styles.inputOutlined}
        />
      </View>

      <Button
        className="fg-primary"
        title="Login"
        disabled={loading}
        buttonStyle={styles.registerButton}
        titleStyle={styles.registerButtonText}
        onPress={() => signInWithEmail()}
      />

      {/* Sign-In Link */}
      <TouchableOpacity
        style={styles.footer}
        onPress={() => router.replace("./sign-up")}
      >
        <Text style={styles.footerText}>
          Don't have an account <Text style={styles.signInText}>Sign Up</Text>
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

export default LoginScreen;
