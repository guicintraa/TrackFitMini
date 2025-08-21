
import { Motivational } from "./components/MotivationalMessage"


import { Exercise } from "./componets/ExerciseList"

import { Welcome } from "./components/Welcome"



function App() {
  

  return (
    <>

      <Motivational message="Não desista, a nota vai ser boa" author="Eu mesmo"/>


      <Exercise/> 
      <Welcome/>

    </>
  )
}

export default App
