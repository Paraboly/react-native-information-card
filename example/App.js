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
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      >
        <View style={{ marginTop: 12 }}>
          <InformationCard />
        </View>
        <View style={{ marginTop: 12 }}>
          <InformationCard />
        </View>
        <View style={{ marginTop: 12 }}>
          <InformationCard />
        </View>
        <View style={{ marginTop: 12 }}>
          <InformationCard />
        </View>
        <View style={{ marginTop: 12 }}>
          <InformationCard />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default App;
