import { Navbar, Nav } from 'react-bootstrap'
import { Link, Routes } from 'react-router-dom'
function Header() {
  return (
    <div>
      {/* <h2> Header</h2> */}
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand className='e-com'>E-Commerce</Navbar.Brand>
        <Nav className="me-auto nav_bar_wrap">

          <Link to='/add'>Add Product</Link>
          <Link to='/update'>Update Product</Link>
          <Link to='/login'>Login</Link>
          <Link to='/register'>Register</Link>
        </Nav>
      </Navbar>
    </div>
  )
}
export default Header;