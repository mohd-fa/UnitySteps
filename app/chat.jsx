import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import geminiCall from "../lib/genAiCall";

export default function ChatScreen({ }) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const sendPrompt = async () => {
    if (!message.trim()) return;
    setLoading(true);
    setMessages((prevMessages) => [
      ...prevMessages,
      { role: "user", content: message },
    ]);
    setMessage("");
    try {
      const res = await geminiCall("encourager", message);
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: "system", content: res },
      ]);
    } catch (e) {
      Alert.alert("Some thing wrong with AI Assistant communication");
    } finally {
    }
    setLoading(false);
  };

  useEffect(() => {
    console.log(messages); // Logs updated messages after state changes
  }, [messages]);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.dismissTo("/home")}
        >
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
        <Image
          source={{ uri: "https://avatar.iran.liara.run/public/37" }} // Replace with user avatar URL
          style={styles.avatar}
        />
        <Text style={styles.userName}>Zyro</Text>
      </View>

      {/* Chat Messages */}
      <ScrollView style={styles.chatContainer}>
        {messages.map((msg, idx) => (
          <View
            key={idx}
            style={[
              styles.messageBubble,
              msg.role === "user" ? styles.sentMessage : styles.receivedMessage,
            ]}
          >
            <Text
              style={[
                msg.role === "user"
                  ? styles.userMessageText
                  : styles.robotMessageText,
              ]}
            >
              {msg.content}
            </Text>
          </View>
        ))}
      </ScrollView>

      {/* Input Box */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter Message to send"
            value={message}
            onChangeText={(text) => setMessage(text)}
          />
          <TouchableOpacity
            disabled={loading}
            style={styles.sendButton}
            onPress={() => sendPrompt()}
          >
            <Text style={styles.sendButtonText}>➤</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  backButton: {
    marginRight: 16,
  },
  backArrow: {
    fontSize: 20,
    color: "#000",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8,
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  chatContainer: {
    flex: 1,
    paddingHorizontal: 16,
    marginVertical: 10,
  },
  messageBubble: {
    padding: 10,
    borderRadius: 12,
    marginVertical: 6,
    maxWidth: "75%",
  },
  receivedMessage: {
    paddingBottom: -2,
    alignSelf: "flex-start",
    backgroundColor: "#E0E0E0",
  },
  sentMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#004D47",
  },
  userMessageText: {
    color: "#fff",
  },
  robotMessageText: {
    color: "black",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  input: {
    flex: 1,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#F0F0F0",
    paddingHorizontal: 16,
    marginRight: 10,
  },
  sendButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#32CD32",
    alignItems: "center",
    justifyContent: "center",
  },
  sendButtonText: {
    color: "#fff",
    fontSize: 18,
  },
});
