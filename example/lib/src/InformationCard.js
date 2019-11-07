import React from "react";
import PropTypes from "prop-types";
import { Text, View, Dimensions, Image } from "react-native";
import Androw from "react-native-androw";
import Ripple from "react-native-material-ripple";
import SvgUri from "react-native-svg-uri";

const { height: ScreenHeight, width: ScreenWidth } = Dimensions.get("window");

const InformationCard = props => {
  const { onPress } = props;
  return (
    <Androw
      style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 5
        },
        shadowOpacity: 0.1,
        shadowRadius: 10
      }}
    >
      <Ripple
        rippleDuration={1000}
        rippleContainerBorderRadius={16}
        onPress={onPress}
        style={{
          height: 125,
          borderRadius: 16,
          backgroundColor: "#fff",
          width: ScreenWidth * 0.9
        }}
      >
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <SvgUri
            width="75"
            height="75"
            source={require("../assets/homer.svg")}
          />
        </View>
        <Text></Text>
      </Ripple>
    </Androw>
  );
};

InformationCard.propTypes = {
  example: PropTypes.number
};

InformationCard.defaultProps = {
  example: 5
};

export default InformationCard;
