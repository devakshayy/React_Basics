
const Button = ({count,increase,decrease}) => {
    
  return (
   <>
   <button onClick={increase}>Im a Button Increase button</button>
   <h1>You Click {count} times</h1>
   <button onClick={decrease}>Im a Button decrease button</button>
   </>
   
  )
}

export default Button
