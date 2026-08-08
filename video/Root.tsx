import { Composition } from "remotion";
import { FestivalSignal } from "./FestivalSignal";

export const VideoRoot = () => (
  <Composition
    id="FestivalSignal"
    component={FestivalSignal}
    durationInFrames={450}
    fps={30}
    width={1920}
    height={1080}
    defaultProps={{
      issue: "#01",
      title: "НУЛЕВАЯ ВОЛНА",
      question: "ЧТО ДЕЛАЕТ ГОЛОС ЖИВЫМ?",
    }}
  />
);
