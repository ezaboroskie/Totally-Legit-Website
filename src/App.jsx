import { useState } from 'react'
import './styles.css'


function App() {
  const [count, setCount] = useState(1)

  const handleCount = ()=>{
    setCount(count +1)
  }
  return (
    <>
      <main className='main-container'>
      {count == 1 ? (
      <div onClick={handleCount} className="one">
        <p onClick={handleCount} className='text'>Click me</p>
      </div>
      ):count == 2 ? (
      <div onClick={handleCount} className="two">
         <p onClick={handleCount} className='text'>Missed me</p>
      </div>
      ): count == 3 ?(
      <div onClick={handleCount} className="three">
         <p onClick={handleCount} className='text'>Haha too slow</p>
      </div>
      ):count == 4 ?(
      <div onClick={handleCount} className="four">
         <p onClick={handleCount} className='text'>Do you even click bro?</p>
      </div>
      ): count == 5 ?(
      <div onClick={handleCount} className="five">
         <p onClick={handleCount} className='text'>Almost! Try again!</p>
      </div>
      ): count == 6 ?(
      <div onClick={handleCount} className="six">
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><p className='text'>Ok I give up. Click me.</p></a>
      </div>
      )
      :null}
      </main>
    </>
  )
}

export default App
