import './style.css'

const header = (props) => {

  return (
    <div className='header'>
      <h1>{props.title}</h1>
      <p>{props.desc}</p>
    </div>
  )
}

export default header;