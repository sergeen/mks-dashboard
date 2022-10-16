import Colors from "./Colors";

const Theme = {
  darkTheme: {
    headerSubtitle: Colors.neutral.secondaryGray,
    overlay: Colors.primary.overlayBlack,
    pageBg: Colors.dark.veryDarkBlueBg,
    topBgPattern: Colors.dark.veryDarkBlueTopBgPattern,
    topModalBgPattern: Colors.dark.veryDarkBlueTopBgPattern,
    modalBg: Colors.dark.veryDarkBlueBg,
    positive: Colors.primary.limeGreen,
    negative: Colors.primary.brightRed,
    defaultText: Colors.primary.white,
    lightText: Colors.primary.white,
    chartLines: Colors.dark.desaturatedPurpleChart,
    chartMarkerFill: Colors.dark.veryDarkBlueBg,
    chartTooltipBorder: Colors.neutral.dashedGrey,
    chartTooltipBg: Colors.dark.veryDarkBlueBg,
    chartTooltipText: Colors.dark.desaturatedPurpleChart,
    chartBg: Colors.dark.veryDarkBlueBg,
    cardBg: Colors.dark.darkDesaturatedBlueCardBg,
    hoverCardBg: Colors.dark.DarkHoverCardBg,
    toggleBg: Colors.dark.toggle,
    toggleDot: Colors.dark.veryDarkBlueTopBgPattern,
    toggleText: Colors.neutral.secondaryGray,
    separator: Colors.neutral.dashedGrey,
  },
  lightTheme: {
    headerSubtitle: Colors.neutral.darkGrey,
    overlay: Colors.primary.overlayBlack,
    pageBg: Colors.primary.white,
    topBgPattern: Colors.light.veryPaleBlueTopBgPattern,
    topModalBgPattern: Colors.light.veryPaleBlueTopBgPattern,
    modalBg: Colors.primary.white,
    positive: Colors.primary.limeGreen,
    negative: Colors.primary.brightRed,
    defaultText: Colors.light.veryDarkBlueText,
    lightText: Colors.neutral.darkGrey,
    chartLines: Colors.dark.desaturatedPurpleChart,
    chartMarkerFill: Colors.primary.white,
    chartTooltipBorder: Colors.neutral.dashedGrey,
    chartTooltipBg: Colors.primary.white,
    chartTooltipText: Colors.dark.desaturatedPurpleChart,
    chartBg: Colors.primary.white,
    cardBg: Colors.neutral.mediumGrey,
    smallCardTitle: Colors.neutral.darkGrey,
    hoverCardBg: Colors.light.LightHoverCardBg,
    toggleBg: Colors.light.toggle,
    toggleDot: Colors.light.veryPaleBlueTopBgPattern,
    toggleText: Colors.neutral.darkGrey,
    separator: Colors.neutral.dashedGrey,
  },
};

export default Theme;
