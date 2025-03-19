import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Papa from "papaparse";
import "../styles/Predict.css";

function Predict() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    age: "",
    organismGroup: "",
    infectionType: "",
    sampleCollectionSite: "",
    hospitalizationStatus: "",
    previousAntibioticUse: "",
    treatmentDuration: "",
    previousAMRHistory: "",
    resistanceToPreviousTreatment: "",
  });

  const [dropdownOptions, setDropdownOptions] = useState({
    organismGroup: [],
    infectionType: ["UTI", "SSTI", "BSI", "Pneumonia"],
    sampleCollectionSite: ["Sputum", "Blood", "Urine", "Wound"],
    hospitalizationStatus: ["Inpatient", "Outpatient", "ICU"],
    previousAntibioticUse: ["Yes", "No"],
    previousAMRHistory: ["Yes", "No"],
    resistanceToPreviousTreatment: ["No", "Yes"],
  });

  useEffect(() => {
    fetch("/isolates_with_clinical_data.csv") // Ensure CSV is in public folder
      .then((response) => response.text())
      .then((csvText) => {
        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (result) => {
            extractDropdownOptions(result.data);
          },
        });
      });
  }, []);

  const extractDropdownOptions = (data) => {
    const uniqueOrganisms = [...new Set(data.map((row) => row["#Organism group"]).filter(Boolean))];
    setDropdownOptions((prevOptions) => ({
      ...prevOptions,
      organismGroup: uniqueOrganisms,
    }));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/results", { state: { formData } });
  };

  return (
    <div className="predict-container">
      <h2>Enter Details for Prediction</h2>
      <form onSubmit={handleSubmit}>
        <label>Age:</label>
        <input
          type="number"
          name="age"
          placeholder="Enter Age"
          onChange={handleChange}
          required
        />

        <label>Organism Group:</label>
        <select name="organismGroup" onChange={handleChange} required>
          <option value="">Select Organism Group</option>
          {dropdownOptions.organismGroup.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>

        <label>Infection Type:</label>
        <select name="infectionType" onChange={handleChange} required>
          <option value="">Select Infection Type</option>
          {dropdownOptions.infectionType.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>

        <label>Sample Collection Site:</label>
        <select name="sampleCollectionSite" onChange={handleChange} required>
          <option value="">Select Sample Collection Site</option>
          {dropdownOptions.sampleCollectionSite.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>

        <label>Hospitalization Status:</label>
        <select name="hospitalizationStatus" onChange={handleChange} required>
          <option value="">Select Hospitalization Status</option>
          {dropdownOptions.hospitalizationStatus.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>

        <label>Previous Antibiotic Use:</label>
        <select name="previousAntibioticUse" onChange={handleChange} required>
          <option value="">Select Previous Antibiotic Use</option>
          {dropdownOptions.previousAntibioticUse.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>

        <label>Treatment Duration (days):</label>
        <input
          type="number"
          name="treatmentDuration"
          placeholder="Enter Duration"
          onChange={handleChange}
          required
        />

        <label>Previous AMR History:</label>
        <select name="previousAMRHistory" onChange={handleChange} required>
          <option value="">Select Previous AMR History</option>
          {dropdownOptions.previousAMRHistory.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>

        <label>Resistance to Previous Treatment:</label>
        <select name="resistanceToPreviousTreatment" onChange={handleChange} required>
          <option value="">Select Resistance to Previous Treatment</option>
          {dropdownOptions.resistanceToPreviousTreatment.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>

        <button type="submit">Predict</button>
      </form>
    </div>
  );
}

export default Predict;
