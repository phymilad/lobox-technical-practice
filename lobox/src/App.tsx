import { useState } from "react"
import { Input } from "./atoms/input"

function App() {

  const [inputValue, setInputValue] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
    setInputValue(e.target.value)
  }

  return (
    <>
      <Input 
        onChange={handleInputChange} 
        placeholder="Type here"
        type="text"
        value={inputValue}
      />
    </>
  )
}

export default App
