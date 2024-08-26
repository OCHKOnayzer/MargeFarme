import React,{useState} from 'react';
import { Animals as initialAnimals } from './components/animals/AnimalsArray';
import DecrimentBtn from './components/UI/DecrimentBtn';
function App() {

  const [animalValue,setAnimalValue] = useState(initialAnimals)

  const incrimentAnimalsCount = (key:string) =>{ 
    setAnimalValue(prevValue=>({ 
      ...prevValue,[key]:{ 
        ...prevValue[key],
        count: prevValue[key].count + 1
      }
    }))
  }
  const DecrimentAnimalsCount =(key:string)=>{ 
    setAnimalValue(prevValue=>({ 
      ...prevValue,[key]:{ 
        ...prevValue[key],
        count: prevValue[key].count - 1
      }
    }))
  }

  return (
    <div className="App">
    {
     Object.entries(animalValue).map(([key,value]) => (
      <div>
        {key}

        <button onClick={()=> incrimentAnimalsCount(key)}>
          incriment {key}
        </button>

        {value.count}

        <button onClick={()=> DecrimentAnimalsCount(key)}>
          Decriment {key}
        </button>

      <DecrimentBtn/>

      </div>
     ))
    }
    </div>
  );
}

export default App;
