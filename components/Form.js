import { Form } from 'react-bootstrap'

const Field = ({ label, name, register, ...props }) => {
    return (
        <Form.Group className="mb-3" controlId={name}>
            <Form.Label>{label}</Form.Label>
            <Form.Control {...register(name)} {...props} />
        </Form.Group>
    )
}

export default Field