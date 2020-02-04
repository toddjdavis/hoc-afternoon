import React from 'react'

const CurrencyDisplay = (props) => (    
    <p>
        Us Dollar $ {props.amount.toFixed(2)} - {props.currency.name}{' '}
        {props.currency.symbol}
        {(props.amount * props.currency.rate).toFixed(2)}
    </p>        
)

export default CurrencyDisplay