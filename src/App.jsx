import React from 'react'

const App = () => {
  console.log(import.meta.env.VITE_APPWRITE_URL);
  console.log(import.meta.env.VITE_PASSWORS_HI);
  
  return (
    <div>
      hi ther
    </div>
  )
}

export default App
