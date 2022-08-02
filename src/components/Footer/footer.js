import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer className="page-footer red darken-4">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Footer Content</h5>
                <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Links</h5>
                <ul>
                    <li><Link to="/" className="grey-text text-lighten-3">Home</Link></li>
                    <li><Link to="/" className="grey-text text-lighten-3">Home</Link></li>
                    <li><Link to="/" className="grey-text text-lighten-3">Home</Link></li>
                    <li><Link to="/" className="grey-text text-lighten-3">Home</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2022 Melina Blanco
            </div>
          </div>
        </footer>
    )
}

export default Footer