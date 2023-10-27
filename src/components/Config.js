import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add_config } from '../redux/configReducer';
import { add_saldo } from '../redux/cartaoReducer';
import '../style/Config.css'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Config(){

    const { saldo, passSimplesSem, passDuplasSem } = useSelector( (state) => state.config);

    let configState = {
        saldo: saldo,
        passSimplesSem: passSimplesSem,
        passDuplasSem: passDuplasSem
    };

    const dispatch = useDispatch();

    const handleChange = (e) => {
        configState[e.target.id] = e.target.value.replace(",",".");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(add_config(configState));
        toast("Configurações salvas.", {type: "success", toastId: "config-salva"});
    }

    const handleSubmitSaldo = (e) => {
        e.preventDefault();
        dispatch(add_saldo(configState.saldo));
        toast("Saldo atualizado.", {type: "success", toastId: "saldo-salvo"});
    }

    return(

        <div className="config card container">
            <div className="card-content atualiza-saldo">
                <span className="card-title"> Atualizar saldo</span>
                <form onSubmit={handleSubmitSaldo}>

                    <label htmlFor="saldo">Saldo:</label> <br/>
                    <input type="text" id="saldo" placeholder='e.g. 68.30' onChange={handleChange}/> <br/>

                    <input className="btn submit" type="submit" value="Salvar"/> <br/>
                </form>
            </div>

            <div className="card-content config-pass">
                <span className="card-title">Configuração</span>
                <form onSubmit={handleSubmit}>

                    <label htmlFor="passSimplesSem">Passagens Simples por semana: </label> <br/>
                    <input type="text" id="passSimplesSem" placeholder='2' onChange={handleChange}/> <br/>

                    <label htmlFor="passDuplasSem">Passagens Duplas por semana:</label> <br/>
                    <input type="text" id="passDuplasSem" placeholder='10' onChange={handleChange}/> <br/>

                    <input className="btn submit" type="submit" value="Salvar"/> <br/>
                </form>
            </div>
        </div>

    );
}

export default (Config);
