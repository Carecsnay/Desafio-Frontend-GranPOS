import { Form, InputGroup, Spinner } from 'react-bootstrap'

const Field = ({ label, name, register, loading, ...props }) => {
    return (
        <Form.Group className="mb-3" controlId={name}>
            <Form.Label>{label}</Form.Label>
            <InputGroup>
                <Form.Control {...register(name)} {...props} />
                {loading && (
                    <InputGroup.Text>
                        <Spinner animation="border" size="sm" />
                    </InputGroup.Text>
                )}
            </InputGroup>
        </Form.Group>
    )
}

export default Field