"use client";

export default function Page() {
  return (
    <main className="scene">
      <div className="title">
        <h1>Neon Cat Reverie</h1>
        <p>Looping 6-second dreamscape of a fluffy cat mesmerized by swirling neon lights.</p>
      </div>

      <div className="stage">
        <div className="swirl" />
        <div className="swirl swirl--alt" />
        <div className="glow-ring" />

        <div className="cat">
          <div className="cat__fur">
            <div className="cat__ear cat__ear--left" />
            <div className="cat__ear cat__ear--right" />
            <div className="cat__face">
              <div className="cat__eye cat__eye--left">
                <div className="cat__pupil" />
              </div>
              <div className="cat__eye cat__eye--right">
                <div className="cat__pupil" />
              </div>
              <div className="cat__muzzle">
                <div className="cat__nose" />
                <div className="cat__whisker cat__whisker--left" />
                <div className="cat__whisker cat__whisker--right" />
              </div>
            </div>
            <div className="cat__body" />
            <div className="cat__tail" />
            <div className="cat__paw cat__paw--left" />
            <div className="cat__paw cat__paw--right" />
          </div>
        </div>
      </div>

      <style jsx>{`
        .scene {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          padding: 6rem 1.5rem 4rem;
          background: radial-gradient(circle at top, rgba(60, 20, 100, 0.7), transparent),
            radial-gradient(circle at bottom, rgba(10, 8, 40, 0.9), #05030c);
          overflow: hidden;
        }

        .title {
          text-align: center;
          max-width: 560px;
          margin-bottom: 3rem;
        }

        .title h1 {
          margin: 0;
          font-size: clamp(2.4rem, 5vw, 3.6rem);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          background: linear-gradient(90deg, #8df8ff, #ff72df, #ffdd67);
          -webkit-background-clip: text;
          color: transparent;
        }

        .title p {
          margin-top: 1rem;
          font-size: clamp(1rem, 2vw, 1.25rem);
          color: rgba(236, 240, 255, 0.75);
        }

        .stage {
          position: relative;
          width: min(540px, 90vw);
          aspect-ratio: 1 / 1;
          border-radius: 32px;
          background: radial-gradient(circle at center, rgba(30, 14, 60, 0.65), rgba(10, 3, 18, 0.95));
          box-shadow: 0 0 60px rgba(115, 60, 255, 0.25), inset 0 0 40px rgba(255, 255, 255, 0.04);
          overflow: hidden;
        }

        .swirl {
          position: absolute;
          inset: 0;
          margin: auto;
          width: 150%;
          height: 150%;
          border-radius: 50%;
          background: conic-gradient(
            from 0deg,
            rgba(255, 114, 223, 0.22),
            rgba(157, 126, 255, 0.25),
            rgba(141, 248, 255, 0.2),
            rgba(255, 221, 103, 0.22),
            rgba(255, 114, 223, 0.22)
          );
          filter: blur(4px);
          animation: swirlSpin 6s linear infinite;
          mix-blend-mode: screen;
        }

        .swirl--alt {
          animation-direction: reverse;
          opacity: 0.7;
        }

        .glow-ring {
          position: absolute;
          inset: 20%;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(141, 248, 255, 0.28), transparent 65%);
          filter: blur(6px);
          animation: pulseGlow 6s ease-in-out infinite;
        }

        .cat {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          padding-bottom: 14%;
        }

        .cat__fur {
          position: relative;
          width: 36%;
        }

        .cat__ear {
          position: absolute;
          top: -18%;
          width: 42%;
          aspect-ratio: 1 / 1;
          background: radial-gradient(circle at 35% 35%, #fff0f5, #f4accf 45%, #9a68b6 80%);
          border-radius: 48% 52% 20% 80%;
          box-shadow: inset 0 0 12px rgba(255, 255, 255, 0.45);
        }

        .cat__ear--left {
          left: 0;
          transform: rotate(-8deg);
        }

        .cat__ear--right {
          right: 0;
          transform: scaleX(-1) rotate(-8deg);
        }

        .cat__face {
          position: relative;
          width: 100%;
          aspect-ratio: 1 / 0.88;
          border-radius: 55% 55% 48% 48%;
          background: radial-gradient(circle at 50% 30%, #fff8fd, #f5c2dc 65%, #b388d6 95%);
          box-shadow: inset 0 -12px 18px rgba(145, 80, 189, 0.35), 0 14px 24px rgba(14, 0, 32, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 18% 12% 12%;
        }

        .cat__eye {
          position: relative;
          width: 28%;
          aspect-ratio: 1 / 1.15;
          margin: 0 6%;
          border-radius: 48% 52% 60% 60%;
          background: radial-gradient(circle at 50% 35%, #fffdff, #ffe6f9 55%, #f2b8ef 100%);
          box-shadow: inset 0 -4px 10px rgba(131, 52, 169, 0.35);
          overflow: hidden;
        }

        .cat__pupil {
          position: absolute;
          top: 18%;
          left: 50%;
          transform: translateX(-50%);
          width: 34%;
          height: 66%;
          border-radius: 50%;
          background: radial-gradient(circle at 50% 30%, #34f9ff, #6738ff);
          animation: pupilGlow 6s ease-in-out infinite;
        }

        .cat__muzzle {
          position: absolute;
          bottom: 14%;
          left: 50%;
          transform: translateX(-50%);
          width: 48%;
          aspect-ratio: 1 / 0.55;
          background: radial-gradient(circle, #fff7fa, #f5c5df);
          border-radius: 48% 48% 55% 55%;
          box-shadow: inset 0 -6px 12px rgba(145, 80, 189, 0.25);
        }

        .cat__nose {
          position: absolute;
          top: 28%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 22%;
          aspect-ratio: 1 / 0.85;
          border-radius: 45% 45% 60% 60%;
          background: linear-gradient(180deg, #ff9ad2, #ff70b7);
          box-shadow: 0 2px 4px rgba(112, 34, 98, 0.35);
        }

        .cat__whisker {
          position: absolute;
          top: 52%;
          width: 45%;
          height: 2px;
          background: linear-gradient(90deg, rgba(255, 255, 255, 0.8), rgba(255, 169, 226, 0.15));
        }

        .cat__whisker--left {
          right: 90%;
        }

        .cat__whisker--right {
          left: 90%;
        }

        .cat__body {
          position: absolute;
          top: 74%;
          left: 50%;
          transform: translateX(-50%);
          width: 76%;
          aspect-ratio: 1 / 0.6;
          border-radius: 60% 60% 55% 55%;
          background: radial-gradient(circle at 50% 20%, #fff4fd, #f3bde2 60%, #a174c5 100%);
          box-shadow: inset 0 -12px 18px rgba(120, 60, 168, 0.35);
        }

        .cat__tail {
          position: absolute;
          right: -22%;
          bottom: 10%;
          width: 38%;
          aspect-ratio: 1 / 2.2;
          border-radius: 70% 70% 40% 40%;
          background: radial-gradient(circle at 40% 40%, #fff7fb, #f5c4e1 60%, #9d6fc0 95%);
          transform-origin: top left;
          animation: tailWave 6s ease-in-out infinite;
          box-shadow: inset 0 -12px 16px rgba(124, 58, 183, 0.35);
        }

        .cat__paw {
          position: absolute;
          bottom: -6%;
          width: 28%;
          aspect-ratio: 1 / 0.6;
          border-radius: 50%;
          background: radial-gradient(circle at 50% 20%, #fff6fb, #f5bddf);
          box-shadow: inset 0 -6px 12px rgba(140, 60, 180, 0.35);
        }

        .cat__paw--left {
          left: 12%;
        }

        .cat__paw--right {
          right: 12%;
        }

        @keyframes swirlSpin {
          0% {
            transform: rotate(0deg) scale(1);
            opacity: 0.8;
          }
          50% {
            transform: rotate(180deg) scale(1.05);
            opacity: 0.9;
          }
          100% {
            transform: rotate(360deg) scale(1);
            opacity: 0.8;
          }
        }

        @keyframes pulseGlow {
          0%,
          100% {
            transform: scale(0.92);
            opacity: 0.55;
          }
          50% {
            transform: scale(1.08);
            opacity: 0.85;
          }
        }

        @keyframes pupilGlow {
          0%,
          100% {
            transform: translateX(-50%) scale(1);
            box-shadow: 0 0 6px rgba(255, 247, 140, 0.6);
          }
          25% {
            transform: translate(-60%, 2%) scale(1.1);
            box-shadow: 0 0 8px rgba(141, 248, 255, 0.8);
          }
          75% {
            transform: translate(-40%, -2%) scale(1.05);
            box-shadow: 0 0 8px rgba(255, 114, 223, 0.8);
          }
        }

        @keyframes tailWave {
          0%,
          100% {
            transform: rotate(18deg) translateY(0);
          }
          50% {
            transform: rotate(28deg) translateY(-4%);
          }
        }

        @media (max-width: 640px) {
          .scene {
            padding-top: 4rem;
          }

          .title {
            margin-bottom: 2rem;
          }
        }
      `}</style>
    </main>
  );
}
