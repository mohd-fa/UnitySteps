import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Input, Button } from "@rneui/themed";
import { router } from "expo-router";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton}>
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
          onChangeText={(text) => setEmail(text)}
          containerStyle={styles.input}
          inputContainerStyle={styles.inputOutlined}
        />
        <Input
          placeholder="Password"
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
        buttonStyle={styles.registerButton}
        titleStyle={styles.registerButtonText}
        onPress={() => console.log("Login pressed!")}
      />

      {/* Sign-In Link */}
      <TouchableOpacity
        style={styles.footer}
        onPress={() => router.push("./sign-up")}
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
    color: "#2c2c2c",
  },
  signInText: {
    borderWidth: 1, // Outline border
    color: "#000",
    fontWeight: "bold",
  },
});

export default LoginScreen;
