import React from "react";
import PropTypes from "prop-types";
import { Text, View, Image, Dimensions } from "react-native";
import Androw from "react-native-androw";
import Ripple from "react-native-material-ripple";
import styles, {
  container,
  _shadowStyle,
  _statusStyle
} from "./InformationCard.style";

const { width: ScreenWidth } = Dimensions.get("window");

const {
  _imageStyle,
  _dateTextStyle,
  _descTextStyle,
  _titleTextStyle,
  _statusTextStyle,
  _dateTitleTextStyle,
  dateContainer,
  staticContainer,
  headerContainer,
  footerContainer,
  statusContainer,
  staticContainerGlue
} = styles;

const InformationCard = props => {
  const {
    width,
    title,
    height,
    source,
    onPress,
    dateText,
    dateTitle,
    imageStyle,
    statusText,
    fontFamily,
    shadowStyle,
    borderColor,
    shadowColor,
    statusStyle,
    statusColor,
    description,
    borderRadius,
    descTextStyle,
    dateTextStyle,
    titleTextStyle,
    borderLeftWidth,
    backgroundColor,
    statusTextStyle,
    dateTitleTextStyle,
    descriptionDisable
  } = props;

  return (
    <Androw style={shadowStyle || _shadowStyle(shadowColor)}>
      <Ripple
        onPress={onPress}
        rippleColor="#f4a012"
        rippleDuration={1000}
        rippleContainerBorderRadius={16}
        style={container(
          height,
          width,
          borderRadius,
          backgroundColor,
          borderLeftWidth,
          borderColor
        )}
        {...props}
      >
        <View style={staticContainer}>
          <View style={staticContainerGlue}>
            <View style={headerContainer}>
              <Image
                resizeMode="cover"
                style={imageStyle || _imageStyle}
                source={source}
              />
              <Text numberOfLines={1} style={[titleTextStyle, { fontFamily }]}>
                {title}
              </Text>
            </View>
            {!descriptionDisable && (
              <Text style={[descTextStyle, { fontFamily }]} numberOfLines={2}>
                {description}
              </Text>
            )}
            <View style={footerContainer}>
              <View style={dateContainer}>
                <Text style={[dateTitleTextStyle, { fontFamily }]}>
                  {dateTitle}
                </Text>
                <Text style={[dateTextStyle, { fontFamily }]}>{dateText}</Text>
              </View>

              <View style={statusContainer}>
                <View style={statusStyle || _statusStyle(statusColor)}>
                  <Text style={[statusTextStyle, { fontFamily }]}>
                    {statusText}
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
  title: PropTypes.string,
  dateText: PropTypes.string,
  dateTitle: PropTypes.string,
  statusText: PropTypes.string,
  shadowColor: PropTypes.string,
  description: PropTypes.string,
  statusColor: PropTypes.string,
  borderRadius: PropTypes.number,
  backgroundColor: PropTypes.string,
  borderLeftWidth: PropTypes.number,
  descriptionDisable: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  borderColor: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

InformationCard.defaultProps = {
  height: 115,
  borderRadius: 16,
  borderLeftWidth: 3,
  shadowColor: "#000",
  dateText: "05/02/2020",
  dateTitle: "Deadline",
  borderColor: "#4da6ea",
  statusColor: "#f4a012",
  backgroundColor: "#fff",
  width: ScreenWidth * 0.9,
  statusText: "In Progress",
  descriptionDisable: false,
  title: "Title Lorem Ipsum",
  descTextStyle: _descTextStyle,
  dateTextStyle: _dateTextStyle,
  titleTextStyle: _titleTextStyle,
  statusTextStyle: _statusTextStyle,
  source: { uri: "https://image.flaticon.com/icons/png/256/2240/2240692.png" },
  dateTitleTextStyle: _dateTitleTextStyle,
  description:
    "Morbi fringilla nisl vel lacus varius maximus. Etiam et mauris tortor. Sed et mauris non neque luctus tempus."
};

export default InformationCard;
