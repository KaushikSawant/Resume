import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Aboutme from './Aboutme';
import Education from './Education';
import Skills from './Skills';
import Certifications from './Certifications';
import Project from './Project';
import Extra from './Extra';
import Hobbies from './Hobbies'

function App() {
    return (
        <div className = "container">
            <Aboutme />
            <Education />   
            <Skills />
            <Project />
            <Certifications />
            <Extra />
            <Hobbies />
        </div> 
  );
}

export default App;
