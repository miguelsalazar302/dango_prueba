import * as React from 'react'
import {
    Container, 
    Navbar,
		Form,
		InputGroup
} from 'react-bootstrap';

import logo from '../assets/logo-violeta.png';

const ItemCount = ({item,index,handleIncrement,handleDecrement}) => {

    const onDecrement = (obj,index) => {
      if( obj.amount > 1){
        handleDecrement(obj,index)
      }
    }

    const onIncrement = (obj,index) => {
      handleIncrement(obj,index)
    }

    return (
			<InputGroup className="mb-3">
        <InputGroup.Text style={{cursor:'pointer'}} onClick={() => onDecrement(item,index)}> - </InputGroup.Text>
        <Form.Control className='text-center' aria-label="Amount" value={item.amount}  readOnly/>
        <InputGroup.Text style={{cursor:'pointer'}} onClick={() => onIncrement(item,index)}> + </InputGroup.Text>
      </InputGroup>
    )
}

export default ItemCount 
