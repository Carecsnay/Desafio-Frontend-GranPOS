import axios from 'axios'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

const disney = () => {
    const [disneyData, setDisneyData] = useState([])

    useEffect(() => {
        axios.get('https://api.disneyapi.dev/character').then(response => {
            setDisneyData(response.data.data)
        })
    }, [])

    return (
        <>
            <Head>
                <title>Disney API</title>
            </Head>

            <div className='text-center my-5'>
                <h1>Disney API</h1>
                <p>Consumo da API da Disney utilizando hooks do react</p>
            </div>
            <Row sm={1} md={2} lg={3} xxl={4}>
                {disneyData.map((character =>
                    <Col key={character._id} className='mb-3'>
                        <Card className="h-100">
                            <Card.Img variant="top" src={character.imageUrl} height={'200px'} />
                            <Card.Body className='p-3'>
                                <Card.Title className='text-center'>{character.name}</Card.Title>
                                <Card.Text >
                                    <p className='text-center fw-bold'>Visto em:</p>
                                    <ul>
                                        {character.films.map(filme =>
                                            <li key={filme}>{filme}</li>
                                        )}
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default disney