import { useState } from "react";

const electionData = [
  {
    position: "President",
    totalBallots: 413,
    rounds: [
      {
        valid: 413,
        counts: [
          { name: "LE GAREC, Axelle", votes: 238 },
          { name: "MARTIN-STEPHAN, Stanislas", votes: 87 },
          { name: "JIN, Kexin (Kodrey)", votes: 37 },
          { name: "CHAMS Angelina", votes: 27 },
          { name: "CRETU, David", votes: 24 },
        ],
        eliminated: [],
      },
    ],
    winner: "LE GAREC, Axelle",
    winType: "majority",
    finalVotes: 238,
    finalTotal: 413,
  },
  {
    position: "Vice President",
    totalBallots: 406,
    rounds: [
      {
        valid: 406,
        counts: [
          { name: "SANDBLOST, Levi", votes: 155 },
          { name: "TRASPADERNE, Asier", votes: 133 },
          { name: "ADOU, Prunelle", votes: 63 },
          { name: "SINGH, Tanu", votes: 55 },
        ],
        eliminated: ["SINGH, Tanu"],
      },
      {
        valid: 398,
        counts: [
          { name: "SANDBLOST, Levi", votes: 173 },
          { name: "TRASPADERNE, Asier", votes: 148 },
          { name: "ADOU, Prunelle", votes: 77 },
        ],
        eliminated: ["ADOU, Prunelle"],
      },
      {
        valid: 391,
        counts: [
          { name: "SANDBLOST, Levi", votes: 210 },
          { name: "TRASPADERNE, Asier", votes: 181 },
        ],
        eliminated: [],
      },
    ],
    winner: "SANDBLOST, Levi",
    winType: "majority",
    finalVotes: 210,
    finalTotal: 391,
  },
  {
    position: "Treasurer",
    totalBallots: 397,
    rounds: [
      {
        valid: 397,
        counts: [
          { name: "BERNARD, Gabin", votes: 164 },
          { name: "PICKERING–VIGNE, Sacha", votes: 102 },
          { name: "GASSMANN, Paul", votes: 63 },
          { name: "MANY, Karnaa", votes: 34 },
          { name: "RIVET, Lise", votes: 34 },
        ],
        eliminated: ["MANY, Karnaa", "RIVET, Lise"],
      },
      {
        valid: 395,
        counts: [
          { name: "BERNARD, Gabin", votes: 188 },
          { name: "PICKERING–VIGNE, Sacha", votes: 134 },
          { name: "GASSMANN, Paul", votes: 73 },
        ],
        eliminated: ["GASSMANN, Paul"],
      },
      {
        valid: 378,
        counts: [
          { name: "BERNARD, Gabin", votes: 228 },
          { name: "PICKERING–VIGNE, Sacha", votes: 150 },
        ],
        eliminated: [],
      },
    ],
    winner: "BERNARD, Gabin",
    winType: "majority",
    finalVotes: 228,
    finalTotal: 378,
  },
  {
    position: "Secretary",
    totalBallots: 407,
    rounds: [
      {
        valid: 407,
        counts: [
          { name: "HAYASHI, Elena", votes: 251 },
          { name: "KANG, Junseo (Rudy)", votes: 60 },
          { name: "JEON, Shinwon", votes: 56 },
          { name: "PARK, Lio-Young", votes: 28 },
          { name: "NAUDE, Diégo", votes: 12 },
        ],
        eliminated: [],
      },
    ],
    winner: "HAYASHI, Elena",
    winType: "majority",
    finalVotes: 251,
    finalTotal: 407,
  },
  {
    position: "Head of Partnerships",
    totalBallots: 397,
    rounds: [
      {
        valid: 397,
        counts: [
          { name: "ROMAIN, Clotilde", votes: 191 },
          { name: "BOUEV-DOMBRE, Clémentine", votes: 112 },
          { name: "ONCHALO-MEYNARD, Nahia", votes: 52 },
          { name: "RAFFAËLLI-LAURENT, Maude", votes: 42 },
        ],
        eliminated: ["RAFFAËLLI-LAURENT, Maude"],
      },
      {
        valid: 395,
        counts: [
          { name: "ROMAIN, Clotilde", votes: 203 },
          { name: "BOUEV-DOMBRE, Clémentine", votes: 124 },
          { name: "ONCHALO-MEYNARD, Nahia", votes: 68 },
        ],
        eliminated: [],
      },
    ],
    winner: "ROMAIN, Clotilde",
    winType: "majority",
    finalVotes: 203,
    finalTotal: 395,
  },
  {
    position: "Head of Communications",
    totalBallots: 399,
    rounds: [
      {
        valid: 399,
        counts: [
          { name: "MIZUSHIMA, Lynne", votes: 193 },
          { name: "CARLOTTI, Lou", votes: 116 },
          { name: "MARKOV, Nikola", votes: 48 },
          { name: "IAGANASHVILI, Nini (Nutsa)", votes: 42 },
        ],
        eliminated: ["IAGANASHVILI, Nini (Nutsa)"],
      },
      {
        valid: 396,
        counts: [
          { name: "MIZUSHIMA, Lynne", votes: 210 },
          { name: "CARLOTTI, Lou", votes: 124 },
          { name: "MARKOV, Nikola", votes: 62 },
        ],
        eliminated: [],
      },
    ],
    winner: "MIZUSHIMA, Lynne",
    winType: "majority",
    finalVotes: 210,
    finalTotal: 396,
  },
  {
    position: "Head of Integration",
    totalBallots: 395,
    rounds: [
      {
        valid: 395,
        counts: [
          { name: "ROUBY, Maeva", votes: 183 },
          { name: "MAUPPIN-HIGASHINO, Kia", votes: 160 },
          { name: "RIDITA, Tasniah Ahmed", votes: 52 },
        ],
        eliminated: ["RIDITA, Tasniah Ahmed"],
      },
      {
        valid: 391,
        counts: [
          { name: "ROUBY, Maeva", votes: 209 },
          { name: "MAUPPIN-HIGASHINO, Kia", votes: 182 },
        ],
        eliminated: [],
      },
    ],
    winner: "ROUBY, Maeva",
    winType: "majority",
    finalVotes: 209,
    finalTotal: 391,
  },
  {
    position: "Event Manager",
    totalBallots: 409,
    rounds: [
      {
        valid: 409,
        counts: [
          { name: "MOCHIZUKI, Kotoko", votes: 173 },
          { name: "STEPHAN, Sonia", votes: 129 },
          { name: "LAU, Anessa", votes: 80 },
          { name: "De PAULA OLIVEIRA, Natália", votes: 27 },
        ],
        eliminated: ["De PAULA OLIVEIRA, Natália"],
      },
      {
        valid: 408,
        counts: [
          { name: "MOCHIZUKI, Kotoko", votes: 190 },
          { name: "STEPHAN, Sonia", votes: 136 },
          { name: "LAU, Anessa", votes: 82 },
        ],
        eliminated: ["LAU, Anessa"],
      },
      {
        valid: 396,
        counts: [
          { name: "MOCHIZUKI, Kotoko", votes: 233 },
          { name: "STEPHAN, Sonia", votes: 163 },
        ],
        eliminated: [],
      },
    ],
    winner: "MOCHIZUKI, Kotoko",
    winType: "majority",
    finalVotes: 233,
    finalTotal: 396,
  },
];

