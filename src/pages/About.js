import "../styles/About.css";

function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">About the AMR Prediction System</h1>

      <section className="about-section">
        <h2>Project Overview</h2>
        <p>
          Antimicrobial resistance (AMR) is a major global health concern where microorganisms
          develop the ability to survive antibiotics, making infections harder to treat. Our system leverages
          <strong> XGBoost </strong> and machine learning algorithms to predict antimicrobial resistance by
          analyzing bacterial genomic data and clinical metadata.
        </p>
      </section>

      <section className="about-section">
        <h2>Objective</h2>
        <p>
          The goal is to develop a system that accurately predicts AMR, enabling healthcare professionals
          to make informed decisions. This AI-driven solution reduces the time required for diagnosis and
          improves treatment efficiency.
        </p>
      </section>

      <section className="about-section">
        <h2>Key Features</h2>
        <ul>
          <li>
            <strong>Data Integration:</strong> Combines whole-genome sequencing (WGS) data and clinical metadata.
          </li>
          <li>
            <strong>Preprocessing:</strong> Applies data balancing techniques such as SMOTE to handle class imbalances.
          </li>
          <li>
            <strong>Machine Learning Models:</strong> Uses XGBoost and Random Forest models for accurate prediction.
          </li>
          <li>
            <strong>Web Interface:</strong> Provides a user-friendly interface to input patient data and visualize predictions.
          </li>
        </ul>
      </section>

      <section className="about-section">
        <h2>Significance</h2>
        <p>
          This project accelerates the detection of resistant strains and supports better antibiotic
          stewardship. Early identification of resistance patterns helps prevent the spread of resistant
          bacteria and improves patient outcomes.
        </p>
      </section>

      <section className="about-section">
        <h2>Keywords</h2>
        <p>
          <strong>XGBoost, AMR Prediction, Machine Learning, Genomic Data, Clinical Metadata, Antibiotic
          Stewardship</strong>
        </p>
      </section>

      <button className="back-btn" onClick={() => window.history.back()}>
        🔙 Back to Results
      </button>
    </div>
  );
}

export default About;
