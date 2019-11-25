import React, { Component } from 'react';
import './Information.css'

class InformationCard extends Component {
  constructor(props){
    super(props)
    this.state = {
      title:'',
      value:'',
    }
    this.getTitle = this.getTitle.bind(this)
  }



    getTitle() {
      console.log(this.props);
      
      switch(this.props.title){
        case "amountTaken":
          this.setState({title: 'Empréstimo Total', value: this.props.info.amountTaken})
          break
        case "amountPayd":
          this.setState({title: 'Valor Pago', value: this.props.info.amountPayd})
          break
        case "totalAmountInTaxes":
          this.setState({title: 'Valor da Parcela', value: this.props.info.totalAmountInTaxes})
          break
      }
    }

    componentDidMount() {
      this.getTitle()
    }

    render(){
      return(
        <div className ="info_card">
          <span className="information_title">{this.state.title}</span>
          <span className="information_value">R$: {this.state.value},00</span>
        </div>
      )
    }
}

export default InformationCard