const palette = [
  "#2D5BE3", "#E8443A", "#1BAA6E", "#F5A623",
  "#9B59B6", "#E67E22", "#1ABC9C", "#C0392B",
];

const bgPalette = [
  "rgba(45,91,227,0.12)", "rgba(232,68,58,0.10)", "rgba(27,170,110,0.10)", "rgba(245,166,35,0.10)",
  "rgba(155,89,182,0.10)", "rgba(230,126,34,0.10)", "rgba(26,188,156,0.10)", "rgba(192,57,43,0.10)",
];

function getFirstName(fullName) {
  const parts = fullName.split(", ");
  if (parts.length === 2) return parts[1];
  return fullName;
}

function getLastName(fullName) {
  const parts = fullName.split(", ");
  return parts[0];
}

function BarSegment({ pct, color, isWinner, animated, delay }) {
  return (
    <div
      style={{
        width: `${pct}%`,
        height: "100%",
        backgroundColor: color,
        borderRadius: isWinner ? "6px 6px 6px 6px" : "6px",
        transition: "width 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
        transitionDelay: `${delay}ms`,
        position: "relative",
        opacity: animated ? 1 : 0.5,
        minWidth: pct > 0 ? "4px" : "0",
      }}
    />
  );
}

function MajorityMarker({ threshold }) {
  return (
    <div
      style={{
        position: "absolute",
        left: `${threshold}%`,
        top: -6,
        bottom: -6,
        width: "2px",
        backgroundColor: "#1a1a2e",
        zIndex: 10,
        opacity: 0.6,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -18,
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: "9px",
          fontFamily: "'JetBrains Mono', monospace",
          color: "#1a1a2e",
          whiteSpace: "nowrap",
          fontWeight: 600,
          letterSpacing: "0.05em",
          opacity: 0.7,
        }}
      >
        50%
      </div>
    </div>
  );
}

