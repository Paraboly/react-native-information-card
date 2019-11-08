import React from 'react';
import {View, StatusBar, SafeAreaView} from 'react-native';
import InformationCard from '@paraboly/react-native-information-card';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView
        style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View style={{marginTop: 12}}>
          <InformationCard fontFamily="Montserrat-Regular" />
        </View>
        <View style={{marginTop: 12}}>
          <InformationCard />
        </View>
        <View style={{marginTop: 12}}>
          <InformationCard />
        </View>
        <View style={{marginTop: 12}}>
          <InformationCard />
        </View>
        <View style={{marginTop: 12}}>
          <InformationCard />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default App;
