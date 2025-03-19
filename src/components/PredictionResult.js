function PredictionResult({ result }) {
  return (
    <div>
      <h2>Prediction Result:</h2>
      {result ? (
        <p>
          The predicted antimicrobial resistance is:{" "}
          <strong>{result.prediction}</strong>
        </p>
      ) : (
        <p>No prediction made yet.</p>
      )}
    </div>
  );
}

export default PredictionResult;
