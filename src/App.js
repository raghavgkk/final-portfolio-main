// import logo from './logo.svg';
import { Route , Routes} from 'react-router-dom';
import './App.css';
import MainPage from "./MainPage";
import ProjectPage from './project/ProjectPage';
import AboutMe from './about/AboutMe';
// import Vetic from './projectDescription/Vetic';
import Project1 from './projectDescription/Project1';
import Project2 from './projectDescription/Project2';
import Project3 from './projectDescription/Project3';
import Project4 from './projectDescription/Project4';
import Project5 from './projectDescription/Project5';

function App() {
  return (
  <div>
  
    {/* <ProjectPage/> */}
   
    <section>
      <Routes>
        <Route path="/work" element={<ProjectPage/>}/>
        <Route path="/about" element={<AboutMe/>}/>
        <Route path="/project/vetic" element={<Project1/>}/>
        <Route path="/project/cura" element={<Project2/>}/>
        <Route path="/project/paws&wings" element={<Project3/>}/>
        <Route path="/project/looks" element={<Project4/>}/>
        <Route path="/project/raahi" element={<Project5/>}/>
        <Route path="/" element={<MainPage/>}/>
      </Routes>
    </section>
    </div>
  );
}

export default App;
