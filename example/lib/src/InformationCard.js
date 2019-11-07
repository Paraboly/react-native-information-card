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
        rippleColor="#f4a012"
        rippleDuration={1000}
        rippleContainerBorderRadius={16}
        onPress={onPress}
        style={{
          height: 115,
          borderRadius: 16,
          backgroundColor: "#fff",
          width: ScreenWidth * 0.9
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              height: 115,
              marginLeft: 16,
              flexDirection: "row",
              alignItems: "center"
            }}
          >
            <Image
              style={{ height: 50, width: 50 }}
              source={require("../assets/real.png")}
            />
          </View>
          <View style={{ margin: 16, width: "70%" }}>
            <View style={{ justifyContent: "center" }}>
              <Text
                numberOfLines={1}
                style={{
                  fontSize: 16,
                  fontWeight: "700",
                  fontFamily: "JosefinSans-Regular"
                }}
              >
                Title Lorem Ipsum
              </Text>
            </View>
            <Text
              style={{ color: "#ababab", fontSize: 13, marginTop: 8 }}
              numberOfLines={2}
            >
              Morbi fringilla nisl vel lacus varius maximus. Etiam et mauris
              tortor. Sed et mauris non neque luctus tempus.
            </Text>
            <View style={{ marginTop: 8 }}>
              <View style={{ flexDirection: "column" }}>
                <Text style={{ color: "#757575", fontSize: 10 }}>
                  Bitiş Tarihi
                </Text>
                <Text
                  style={{ color: "#757575", fontSize: 11, fontWeight: "700" }}
                >
                  05/02/2020
                </Text>
              </View>

              <View style={{ position: "absolute", bottom: 0, right: -12 }}>
                <View
                  style={{
                    borderRadius: 10,
                    paddingLeft: 12,
                    paddingRight: 12,
                    paddingTop: 5,
                    paddingBottom: 5,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#f4a012"
                  }}
                >
                  <Text style={{ color: "#fff", fontWeight: "bold" }}>
                    Tamamlandı
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
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