function RoundViz({ round, roundIdx, totalRounds, winner, position, posIdx }) {
  const maxVotes = Math.max(...round.counts.map((c) => c.votes));
  const isLastRound = roundIdx === totalRounds - 1;
  const baseColor = palette[posIdx % palette.length];

  return (
    <div style={{ marginBottom: roundIdx < totalRounds - 1 ? "16px" : "0" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginBottom: "10px",
        }}
      >
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "10px",
            fontWeight: 700,
            color: baseColor,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            background: bgPalette[posIdx % bgPalette.length],
            padding: "3px 8px",
            borderRadius: "4px",
          }}
        >
          Round {roundIdx + 1}
        </span>
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "9px",
            color: "#8b8fa3",
            letterSpacing: "0.05em",
          }}
        >
          {round.valid} valid votes
        </span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
        {round.counts.map((c, i) => {
          const pct = ((c.votes / round.valid) * 100).toFixed(1);
          const barPct = (c.votes / round.valid) * 100;
          const isWinner = isLastRound && c.name === winner;
          const isEliminated = round.eliminated.includes(c.name);
          return (
            <div
              key={c.name}
              style={{
                display: "grid",
                gridTemplateColumns: "170px 1fr 70px",
                alignItems: "center",
                gap: "12px",
                opacity: isEliminated ? 0.45 : 1,
                transition: "opacity 0.4s ease",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  justifyContent: "flex-end",
                }}
              >
                {isWinner && (
                  <span style={{ fontSize: "14px" }}>★</span>
                )}
                {isEliminated && (
                  <span style={{ fontSize: "11px", color: "#E8443A" }}>✕</span>
                )}
                <div style={{ textAlign: "right" }}>
                  <div
                    style={{
                      fontFamily: "'Newsreader', Georgia, serif",
                      fontSize: "13px",
                      fontWeight: isWinner ? 700 : 500,
                      color: isWinner ? baseColor : "#2c2c3a",
                      lineHeight: 1.2,
                      textDecoration: isEliminated ? "line-through" : "none",
                    }}
                  >
                    {getLastName(c.name)}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Newsreader', Georgia, serif",
                      fontSize: "10px",
                      color: "#8b8fa3",
                      lineHeight: 1.1,
                    }}
                  >
                    {getFirstName(c.name)}
                  </div>
                </div>
              </div>
              <div
                style={{
                  position: "relative",
                  height: "26px",
                  backgroundColor: "#f0f1f5",
                  borderRadius: "6px",
                  overflow: "visible",
                }}
              >
                <MajorityMarker threshold={50} />
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    width: `${barPct}%`,
                    backgroundColor: isWinner
                      ? baseColor
                      : isEliminated
                      ? "#ccc"
                      : `${baseColor}88`,
                    borderRadius: "6px",
                    transition: "width 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                    minWidth: barPct > 0 ? "4px" : "0",
                    boxShadow: isWinner ? `0 2px 12px ${baseColor}44` : "none",
                  }}
                />
              </div>
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "11px",
                  fontWeight: isWinner ? 700 : 500,
                  color: isWinner ? baseColor : "#555",
                  textAlign: "right",
                }}
              >
                {c.votes}{" "}
                <span style={{ fontSize: "9px", color: "#999" }}>
                  ({pct}%)
                </span>
              </div>
            </div>
          );
        })}
      </div>
      {round.eliminated.length > 0 && (
        <div
          style={{
            marginTop: "10px",
            paddingTop: "8px",
            borderTop: "1px dashed #e0e1e6",
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <span style={{ fontSize: "11px" }}>↓</span>
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "9px",
              color: "#999",
              letterSpacing: "0.04em",
            }}
          >
            Eliminated:{" "}
            {round.eliminated.map((e) => getLastName(e)).join(", ")} — votes
            redistributed
          </span>
        </div>
      )}
    </div>
  );
}

