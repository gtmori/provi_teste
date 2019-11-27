import React, { Component, Fragment } from "react";
import axios from "axios";

import Header from "../components/header/Header";
import QuotaCard from "../components/quote/Card";
import InformationCard from "../components/information/Information";
import "./Dashboard.css";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      dataActive: false
    };
    this.showCards = this.showCards.bind(this);
  }

  getData() {
    axios
      .get("http://www.mocky.io/v2/5c923b0932000029056bce39")
      .then(response => {
        let dataCopy = [...this.state.data];
        dataCopy = response.data;
        console.log(response.data);

        this.setState({ data: dataCopy }, () => this.changeActiveData());
      });
  }

  componentDidMount() {
    this.getData();
  }

  changeActiveData() {
    this.setState({ dataActive: true });
  }

  showCards() {
    return this.state.data.installments.map((data, index) => {
      return <QuotaCard key={index} {...data} />;
    });
  }

  render() {
    return (
      <Fragment>
        <Header {...this.state.data} />
        <div className="pad_section">
          <h2>Informações Gerais</h2>
          <div className="general_info">
            {this.state.dataActive ? (
              <InformationCard title="amountTaken" info={this.state.data} />
            ) : (
              console.log("no data")
            )}
            {this.state.dataActive ? (
              <InformationCard title="amountPayd" info={this.state.data} />
            ) : (
              console.log("no data")
            )}
            {this.state.dataActive ? (
              <InformationCard
                title="totalAmountInTaxes"
                info={this.state.data}
              />
            ) : (
              console.log("no data")
            )}
          </div>
        </div>
        <div className="pad_section">
          <h2>Parcelas</h2>
          <div className="quote_info">
            {this.state.dataActive ? this.showCards() : console.log("no data")}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Dashboard;
