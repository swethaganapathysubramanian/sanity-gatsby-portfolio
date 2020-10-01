import Figure from "./custom/figure";
import Highlight from "./custom/highlight";
import Youtube from "./custom/youtube";
import HorizontalLine from "./custom/line";
import Twitter from "./custom/tweet";
import Instagram from "./custom/instagram";
const serializers = {
  types: {
    figure: Figure,
    youtube: Youtube,
    line: HorizontalLine,
    tweet: Twitter,
    instagram: Instagram
  },
  marks: {
    highlight: Highlight
  }
};

export default serializers;
