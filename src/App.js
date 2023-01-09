import React, { useState, useEffect } from 'react';
import { Offcanvas, Form, Tooltip, OverlayTrigger, InputGroup,Button ,Accordion, Card } from 'react-bootstrap';
import RangeSlider from 'react-bootstrap-range-slider';

import NavbarComponent from './components/NavbarComponent';
import ItemCount from './components/ItemCount';

import products from './constants/products.json'; 



function App() {
 
  const [listProducts, setListProducts] = useState([]);
  const [ fontSize, setFontSize ] = useState(24);   
  const [ totalProducts, setTotalProducts ] = useState(0);   

  const handleTitle = (value, index) => { 
      let auxProduct = [...listProducts];
      auxProduct[index] = {...auxProduct[index], title: value};   
      setListProducts(auxProduct);
  } 
  
  const handleDecrement = (obj,index) => {
    let auxProduct = [...listProducts];
    let value = parseInt(auxProduct[index].amount) - 1;
    auxProduct[index] = {...auxProduct[index], amount: value};   
    setListProducts(auxProduct);
  }

  const handleIncrement = (obj,index) => {
    let auxProduct = [...listProducts];
    let value = parseInt(auxProduct[index].amount) + 1;
    auxProduct[index] = {...auxProduct[index], amount: value}; 
    setListProducts(auxProduct);
  }
  
  const handleTotal = () => {

    let TotalSum = 0;

    let total = listProducts.map((item) => {
      return TotalSum += ( parseInt(item.price) * parseInt(item.amount)  )
    })

    setTotalProducts(TotalSum)

  }

  useEffect( () => {
     setListProducts(products); 
  },[])
  
  useEffect( () => {
    handleTotal(); 
  },[listProducts])


  return (
    <div className="App">

      {/* Component Nav */}
      <NavbarComponent></NavbarComponent>

      {/* layaout */}
      <main className="container">

        <div className='row'>

          <div className='col-12'>

            {/* Titulo */}
            <div className='row mt-4'>
              <div className='col-12 col-md-12'>
                <div className='mt-4 mb-4'>
                  <h2>Configuraciones </h2>
                </div>
              </div>
            </div> 
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Ver Configuraciones</Accordion.Header>
                <Accordion.Body className='row'>
                   
                   <div className='col-12 col-md-12'>
                     <div className='mt-4 mb-4'>
                       <h5> Editar titulos</h5>
                       <p className="lead">Se actualizara de forma automatica los nombre de los productos </p>
                     </div>
                   </div>
                   <div className='row'>
                      {
                          listProducts.map( (item,index) => { 
                              return (
                                <div key={index} className='col-12 col-md-4 col-lg-4`'>
                                    <div className='row w-100 mx-0 d-inline-flex mb-3'>
                                      <div className='col-1 ps-2 pe-2 pt-2'>
                                        {index + 1}
                                      </div>
                                      <div className='col-10 px-0'>
                                        <Form.Control
                                          type="text"
                                          name="title"
                                          value={item.title || ''}
                                          onChange={(event) => { handleTitle(event.target.value, index) }}
                                          placeholder='Type title'
                                        />
                                      </div> 
                                    </div>
                                </div>
                              )
                          })

                      }
                   </div>

                   <div className='col-12 col-md-12'>
                     <div className='mt-4 mb-4'>
                       <h5>  Tamaño fuente de los titulos</h5>
                     </div>
                   </div>
									 <div className='row'>
                        <div className='row w-100 mx-0 d-inline-flex mb-3'>
                          <div className='col-12 px-0 mt-3'>
                              <RangeSlider
                                value={fontSize}
                                onChange={e => setFontSize(e.target.value)}
                                tooltipPlacement='top'
                                tooltip='on'
                              />
                          </div> 
                        </div>
                   </div>

                </Accordion.Body>
              </Accordion.Item>
            </Accordion>


            {/* Titulo */}
            <div className='row mt-4'>
              <div className='col-12 col-md-12'>
                <div className='mt-4 mb-4'>
                  <h2>Listado de productos </h2>
                </div>
              </div>
            </div>

            <div className='row mb-5'>
              {
                listProducts.map( (item,index) => { 
                    return (
                      <div key={index} className='col-12 col-md-4 col-lg-3 mt-5'>
                          <Card className="h-100 p-2">
                              <Card.Img variant="top" src={require(`${item.img}`)} />
                              <Card.Body className='d-flex flex-column justify-content-between'>
																<div>
																	<Card.Title style={{ fontSize:`${fontSize}px`}}>{item.title}</Card.Title>
																	<div>
                                  <h5 className='mt-4'>$ {item.price} </h5>
																		<ItemCount 
                                        index={index}
                                        item={item}
                                        handleIncrement={handleIncrement}
                                        handleDecrement={handleDecrement}
                                     />
																	</div>
																	<Card.Text>
																		{item.detail}
																	</Card.Text>
																</div>
                                <Button variant="primary" className='mt-3'> add to card</Button>
                                <a href='#' className='text-center mt-3'>Learn More</a>
                              </Card.Body>
                          </Card>
                      </div>
                    )
                })

              }
            </div>

            {/* Titulo */}
            <div className='row mt-4'>
              <div className='col-12 col-md-12'>
                <div className='mb-5'>
                  <h4>Total de productos: $ {totalProducts}</h4>
                </div>
              </div>
            </div>

           </div>

        </div>

      </main>

    </div>
  );

}

export default App;
