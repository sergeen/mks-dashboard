import Colors from "./Colors";

const Theme = {
  darkTheme: {
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
    chartBackgorundcolor: Colors.dark.veryDarkBlueBg,
  },
  lightTheme: {
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
    chartBackgorundcolor: Colors.primary.white,
  },
};

export default Theme;
