import axios from 'axios'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import Field from '../components/Form'

const Endereco = () => {

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

                console.log(resultado.status, resultado.statusText)
            })
        }

    }

    const submit = (dados) => {
        console.log(dados)
    }


    return (
        <>
            <h4 className='p-3 border rounded bg-secondary bg-opacity-75 text-white'>Endereço de Entrega</h4>
            <Form onSubmit={handleSubmit(submit)} className='text-white bg-secondary bg-opacity-75 p-3 border rounded'>
                <Field label="CEP: " name="CEP" register={register} maxLength={9} placeholder="Digite seu CEP" onChange={buscarCEP} />
                <Field label="Cidade: " name="cidade" register={register} placeholder="Digite sua Cidade" />
                <Field label="Estado (UF): " name="UF" register={register} placeholder="Digite sua UF" />
                <Field label="Endereço: " name="endereco" register={register} placeholder="Digite seu endereço" />
                <Field label="Bairro: " name="bairro" register={register} placeholder="Digite seu bairro" />
                <Field label="Número: " name="numero" type="number" register={register} placeholder="Digite o número do imóvel" />
                <Field label="Complemento: " name="complemento" register={register} placeholder="Digite seu complemento (se houver)" />

                <Button type='submit' variant='success' className='mt-2'>Enviar</Button>
            </Form>
        </>

    )
}

export default Endereco