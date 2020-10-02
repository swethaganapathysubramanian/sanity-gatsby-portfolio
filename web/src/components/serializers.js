import Figure from "./custom/figure";
import Highlight from "./custom/highlight";
import Youtube from "./custom/youtube";
import HorizontalLine from "./custom/line";
import Twitter from "./custom/tweet";
import Instagram from "./custom/instagram";
import Code from "./custom/code";
import FontSans from "./custom/font-sans";
import FontSerif from "./custom/font-serif";

const serializers = {
  types: {
    figure: Figure,
    youtube: Youtube,
    line: HorizontalLine,
    tweet: Twitter,
    instagram: Instagram,
    code: Code
  },
  marks: {
    highlight: Highlight,
    fontsans: FontSans,
    fontserif: FontSerif
  }
};

export default serializers;
