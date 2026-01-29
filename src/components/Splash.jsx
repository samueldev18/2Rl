import logo from "../assets/logo.png";

export default function Splash() {
  const containerStyle = {
    height: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background:
      "radial-gradient(circle at top, #ff9a3c, #ff7a00, #e35f00)",
    color: "#ffffff",
    fontFamily: "Inter, Arial, sans-serif",
  };

  const contentStyle = {
    textAlign: "center",
    animation: "fadeIn 1.2s ease",
  };

  const logoStyle = {
    width: "120px",
    marginBottom: "20px",
  };

  const titleStyle = {
    fontSize: "4rem",
    fontWeight: 800,
    letterSpacing: "8px",
    margin: 0,
  };

  const subtitleStyle = {
    marginTop: "12px",
    fontSize: "1rem",
    opacity: 0.85,
    letterSpacing: "2px",
    textTransform: "uppercase",
  };

  return (
    <>
      {/* animação inline */}
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: scale(1.05);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
        `}
      </style>

      <div style={containerStyle}>
        <div style={contentStyle}>
          <h1 style={titleStyle}>2RL</h1>
          <div style={subtitleStyle}>
            Representação e Comércio Industrial
          </div>
        </div>
      </div>
    </>
  );
}