const LearningPath = ({ recommendations }) => (
  <div>
    <h2>Your Learning Path</h2>
    <ul>
      {recommendations.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

export default LearningPath;
