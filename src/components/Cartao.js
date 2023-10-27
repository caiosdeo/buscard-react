import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { update_cartao } from '../redux/cartaoReducer';
import '../style/App.css'
import '../style/Config.css'

function Cartao () {

    const { saldo, passSimples, passDuplas } = useSelector( (state) => state.cartao);
    const dispatch = useDispatch();

    return(
        <div className="cartao card container">
            <span className="card-title">Cartão</span>
            <div className="card-content">
                <table>
                    <tbody>
                        <tr><td className='left-col'>Saldo:</td><td>R$ {Number(saldo).toFixed(2).replace(".",",")}</td></tr>
                        <tr><td className='left-col'>Passagens Simples:</td><td>{passSimples}</td><td><button className="btn blue" id="passSimples" onClick={ () => dispatch(update_cartao("passSimples")) }>-1</button></td></tr>
                        <tr><td className='left-col'>Passagens Duplas:</td><td>{passDuplas}</td><td><button className="btn blue" id="passDuplas" onClick={ () => dispatch(update_cartao("passDuplas")) }>-1</button></td></tr>
                    </tbody>
                </table>
            </div>    
        </div>
    );
}

export default (Cartao);