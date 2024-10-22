const Button2 = (props) => {
const {title, color} = props
    return (
    <button type="submit" style={{backgroundColor:color}}>
     {title}
    </button>
  )
}

export default Button2