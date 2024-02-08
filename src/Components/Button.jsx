

function Button({ handleClick, text = 'Send' }) {
  return (
    <button onClick = { handleClick }>{ text }</button>
  )
}

export default Button