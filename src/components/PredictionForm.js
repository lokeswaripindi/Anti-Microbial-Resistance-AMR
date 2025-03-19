import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Predict.css";

function PredictionForm() {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/results", { state: { formData } });
  };

  return (
    <form className="predict-form" onSubmit={handleSubmit}>
      <input type="text" name="organism" placeholder="Organism" required />
      <input type="number" name="age" placeholder="Age" required />
      <button type="submit">Submit</button>
    </form>
  );
}

export default PredictionForm;
