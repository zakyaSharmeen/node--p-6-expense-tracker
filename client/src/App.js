import './App.css';
import Form from './components/Form';
import Graphs from './components/Graphs';

function App() {
  return (
    <div className="App">
    <div className="container mx-auto max-w-6xl text-center drop-shadow-lg text-gray-800">
      <h1 className="text-4xl py-8 mb-10 bg-blue-800 text-white rounded">Expense Tracker</h1>

      {/* grid columns */}
      <div className="grid md:grid-cols-2 gap-4">
          {/* Chart */}
         <Graphs/>
          {/* Form */}
          <Form/>
      </div>
    </div>
  </div>
  );
}

export default App;
