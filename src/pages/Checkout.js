import React, { Component } from 'react';
import Loading from '../components/Loading'
import { Elements, CardElement, injectStripe } from 'react-stripe-elements';
import Button from '../components/Button';
import checkoutService from '../lib/checkout-service';
import { withParticipation } from '../providers/ParticipationProvider';
import { compose } from 'recompose';
import './checkout.css'
import MessageFlash from '../components/MessageFlash';


class Checkout extends Component {

  state = {
    isLoading: true,
    isPaymentLoading: false,
    isPaymentOk: false
  }

  componentDidMount() {
    this.setState({
      isLoading: false,
    })
  }


  handleClick = async () => {
    try {

      const { stripe } = this.props;
      const { amount } = this.props.participationState;
      const name = "Joan";
      const data = await stripe.createToken({
        name
      })
      if(!data.error){
        this.setState({
          isPaymentLoading: true
        })
      }
      const token = data.token.id;

      const payment = await checkoutService.create(amount, token)
      console.log(payment);
      if (payment) {
        this.setState({
          isPaymentLoading: false,
          isPaymentOk: true
        })
      }
    } catch (error) {
    }
  }

  render() {
    const { isLoading, isPaymentOk } = this.state;
    const { amount } = this.props.participationState;
    return (
      <div className="container stripe">
        {isLoading && <Loading />}
        {!isLoading && <>
          <div className="stripe-wrapper">
            <h1>Detalles del pago:</h1>
            <p className="stripe-total-amount"><span>Total:</span> {amount}€</p>
            <div className="form-row">
              <div className="stripe-input">
                <label className="stripe-label" htmlFor="card-element">Tarjeta de credito</label>
                <div id="card-element">
                  <CardElement className='StripeElement' style={{
                    base: {
                      iconColor: '#00041A',
                      fontWeight: 400,
                      fontSize: '15px',
                      '::placeholder': {
                        color: '#555',
                      }
                    }
                  }} />
                </div>
              </div>
              <div id="card-errors" role="alert"></div>
            </div>
            <Button text={this.state.isPaymentLoading ? 'Loading' : 'Pagar'} onClick={this.handleClick} />
            {isPaymentOk && <>
              <MessageFlash
                text="Pago realizado correctamente"
                modifier="done"
                displayInit="alert-show"
              />
            </>}
          </div>

        </>}
      </div>
    );
  }
}
export default compose(injectStripe, withParticipation)(Checkout);