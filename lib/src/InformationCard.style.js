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
  headerContainer: {
    alignItems: "center",
    flexDirection: "row"
  },
  _imageStyle: {
    width: 30,
    height: 30
  },
  _titleTextStyle: {
    fontSize: 14,
    marginTop: 3,
    marginLeft: 12,
    color: "#757575",
    fontWeight: "600"
  },
  _descTextStyle: {
    fontSize: 12,
    marginTop: 3,
    color: "#ababab"
  },
  footerContainer: {
    marginTop: 6
  },
  dateContainer: {
    flexDirection: "column"
  },
  _dateTitleTextStyle: {
    fontSize: 11,
    color: "#757575"
  },
  _dateTextStyle: {
    fontSize: 11,
    color: "#757575",
    fontWeight: "700"
  },
  statusContainer: {
    bottom: -4,
    right: -12,
    position: "absolute"
  },
  _statusTextStyle: {
    color: "#fff",
    fontWeight: "bold"
  }
};