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
  flex: 1,
  marginLeft: 52,
  marginTop: descriptionDisable ? 6 : 16,
});

export default {
  staticContainer: {
    flex: 1,
    flexDirection: "row",
  },
  staticContainerGlue: {
    flex: 1,
    marginTop: 8,
    width: "90%",
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 8,
  },
  headerContainer: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  textContainer: {
    width: "85%",
    flexDirection: "column",
  },
  titleTextStyle: {
    left: 20,
    width: "90%",
    marginTop: 3,
    fontSize: 14,
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
    left: 52,
    height: 50,
    width: 125,
    bottom: 24,
    marginLeft: "auto",
  },
  statusTextStyle: {
    color: "#fff",
    fontWeight: "bold",
  },
  topButtonStyle: {
    width: 45,
    height: 30,
    alignItems: "center",
    marginLeft: "auto",
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
