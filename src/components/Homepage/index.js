import { Link } from 'react-router-dom'
import './index.scss'

const Homepage = () => {

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            Hi I'm Dalton
          </h1>
          <h2>Software Engineer</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
      </div>
    </>
  )
}

export default Homepage;