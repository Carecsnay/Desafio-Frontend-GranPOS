import React from 'react'
import { Container, Nav, Navbar } from "react-bootstrap";

const Pagina = (props) => {
    return (
        <div>
            <Navbar bg="dark" data-bs-theme="dark" className="mb-2">
                <Container>
                    <Navbar.Brand href="/">Front-End</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Inicial</Nav.Link>
                        <Nav.Link href="/alertas">Alerta</Nav.Link>
                        <Nav.Link href="/botoes">Botões</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <Container className='mb-3'>
                {props.children}
            </Container>
        </div>
    )
}

export default Pagina