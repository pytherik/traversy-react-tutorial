//: optional to catch errors before they happen
import PropTypes from 'prop-types'
import Button from './Button'

//: define a style
// const headingStyle = {
//   color: 'green',
//   backgroundColor: 'black'
// }

const Header = ({title, page}) => {
  const onClick = () => {
    console.log('klickediklack')
  }
  return (
    <header className="header">
      {/* <p>{page}</p> */}
      <h1>{title}</h1>
      {/* with style defined above */}
      {/* <h1 style={headingStyle}>{title}</h1> */}

      {/* inline css needs double curly braces*/}
      {/* <h1 style={{color: 'green'}}>{title}</h1> */}
      <Button onClick={onClick} text="Add" color="green"/>

      {/* components are reusable  */}
      {/* <Button text="Hallo" color="blue"/>
      <Button text="Duda" color="orange"/> */}
    </header>
  )
}

Header.defaultProps = {
  title: "Hello Duda!",
  page: "Page 18",
}


//: optional to catch errors before they happen
Header.propTypes = {
  title: PropTypes.string,
  page: PropTypes.string,
}


// const Header = (props) => {
//   return (
//     <header>
//       <h1>{props.title}</h1>
//     </header>
//   )
// }


export default Header
