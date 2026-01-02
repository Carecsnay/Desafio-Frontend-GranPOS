import axios from 'axios'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

const endereco = () => {

    const { register, handleSubmit, setValue } = useForm()

    const buscarCEP = (event) => {
        let cep = event.target.value.replace(/\D/g, '')

        if (cep.length > 5) {
            cep = cep.replace(/^(\d{5})(\d)/, '$1-$2')
        }

        setValue('cep', cep)

        if (cep.replace('-', '').length == 8) {
            axios.get(`https://viacep.com.br/ws/${cep.replace('-', '')}/json/`).then(resultado => {

                setValue('UF', resultado.data.uf)
                setValue('cidade', resultado.data.localidade)
                setValue('endereco', resultado.data.logradouro)
                setValue('bairro', resultado.data.bairro)
                setValue('complemento', resultado.data.complemento)
            })
        }

    }

    const submit = (dados) => {
        console.log(dados)
    }


    return (
        <>
            <h4 className='p-2 border rounded bg-secondary bg-opacity-75 text-white'>Endereço para Contato</h4>
            <Form onSubmit={handleSubmit(submit)} className='text-white bg-secondary bg-opacity-75 p-3 border rounded'>
                <Form.Group className="mb-3" controlId="CEP">
                    <Form.Label>CEP: </Form.Label>
                    <Form.Control type="text" maxLength={9} {...register('cep')} placeholder="Digite seu CEP" onChange={buscarCEP} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="cidade">
                    <Form.Label>Cidade: </Form.Label>
                    <Form.Control type="text" {...register('cidade')} placeholder="Digite sua Cidade" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="UF">
                    <Form.Label>Estado (UF): </Form.Label>
                    <Form.Control type="text" {...register('UF')} placeholder="Digite sua UF" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="endereco">
                    <Form.Label>Endereço: </Form.Label>
                    <Form.Control type="text" {...register('endereco')} placeholder="Digite seu Endereço" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="bairro">
                    <Form.Label>Bairro: </Form.Label>
                    <Form.Control type="text" {...register('bairro')} placeholder="Digite seu bairro" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="numero">
                    <Form.Label>Número: </Form.Label>
                    <Form.Control type="number" {...register('numero')} placeholder="Digite o número do imóvel" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="complemento" >
                    <Form.Label>Complemento: </Form.Label>
                    <Form.Control type="text" {...register('complemento')} placeholder="Digite seu complemento (se houver)" />
                </Form.Group>

                <Button type='submit' variant='success' className='mt-2'>Enviar</Button>
            </Form>
        </>

    )
}

export default endereco