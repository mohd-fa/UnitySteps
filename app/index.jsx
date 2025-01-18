import { supabase } from "@/lib/supabase";
import { Link, Redirect, router, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { SafeAreaView, Text, View } from "react-native";

export default function Index() {
  const [session, setSession] = useState(null);
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
    if (session && session.user) {
      return <Redirect href={"/home"} />;
    }
  }, []);

  return (
    <SafeAreaView>
      <View className=" items-center justify-center">
        <Text className="font-bold text-3xl">
          Edit apps/index.tsx to edit this screen.
        </Text>
        <Link href="/sign-up">
          <Text className="text-blue-500">sign-up</Text>
        </Link>
      </View>
    </SafeAreaView>
  );
}
