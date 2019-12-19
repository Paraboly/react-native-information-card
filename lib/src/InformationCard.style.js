export const container = (
  height,
  width,
  borderRadius,
  backgroundColor,
  borderLeftWidth,
  borderColor
) => ({
  width,
  height,
  borderColor,
  borderRadius,
  backgroundColor,
  borderLeftWidth
});

export const _shadowStyle = shadowColor => ({
  shadowColor,
  shadowRadius: 10,
  shadowOpacity: 0.1,
  shadowOffset: {
    width: 0,
    height: 5
  }
});

export const _statusStyle = backgroundColor => ({
  backgroundColor,
  paddingTop: 5,
  paddingLeft: 12,
  paddingRight: 12,
  borderRadius: 10,
  paddingBottom: 5,
  alignItems: "center",
  justifyContent: "center"
});

export const _footerContainer = descriptionDisable => ({
  marginTop: descriptionDisable ? 6 : 16,
  marginLeft: 52
});

export default {
  staticContainer: {
    flexDirection: "row"
  },
  staticContainerGlue: {
    marginTop: 8,
    marginBottom: 8,
    marginLeft: 16,
    marginRight: 16,
    width: "90%"
  },
  textContainer: {
    width: "85%",
    flexDirection: "column"
  },
  headerContainer: {
    alignItems: "center",
    flexDirection: "row"
  },
  imageStyle: {
    width: 30,
    height: 30,
    top: 20
  },
  titleTextStyle: {
    fontSize: 14,
    marginTop: 3,
    left: 20,
    color: "#757575",
    fontWeight: "700"
  },
  descTextStyle: {
    left: 20,
    fontSize: 12,
    marginTop: 3,
    color: "#ababab"
  },
  dateContainer: {
    flexDirection: "column"
  },
  dateTitleTextStyle: {
    fontSize: 11,
    color: "#757575"
  },
  dateTextStyle: {
    fontSize: 11,
    color: "#757575",
    fontWeight: "700"
  },
  statusContainer: {
    bottom: 0,
    right: -12,
    position: "absolute"
  },
  statusTextStyle: {
    color: "#fff",
    fontWeight: "bold"
  }
};
