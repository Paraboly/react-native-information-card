import React from "react";
import { View, StatusBar, SafeAreaView } from "react-native";
import InformationCard from "@paraboly/react-native-information-card";

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      >
        <View style={{ marginTop: 12 }}>
          <InformationCard
            fontFamily="Montserrat-Regular"
            statusText="Waiting"
            statusColor="#4287f5"
          />
        </View>
        <View style={{ marginTop: 12 }}>
          <InformationCard
            height={85}
            descriptionDisable
            statusColor="purple"
            borderColor="blue"
            statusText="Suspended"
          />
        </View>
        <View style={{ marginTop: 12 }}>
          <InformationCard />
        </View>
        <View style={{ marginTop: 12 }}>
          <InformationCard
            height={85}
            descriptionDisable
            statusColor="green"
            statusText="Active"
            borderColor="orange"
          />
        </View>
        <View style={{ marginTop: 12 }}>
          <InformationCard
            statusColor="#f54242"
            statusText="Urgent"
            borderColor="#f54242"
            firstDateDisable
            secondaryDateDisable
            statusContainer={{ right: -12, position: "absolute" }}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default App;
