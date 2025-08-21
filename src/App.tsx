
import { Motivational } from "./components/MotivationalMessage"


import { Exercise } from "./components/ExerciseList"

import { Welcome } from "./components/Welcome"



function App() {
  

  return (
    <>
      <Welcome/>
      <Exercise/>
      <Motivational message="Não desista, a nota vai ser boa" author="Eu mesmo"/>


       
      

    </>
  )
}

export default App
