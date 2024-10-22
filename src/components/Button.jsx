// import './button.css'
const Button = (props) => {
    console.log(props)
      return (
    <button type="submit" style={{backgroundColor:props.color}}>
     {props.title}
    </button>
  )
}

export default Button
