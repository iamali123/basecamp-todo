import './App.css';
import Button from './UI/Button';
import Card from './UI/Card';

function App() {
  return (
	  <Card>
    <div className="App">
		<div className="to-do-heading">
             <Button />
            <h1>To-dos</h1>
			<button className="view-as-btn">View As</button>
			</div>
    </div>
	</Card>
  );
}

export default App;
