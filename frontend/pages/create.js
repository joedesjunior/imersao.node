import React, {useState} from 'react';
import {Jumbotron, Container } from 'reactstrap';
import './_app';
import Menu from '../components/Menu';

function create() {

    const [meta, setMeta] = useState({
        name: '', 
        description: '', 
        status: '',
    })

    const [ response, setResponse] = useState({
        formSave: false, 
        type: '',
        message: '', 
    })

    const onchangeInput = e => setMeta({...meta, [e.target.name]: e.target.value})

    const sendMeta = async e => {
        
        e.preventDefault();
        
        setResponse({formSave: true});

        try{
        const res = await fetch(`http://localhost:8000/cadastrarMetas`, {
            method: 'POST', 
            body:   JSON.stringify(meta),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const responseEnv = await res.json();

        if(responseEnv.error) {
            setResponse({
                formSave: false, 
                type: 'error',
                message: responseEnv.message, 
            })
        } else {
            setResponse({
                formSave: false, 
                type: 'success',
                message: responseEnv.message, 
            })
        }

    } catch (err) {
        setResponse({
            formSave: false, 
            type: 'error',
            message: 'Error', 
        })
    };
}

    return (
        <>
        <Menu />
        <Jumbotron fluid className="form">
        <Container fluid> 
        <h1 className="display-3">Fluid jumbotron</h1>

        {response.type === 'error' ? <p>{response.message}</p> : ""}
        {response.type === 'success' ? <p>{response.message}</p> : ""}

        <form onSubmit={sendMeta}>
            <label>Nome: </label>
            <input type="text" name="name" id="name" placeholder="Nome da meta: " onChange={onchangeInput} />
            <br/>

            <label>Descrição: </label>
            <input type="text" name="description" id="description" placeholder="Descrição da meta: " onChange={onchangeInput} />
            <br/>

            <label>Status: </label>
            <input type="text" name="status" id="status" placeholder="Status da meta: " onChange={onchangeInput}/>
            <br/>

            {response.formSave ? <button type="submit" disabled>Cadastrando...</button> : <button type="submit">chch</button> }
        </form>
        </Container>
        </Jumbotron>
        </>
    );
}

export default create;