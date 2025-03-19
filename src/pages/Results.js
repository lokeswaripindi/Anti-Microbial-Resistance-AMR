import { useLocation, useNavigate } from "react-router-dom";
import "../styles/Results.css";

function Results() {
  const location = useLocation();
  const navigate = useNavigate();
  const { result } = location.state || {};

  // Path to images from /public/images/
  const resistantImage = process.env.PUBLIC_URL + "/images/resistant.jpg";
  const susceptibleImage = process.env.PUBLIC_URL + "/images/susceptible.jpg";

  const isResistant = result === "Resistant";

  // Navigate to About Page
  const goToAbout = () => {
    navigate("/about");
  };

  // Navigate back to Prediction Page
  const goBackToPredict = () => {
    navigate("/predict");
  };

  return (
    <div className="result-container">
      <h1 className="result-title">Antimicrobial Resistance Prediction</h1>

      <div className="result-content">
        <p className="result-summary">
          Based on the data provided, the prediction suggests that the organism is:
        </p>

        <div className={`result-status ${isResistant ? "resistant" : "susceptible"}`}>
          <h2 className="result-text">
            {isResistant ? "⚠️ Resistant" : "✅ Susceptible"}
          </h2>
          <p className="result-description">
            {isResistant
              ? "This organism is resistant to the treatment, indicating that the standard antibiotic therapy may not be effective."
              : "This organism is susceptible to the treatment, suggesting that the prescribed antibiotics should be effective."}
          </p>

          {/* Display Image Based on Prediction */}
          <img
            src={isResistant ? resistantImage : susceptibleImage}
            alt={isResistant ? "Resistant" : "Susceptible"}
            className="result-image"
          />
        </div>

        <div className="result-info">
          <h3>💡 What does this mean?</h3>
          <p className="info-text">
            Antimicrobial resistance (AMR) occurs when bacteria, viruses, fungi, and parasites evolve and no longer respond to medicines, making infections harder to treat.
            Early detection and appropriate treatment are crucial for managing infections effectively.
          </p>
        </div>

        {/* Button Section */}
        <div className="button-container">
          <button className="back-btn" onClick={goBackToPredict}>
            🔙 Back to Prediction
          </button>
          <button className="about-btn" onClick={goToAbout}>
            📚 Learn More About AMR
          </button>
        </div>
      </div>
    </div>
  );
}

export default Results;