function PositionCard({ data, idx, isExpanded, onToggle }) {
  const baseColor = palette[idx % palette.length];
  const bgColor = bgPalette[idx % bgPalette.length];
  const winPct = ((data.finalVotes / data.finalTotal) * 100).toFixed(1);

  return (
    <div
      style={{
        backgroundColor: "#fff",
        borderRadius: "16px",
        overflow: "hidden",
        border: "1px solid #e8e9f0",
        boxShadow: isExpanded
          ? "0 8px 40px rgba(0,0,0,0.08)"
          : "0 2px 12px rgba(0,0,0,0.03)",
        transition: "box-shadow 0.3s ease",
      }}
    >
      <div
        onClick={onToggle}
        style={{
          padding: "20px 24px",
          cursor: "pointer",
          display: "grid",
          gridTemplateColumns: "1fr auto",
          alignItems: "center",
          gap: "16px",
          borderBottom: isExpanded ? "1px solid #e8e9f0" : "none",
          transition: "background 0.2s ease",
          background: isExpanded ? bgColor : "transparent",
        }}
        onMouseEnter={(e) => {
          if (!isExpanded)
            e.currentTarget.style.background = bgColor;
        }}
        onMouseLeave={(e) => {
          if (!isExpanded)
            e.currentTarget.style.background = "transparent";
        }}
      >
        <div>
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "9px",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: baseColor,
              marginBottom: "4px",
            }}
          >
            {data.position}
          </div>
          <div
            style={{
              fontFamily: "'Newsreader', Georgia, serif",
              fontSize: "22px",
              fontWeight: 700,
              color: "#1a1a2e",
              lineHeight: 1.1,
            }}
          >
            {getFirstName(data.winner)}{" "}
            <span style={{ fontWeight: 400 }}>
              {getLastName(data.winner)}
            </span>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div style={{ textAlign: "right" }}>
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "20px",
                fontWeight: 700,
                color: baseColor,
                lineHeight: 1,
              }}
            >
              {winPct}%
            </div>
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "9px",
                color: "#999",
                marginTop: "2px",
              }}
            >
              {data.rounds.length === 1
                ? "1 round"
                : `${data.rounds.length} rounds`}
            </div>
          </div>
          <div
            style={{
              width: "28px",
              height: "28px",
              borderRadius: "50%",
              backgroundColor: bgColor,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "14px",
              transition: "transform 0.3s ease",
              transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
              color: baseColor,
              fontWeight: 700,
            }}
          >
            ▾
          </div>
        </div>
      </div>
      {isExpanded && (
        <div style={{ padding: "20px 24px 24px" }}>
          <div
            style={{
              display: "flex",
              gap: "12px",
              marginBottom: "20px",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                padding: "8px 14px",
                borderRadius: "8px",
                backgroundColor: "#f6f7fb",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "10px",
              }}
            >
              <span style={{ color: "#999" }}>Ballots</span>{" "}
              <span style={{ fontWeight: 700, color: "#2c2c3a" }}>
                {data.totalBallots}
              </span>
            </div>
            <div
              style={{
                padding: "8px 14px",
                borderRadius: "8px",
                backgroundColor: "#f6f7fb",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "10px",
              }}
            >
              <span style={{ color: "#999" }}>Candidates</span>{" "}
              <span style={{ fontWeight: 700, color: "#2c2c3a" }}>
                {data.rounds[0].counts.length}
              </span>
            </div>
            <div
              style={{
                padding: "8px 14px",
                borderRadius: "8px",
                backgroundColor: "#f6f7fb",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "10px",
              }}
            >
              <span style={{ color: "#999" }}>Exhausted</span>{" "}
              <span style={{ fontWeight: 700, color: "#2c2c3a" }}>
                {data.totalBallots - data.finalTotal}
              </span>
            </div>
            <div
              style={{
                padding: "8px 14px",
                borderRadius: "8px",
                backgroundColor: bgColor,
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "10px",
              }}
            >
              <span style={{ color: baseColor, fontWeight: 700 }}>
                ★ Won by {data.winType}
              </span>
            </div>
          </div>
          {data.rounds.map((round, rIdx) => (
            <RoundViz
              key={rIdx}
              round={round}
              roundIdx={rIdx}
              totalRounds={data.rounds.length}
              winner={data.winner}
              position={data.position}
              posIdx={idx}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function SummaryBar() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "12px",
        marginBottom: "40px",
      }}
    >
      {[
        { label: "Positions", value: "8" },
        { label: "Total Ballots", value: "~415" },
        { label: "Round 1 Wins", value: "2" },
        { label: "Multi-Round", value: "6" },
      ].map((item, i) => (
        <div
          key={i}
          style={{
            textAlign: "center",
            padding: "20px 12px",
            backgroundColor: "#fff",
            borderRadius: "14px",
            border: "1px solid #e8e9f0",
          }}
        >
          <div
            style={{
              fontFamily: "'Newsreader', Georgia, serif",
              fontSize: "32px",
              fontWeight: 700,
              color: "#1a1a2e",
              lineHeight: 1,
            }}
          >
            {item.value}
          </div>
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "9px",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#999",
              marginTop: "6px",
            }}
          >
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function App() {
  const [expanded, setExpanded] = useState(new Set([0]));

  const toggle = (idx) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx);
      else next.add(idx);
      return next;
    });
  };

  const expandAll = () => {
    if (expanded.size === electionData.length) setExpanded(new Set());
    else setExpanded(new Set(electionData.map((_, i) => i)));
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(165deg, #f5f5fa 0%, #edeef6 40%, #f0ece6 100%)",
        fontFamily: "'Newsreader', Georgia, serif",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,300;0,6..72,400;0,6..72,500;0,6..72,700;1,6..72,400&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <div
        style={{
          maxWidth: "780px",
          margin: "0 auto",
          padding: "48px 24px 80px",
        }}
      >
        <div style={{ marginBottom: "48px" }}>
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "10px",
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#2D5BE3",
              marginBottom: "8px",
            }}
          >
            Bureau des Étudiants · 2026
          </div>
          <h1
            style={{
              fontFamily: "'Newsreader', Georgia, serif",
              fontSize: "46px",
              fontWeight: 700,
              color: "#1a1a2e",
              lineHeight: 1.05,
              margin: 0,
              letterSpacing: "-0.02em",
            }}
          >
            Ranked Choice
            <br />
            <span style={{ fontStyle: "italic", fontWeight: 400 }}>
              Election Results
            </span>
          </h1>
          <p
            style={{
              fontFamily: "'Newsreader', Georgia, serif",
              fontSize: "16px",
              color: "#777",
              marginTop: "12px",
              lineHeight: 1.5,
              maxWidth: "520px",
            }}
          >
            Full instant-runoff results across all eight positions. Candidates
            ranked 1–5 by each voter; blanks counted as abstentions. All races
            resolved by majority.
          </p>
        </div>

        <SummaryBar />

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginBottom: "16px",
          }}
        >
          <button
            onClick={expandAll}
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "10px",
              fontWeight: 600,
              letterSpacing: "0.08em",
              color: "#2D5BE3",
              background: "none",
              border: "1px solid #2D5BE3",
              borderRadius: "8px",
              padding: "8px 16px",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#2D5BE3";
              e.currentTarget.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "none";
              e.currentTarget.style.color = "#2D5BE3";
            }}
          >
            {expanded.size === electionData.length
              ? "COLLAPSE ALL"
              : "EXPAND ALL"}
          </button>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {electionData.map((data, idx) => (
            <PositionCard
              key={data.position}
              data={data}
              idx={idx}
              isExpanded={expanded.has(idx)}
              onToggle={() => toggle(idx)}
            />
          ))}
        </div>

        <div
          style={{
            marginTop: "48px",
            padding: "20px 24px",
            backgroundColor: "#fff",
            borderRadius: "14px",
            border: "1px solid #e8e9f0",
          }}
        >
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "9px",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#999",
              marginBottom: "10px",
            }}
          >
            How to read this
          </div>
          <div
            style={{
              fontFamily: "'Newsreader', Georgia, serif",
              fontSize: "13px",
              color: "#666",
              lineHeight: 1.6,
            }}
          >
            Each bar shows the share of first-choice votes in that round. The{" "}
            <span
              style={{
                display: "inline-block",
                width: "2px",
                height: "12px",
                backgroundColor: "#1a1a2e",
                verticalAlign: "middle",
                margin: "0 4px",
                opacity: 0.5,
              }}
            />{" "}
            vertical line marks the 50% majority threshold. When no candidate
            crosses it, the lowest-ranked candidate is eliminated and their
            votes redistribute to remaining choices. Stars (★) mark the final
            winner. Crossed-out names (✕) were eliminated that round.
          </div>
        </div>
      </div>
    </div>
  );
}
