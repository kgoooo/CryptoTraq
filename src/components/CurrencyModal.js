import React, { Component } from 'react';
import ReactModal from 'react-modal';
import SupportedCurrencies from './SupportedCurrencies';

class CurrencyModal extends Component {
  constructor(props) {
		super(props);
		
		this.state = { isOpen: false };
  }
  handleOpenModal = () => {
    this.setState({ isOpen: true });
	}
	
	handleCloseModal = () => {
    this.setState({ isOpen: false });		
	}
  render() {
    let isOpen = this.props.isOpen;
    return (
      <div>
				<SupportedCurrencies modalOpen={this.handleOpenModal} />
				<ReactModal 
					isOpen={this.state.isOpen}
					contentLabel="Modal showing available currencies supported by this app."
					className="Modal"
					overlayClassName="Overlay"
				>
					<button className="btn btn--light" onClick={this.handleCloseModal}>X</button>
				</ReactModal>
      </div>
    );
  }
}

export default CurrencyModal;