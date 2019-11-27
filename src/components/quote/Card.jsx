import React, { Component, Fragment } from 'react';
import './Card.css'

class QuotaCard extends Component {
  constructor(props){
    super(props)
    this.state = {

    }}

    render(){
      return(
        <Fragment>
          <div className = "quote_div">
            <div className ="quote_card">
              <span className="quote_title">Valor</span>
              <span className="quote_value">{this.props.formatedValue}</span>
              <span className="quote_title">Data Vencimento</span>
              <span className="quote_value">{this.props.dueDate}</span>
            </div>
            <button className ="button_payment" >Pagar</button>
          </div>  
        </Fragment>
      )
    }
}

export default QuotaCard