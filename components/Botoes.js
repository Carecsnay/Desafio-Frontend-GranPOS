import { Button, Container } from 'react-bootstrap'

const Botoes = () => {
    return (
        <Container className='text-center border border-success pt-3 '>
            <h3 className='p-2 bg-success text-white'>Botões do Bootstrap ReactJS</h3>
            <p className=' fs-5 mt-5'>Listagem de todos os exemplos de botões:</p>
            <div className='d-flex flex-column gap-2 w-50 mx-auto'>
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="success">Success</Button>
                <Button variant="warning">Warning</Button>
                <Button variant="danger">Danger</Button>
                <Button variant="info">Info</Button>
                <Button variant="light">Light</Button>
                <Button variant="dark">Dark</Button>
                <Button variant="link">Link</Button>
            </div>
        </Container>
    )
}

export default Botoes