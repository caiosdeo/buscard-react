import React from 'react';
import { useSelector } from 'react-redux';

const Recarga = () => {

    const { saldo } = useSelector( (state) => state.cartao);
    const { passSimplesSem, passDuplasSem } = useSelector( (state) => state.config);

    let recarga = 0;

    let passSimplesMes = 4 * passSimplesSem;
    let passDuplasMes = 4 * passDuplasSem;

    let previsaoRecarga = (passSimplesMes * 3.75) + (passDuplasMes * 5.63);

    recarga = previsaoRecarga - saldo;

    return(

        <div className="recarga card container">
            <span className="card-title">Recarga</span>
            <div className="card-content">
                <table>
                    <tbody>
                        <tr><td className='left-col'>Saldo</td><td>R$ {Number(saldo).toFixed(2).replace(".",",")}</td></tr>
                        <tr><td className='left-col'>Passagens simples no mês:</td><td>{passSimplesMes}</td></tr>
                        <tr><td className='left-col'>Passagens duplas no mês:</td><td>{passDuplasMes}</td></tr> 
                        <tr><td className='left-col'>Recarga</td>
                            <td>R$ {
                                (recarga > 0) ? recarga.toFixed(2).replace(".",",") : '0,00'
                            }</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    );
}

export default (Recarga);
