import React from "react";
import PropTypes from "prop-types";
import { Text, View, Image, Dimensions, TouchableOpacity } from "react-native";
import Androw from "react-native-androw";
import Icon from "react-native-dynamic-vector-icons";
import styles, {
  container,
  _shadowStyle,
  _statusStyle,
  _footerContainer,
} from "./InformationCard.style";

const { width: ScreenWidth } = Dimensions.get("window");

const InformationCard = (props) => {
  const {
    width,
    title,
    height,
    source,
    onPress,
    iconName,
    iconType,
    dateText,
    dateTitle,
    iconColor,
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
    topButtonStyle,
    statusContainer,
    borderLeftWidth,
    backgroundColor,
    statusTextStyle,
    onPressTopButton,
    disableTopButton,
    secondaryDateText,
    topButtonComponent,
    secondaryDateTitle,
    dateTitleTextStyle,
    descriptionDisable,
    firstDateDisable,
    secondaryDateDisable,
  } = props;

  return (
    <Androw style={shadowStyle || _shadowStyle(shadowColor)}>
      <View>
        <TouchableOpacity
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
          <View style={styles.staticContainer}>
            <View style={styles.staticContainerGlue}>
              <View style={styles.headerContainer}>
                <Image
                  resizeMode="cover"
                  style={imageStyle || styles.imageStyle}
                  source={source}
                />
                <View style={styles.textContainer}>
                  <Text
                    numberOfLines={1}
                    style={[
                      titleTextStyle || styles.titleTextStyle,
                      { fontFamily },
                    ]}
                  >
                    {title}
                  </Text>

                  {!descriptionDisable && (
                    <Text
                      style={[
                        descTextStyle || styles.descTextStyle,
                        { fontFamily },
                      ]}
                      numberOfLines={2}
                    >
                      {description}
                    </Text>
                  )}
                </View>
              </View>
              <View style={_footerContainer(descriptionDisable)}>
                <View style={{ flexDirection: "row" }}>
                  {!firstDateDisable && (
                    <View style={styles.secondaryDateContainer}>
                      <Text
                        style={[
                          dateTitleTextStyle || styles.dateTitleTextStyle,
                          { fontFamily },
                        ]}
                      >
                        {secondaryDateTitle}
                      </Text>
                      <Text
                        style={[
                          dateTextStyle || styles.dateTextStyle,
                          { fontFamily },
                        ]}
                      >
                        {secondaryDateText}
                      </Text>
                    </View>
                  )}
                  {!secondaryDateDisable && (
                    <View style={styles.dateContainer}>
                      <Text
                        style={[
                          dateTitleTextStyle || styles.dateTitleTextStyle,
                          { fontFamily },
                        ]}
                      >
                        {dateTitle}
                      </Text>
                      <Text
                        style={[
                          dateTextStyle || styles.dateTextStyle,
                          { fontFamily },
                        ]}
                      >
                        {dateText}
                      </Text>
                    </View>
                  )}
                </View>
                <View style={statusContainer || styles.statusContainer}>
                  <View style={statusStyle || _statusStyle(statusColor)}>
                    <Text
                      style={[
                        statusTextStyle || styles.statusTextStyle,
                        { fontFamily },
                      ]}
                    >
                      {statusText}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            {!disableTopButton && (
              <TouchableOpacity
                style={topButtonStyle || styles.topButtonStyle}
                onPress={onPressTopButton}
              >
                {topButtonComponent || (
                  <Icon
                    size={16}
                    name={iconName}
                    type={iconType}
                    color={iconColor}
                  />
                )}
              </TouchableOpacity>
            )}
          </View>
        </TouchableOpacity>
      </View>
    </Androw>
  );
};

InformationCard.propTypes = {
  title: PropTypes.string,
  dateText: PropTypes.string,
  iconColor: PropTypes.string,
  dateTitle: PropTypes.string,
  statusText: PropTypes.string,
  shadowColor: PropTypes.string,
  description: PropTypes.string,
  statusColor: PropTypes.string,
  borderRadius: PropTypes.number,
  disableTopButton: PropTypes.bool,
  backgroundColor: PropTypes.string,
  borderLeftWidth: PropTypes.number,
  descriptionDisable: PropTypes.bool,
  secondaryDateText: PropTypes.string,
  secondaryDateTitle: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  borderColor: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
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
  secondaryDateText: "01/01/2020",
  secondaryDateTitle: "Create Date",
  source: { uri: "https://image.flaticon.com/icons/png/256/2240/2240692.png" },
  description:
    "Morbi fringilla nisl vel lacus varius maximus. Etiam et mauris tortor. Sed et mauris non neque luctus tempus.",
  iconName: "navigation",
  iconColor: "#fdfdfd",
  iconType: "Feather",
};

export default InformationCard;
