import { Button } from "react-bootstrap";

function Header(){
    return (
        <header>
          <div className='container'>
            <h2>Header</h2>
            <Button variant="primary" size="sm">Hello world</Button>
          </div>
      </header>
    )
}
export default Header;