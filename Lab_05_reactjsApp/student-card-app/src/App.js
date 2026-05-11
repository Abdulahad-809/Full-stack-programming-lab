import logo from './logo.svg';
import './App.css';
function StudentCard(props) {
  return (
    <div className="student-card" style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', backgroundColor: props.color, borderRadius: '5px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', textAlign: 'center' ,  fontFamily: 'Arial, sans-serif'}}>
      <h2>{props.name}</h2>
      <p>Roll No: {props.rollNo}</p>
      <p>Department: {props.department}</p>
      <p>University: {props.university}</p>
    </div>
  );
}
function App() {
  return (
    <div className="App">
      <h1>Student Cards</h1>
      <StudentCard
        name="Shiraz Ahmad"
        rollNo="232056"
        department="Software Engineering"
        university="Air University"
        color="#f0f8ff"
      />
      <StudentCard
        name="Anees Paracha"
        rollNo="67890"
        department="Mechanical Engineering"
        university="Comsats University"
        color="#ffe4e1"
      />  
      <StudentCard
        name="Ahmed Khan"
        rollNo="54321"
        department="Electrical Engineering"
        university="FAST University"
        color="#e6e6fa"
      />
    </div>
  );
}

export default App;
