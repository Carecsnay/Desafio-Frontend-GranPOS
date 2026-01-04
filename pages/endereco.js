import axios from 'axios'
import { useState } from 'react'
import { Button, Form, Toast, ToastContainer } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import Field from '../components/Form'
import Head from 'next/head'

const Endereco = () => {

    const { register, handleSubmit, setValue } = useForm()
    const [showToast, setShowToast] = useState(false)
    const [toastMessage, setToastMessage] = useState('')
    const [toastVariant, setToastVariant] = useState('success')
    const [isLoading, setIsLoading] = useState(false)

    const buscarCEP = (event) => {
        let cep = event.target.value.replace(/\D/g, '')

        if (cep.length > 5) {
            cep = cep.replace(/^(\d{5})(\d)/, '$1-$2')
        }

        setValue('cep', cep)

        if (cep.replace('-', '').length == 8) {
            setIsLoading(true)
            setToastMessage('Buscando dados do CEP...')
            setToastVariant('warning')
            setShowToast(true)

            setTimeout(() => {
                axios.get(`https://viacep.com.br/ws/${cep.replace('-', '')}/json/`)
                    .then(resultado => {
                        setIsLoading(false)
                        if (resultado.status === 200 && !resultado.data.erro) {
                            setValue('UF', resultado.data.uf)
                            setValue('cidade', resultado.data.localidade)
                            setValue('endereco', resultado.data.logradouro)
                            setValue('bairro', resultado.data.bairro)
                            setValue('complemento', resultado.data.complemento)

                            setToastMessage('Endereço encontrado!')
                            setToastVariant('success')
                            setShowToast(true)
                        } else {
                            setToastMessage('Por favor verifique o CEP informado e tente novamente')
                            setToastVariant('danger')
                            setShowToast(true)
                        }
                    }).catch(() => {
                        setIsLoading(false)
                        setToastMessage('Por favor verifique o CEP informado e tente novamente')
                        setToastVariant('danger')
                        setShowToast(true)
                    })
            }, 2000)
        }

    }

    const submit = () => {
        setToastMessage('Enviando formulário...')
        setToastVariant('warning')
        setShowToast(true)


        setTimeout(() => {
            setToastMessage('Formulário enviado com sucesso!')
            setToastVariant('success')
            setShowToast(true)

            setValue('CEP', '')
            setValue('UF', '')
            setValue('cidade', '')
            setValue('endereco', '')
            setValue('bairro', '')
            setValue('numero', '')
            setValue('complemento', '')
        }, 2500)
    }


    return (
        <>
            <Head>
                <title>Form Model</title>
            </Head>

            <div className='d-flex flex-column justify-content-center gap-3 my-4'>
                <h4 className='p-3 border text-center rounded bg-secondary bg-opacity-75 text-white'>Endereço de Entrega usando API (viacep)</h4>
                <Form onSubmit={handleSubmit(submit)} className='text-white bg-secondary bg-opacity-75 p-5 border rounded'>
                    <Field label="CEP: " name="CEP" register={register} maxLength={9} placeholder="Digite seu CEP" onChange={buscarCEP} disabled={isLoading} loading={isLoading} required />
                    <Field label="Cidade: " name="cidade" register={register} placeholder="Digite sua Cidade" required />
                    <Field label="Estado (UF): " name="UF" register={register} placeholder="Digite sua UF" required />
                    <Field label="Endereço: " name="endereco" register={register} placeholder="Digite seu endereço" required />
                    <Field label="Bairro: " name="bairro" register={register} placeholder="Digite seu bairro" required />
                    <Field label="Número: " name="numero" type="number" register={register} placeholder="Digite o número do imóvel" required />
                    <Field label="Complemento: " name="complemento" register={register} placeholder="Digite seu complemento (se houver)" />

                    <Button type='submit' variant='success' className='mt-2 w-100'>Enviar</Button>
                </Form>

                <ToastContainer position="bottom-center" className="p-3">
                    <Toast onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide bg={toastVariant}>
                        <Toast.Body className={toastVariant === 'warning' ? 'text-dark' : 'text-white'}>{toastMessage}</Toast.Body>
                    </Toast>
                </ToastContainer>
            </div>
        </>

    )
}

export default Endereco