import logo from './logo.svg';
import './App.css';
import FocusIntut from './componets/FocusIntut'
import RefDemo from './componets/RefDemo'
import FRParent from './componets/FRParent';
import PotalDemo from './componets/PotalDemo';
import Hero from './componets/Hero';
import ErrorBondry from './componets/ErrorBondry';
import Counter from './componets/Counter';
import HoverCounter from './componets/HoverCounter';



function App() {
  return (
    <div className="App">
<Counter/>
<HoverCounter/>


{/*
<ErrorBondry> 
  
<Hero heroName=" Amur Temur"/>
</ErrorBondry>
<ErrorBondry>
      <Hero heroName=" Jaloliddin"/>
      </ErrorBondry>
      <ErrorBondry>
      
      <Hero heroName="Joker"/>


</ErrorBondry>


      <FRParent/>
    <FocusIntut/>*/}

{ /* <RefDemo/>*/}
    </div>
  );
}

export default App;
