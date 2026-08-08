import type { CSSProperties } from "react";
import { AbsoluteFill, Easing, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

type Props = {
  issue: string;
  title: string;
  question: string;
};

const ink = "#0c0d0d";
const paper = "#eeeade";
const orange = "#ff5836";
const acid = "#d7ff35";

const clamp = { extrapolateLeft: "clamp", extrapolateRight: "clamp" } as const;

const SignalRings = ({ frame }: { frame: number }) => (
  <div style={{ position: "absolute", left: "50%", top: "50%", width: 780, height: 780, transform: `translate(-50%,-50%) rotate(${frame * 0.12}deg)` }}>
    {[0, 1, 2, 3, 4].map((index) => {
      const size = 260 + index * 125;
      const pulse = 1 + Math.sin((frame + index * 13) / 9) * 0.018;
      return <div key={index} style={{ position: "absolute", left: "50%", top: "50%", width: size, height: size, borderRadius: "50%", border: `${index === 0 ? 12 : 2}px solid ${index === 0 ? orange : ink}`, transform: `translate(-50%,-50%) scale(${pulse})`, opacity: 1 - index * 0.12 }} />;
    })}
    <div style={{ position: "absolute", left: "50%", top: "50%", width: 106, height: 106, transform: "translate(-50%,-50%)", borderRadius: "50%", background: orange, boxShadow: `0 0 0 28px ${paper}, 0 0 0 31px ${ink}` }} />
  </div>
);

const Meta = ({ dark = false }: { dark?: boolean }) => (
  <>
    <div style={{ position: "absolute", top: 54, left: 62, right: 62, display: "flex", justifyContent: "space-between", alignItems: "center", color: dark ? paper : ink, font: "700 20px 'Arial Narrow', Arial, sans-serif", letterSpacing: "0.14em" }}>
      <span style={{ display: "flex", alignItems: "center", gap: 16 }}><i style={{ width: 22, height: 22, borderRadius: "50%", background: orange, display: "block", boxShadow: `inset 0 0 0 6px ${dark ? ink : paper}` }} /> СЛОИ ОТЗВУКА</span>
      <span>FESTIVAL SIGNAL / 001</span>
    </div>
    <div style={{ position: "absolute", left: 62, right: 62, bottom: 54, display: "flex", justifyContent: "space-between", color: dark ? "#8f9794" : "#4e5351", font: "16px Consolas, monospace", letterSpacing: "0.12em" }}>
      <span>20 ГОЛОСОВ · 5 СЦЕН · 3 ВОЛНЫ</span><span>ИСКУССТВЕННОСТЬ ≠ БЕЗЖИЗНЕННОСТЬ</span>
    </div>
  </>
);

export const FestivalSignal = ({ issue, title, question }: Props) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();
  const intro = spring({ fps, frame, config: { damping: 16, mass: 0.9, stiffness: 90 } });
  const firstOut = interpolate(frame, [95, 125], [1, 0], clamp);
  const titleIn = interpolate(frame, [105, 160], [0, 1], { ...clamp, easing: Easing.out(Easing.cubic) });
  const titleOut = interpolate(frame, [285, 320], [1, 0], clamp);
  const finaleIn = interpolate(frame, [305, 355], [0, 1], { ...clamp, easing: Easing.out(Easing.cubic) });
  const progress = interpolate(frame, [0, durationInFrames - 1], [0, 100], clamp);
  const scan = (frame * 9) % 1080;

  return (
    <AbsoluteFill style={{ background: frame < 305 ? paper : ink, color: frame < 305 ? ink : paper, overflow: "hidden", fontFamily: "Arial, Helvetica, sans-serif" }}>
      <div style={{ position: "absolute", inset: 0, opacity: frame < 305 ? 0.07 : 0.12, backgroundImage: "repeating-linear-gradient(90deg,transparent 0,transparent 119px,currentColor 120px),repeating-linear-gradient(0deg,transparent 0,transparent 119px,currentColor 120px)" }} />
      <div style={{ position: "absolute", left: 0, right: 0, top: scan, height: 3, background: frame < 305 ? orange : acid, opacity: 0.5, boxShadow: `0 0 28px ${frame < 305 ? orange : acid}` }} />

      {frame < 135 && (
        <div style={{ position: "absolute", inset: 0, opacity: firstOut, transform: `scale(${0.86 + intro * 0.14})` }}>
          <SignalRings frame={frame} />
          <div style={{ position: "absolute", left: 62, bottom: 130, fontSize: 31, maxWidth: 520, lineHeight: 1.08, letterSpacing: "-0.035em" }}>МУЗЫКАЛЬНАЯ ВСЕЛЕННАЯ<br />О РАЗНЫХ СПОСОБАХ БЫТЬ ЖИВЫМ</div>
        </div>
      )}

      {frame >= 95 && frame < 330 && (
        <div style={{ position: "absolute", inset: 0, opacity: titleIn * titleOut }}>
          <Meta />
          <div style={{ position: "absolute", left: 55, right: 55, top: 190 }}>
            <div style={{ fontSize: 38, lineHeight: 1, marginBottom: 25 }}>Музыкальная вселенная о разных способах быть живым</div>
            <div style={{ fontSize: 240, fontWeight: 950, letterSpacing: "-0.085em", lineHeight: 0.7, transform: `translateX(${(1 - titleIn) * -180}px)` }}>СЛОИ</div>
            <div style={{ fontSize: 232, fontWeight: 950, letterSpacing: "-0.08em", lineHeight: 0.82, color: "transparent", WebkitTextStroke: `4px ${ink}`, transform: `translateX(${(1 - titleIn) * 220}px)` }}>ОТЗВУКА</div>
          </div>
          <div style={{ position: "absolute", right: 90, bottom: 145, width: 250, height: 250, borderRadius: "50%", background: orange, display: "grid", placeContent: "center", textAlign: "center", transform: `rotate(${frame * 0.4}deg)` }}><strong style={{ fontSize: 100, lineHeight: 0.75 }}>20</strong><span style={{ font: "16px Consolas, monospace", letterSpacing: "0.2em" }}>ЧАСТОТ</span></div>
        </div>
      )}

      {frame >= 290 && (
        <div style={{ position: "absolute", inset: 0, opacity: finaleIn }}>
          <Meta dark />
          {[0, 1, 2].map((index) => <div key={index} style={{ position: "absolute", width: 560 + index * 240, height: 560 + index * 240, border: `2px solid ${index === 1 ? orange : "#404645"}`, borderRadius: "50%", right: -160 - index * 120, top: 260 - index * 120, transform: `rotate(${frame * (index % 2 ? -0.15 : 0.1)}deg)` }}><i style={{ position: "absolute", left: "50%", top: -10, width: 20, height: 20, borderRadius: "50%", background: index === 1 ? acid : orange }} /></div>)}
          <div style={{ position: "absolute", left: 62, top: 190 }}>
            <span style={{ color: acid, font: "24px Consolas, monospace", letterSpacing: "0.18em" }}>ЖИВОЙ СБОЙ {issue}</span>
            <h1 style={{ fontSize: 178, lineHeight: 0.78, letterSpacing: "-0.08em", margin: "42px 0 58px", maxWidth: 1200 }}>{title}</h1>
            <p style={{ fontSize: 38, letterSpacing: "-0.025em", margin: 0 }}>{question}</p>
          </div>
        </div>
      )}

      <div style={{ position: "absolute", left: 0, bottom: 0, width: `${progress}%`, height: 10, background: frame < 305 ? orange : acid }} />
    </AbsoluteFill>
  );
};

export const festivalSignalStyle: CSSProperties = { background: ink, color: paper };
