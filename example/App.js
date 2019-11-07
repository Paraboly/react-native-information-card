import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar
} from "react-native";

import InformationCard from "./lib/src/InformationCard";

const App = () => {
  return (
    <View>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <InformationCard />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default App;
