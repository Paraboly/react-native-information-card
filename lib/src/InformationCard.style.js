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
  borderLeftWidth,
});

export const _shadowStyle = (shadowColor) => ({
  shadowColor,
  shadowRadius: 10,
  shadowOpacity: 0.1,
  shadowOffset: {
    width: 0,
    height: 5,
  },
});

export const _statusStyle = (backgroundColor) => ({
  backgroundColor,
  paddingTop: 5,
  paddingLeft: 12,
  paddingRight: 12,
  borderRadius: 10,
  paddingBottom: 5,
  alignItems: "center",
  justifyContent: "center",
});

export const _footerContainer = (descriptionDisable) => ({
  marginTop: descriptionDisable ? 6 : 16,
  marginLeft: 52,
});

export default {
  staticContainer: {
    flexDirection: "row",
  },
  staticContainerGlue: {
    marginTop: 8,
    marginBottom: 8,
    marginLeft: 16,
    marginRight: 16,
    width: "90%",
  },
  textContainer: {
    width: "85%",
    flexDirection: "column",
  },
  headerContainer: {
    alignItems: "center",
    flexDirection: "row",
  },
  imageStyle: {
    width: 30,
    height: 30,
    top: 20,
  },
  titleTextStyle: {
    fontSize: 14,
    marginTop: 3,
    left: 20,
    color: "#757575",
    fontWeight: "700",
  },
  descTextStyle: {
    left: 20,
    fontSize: 12,
    marginTop: 3,
    color: "#ababab",
  },
  dateContainer: {
    marginLeft: 8,
    flexDirection: "column",
  },
  secondaryDateContainer: {
    flexDirection: "column",
  },
  dateTitleTextStyle: {
    fontSize: 10,
    color: "#757575",
  },
  dateTextStyle: {
    fontSize: 10,
    color: "#757575",
    fontWeight: "700",
  },
  statusContainer: {
    bottom: -5,
    right: -12,
    position: "absolute",
  },
  statusTextStyle: {
    color: "#fff",
    fontWeight: "bold",
  },

  topButtonStyle: {
    top: 0,
    right: -1,
    width: 45,
    height: 30,
    zIndex: 99,
    alignItems: "center",
    position: "absolute",
    justifyContent: "center",
    borderTopRightRadius: 16,
    backgroundColor: "#f4cb61",
    borderBottomLeftRadius: 16,
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowColor: "#757575",
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
};
