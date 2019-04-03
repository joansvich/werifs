import React, { Component } from 'react';
import Loading from '../components/Loading'
import { Elements, CardElement, injectStripe } from 'react-stripe-elements';
import Button from '../components/Button';
import checkoutService from '../lib/checkout-service';
import { withParticipation } from '../providers/ParticipationProvider';
import { withAuth } from '../providers/AuthProvider';
import { compose } from 'recompose';
import './checkout.css'
import MessageFlash from '../components/MessageFlash';


class Checkout extends Component {

  state = {
    isLoading: true,
    isPaymentLoading: false,
    showMessage: false
  }

  componentDidMount() {
    this.props.changeShowCard();
    this.setState({
      isLoading: false,
    })
  }

  componentWillUnmount() {
    clearInterval(this.timeoutId);
  }


  handleClick = async () => {
    try {
      const { stripe } = this.props;
      const { amount } = this.props.participationState;
      const name = this.props.user.username;
      const { listParticipation } = this.props.participationState
      const data = await stripe.createToken({
        name
      })

      if (!data.error) {
        this.setState({
          isPaymentLoading: true
        })
      }
      const token = data.token.id;

      const payment = await checkoutService.create(amount, token, listParticipation)
      if (payment) {
        console.log(payment);
        if (payment.status === "succeeded") {
          
        }
        this.setState({
          isPaymentLoading: false,
          showMessage: true
        })
        this.timeout();
      }
    } catch (error) {
    }
  }

  timeout = () => {
    this.timeoutId = setTimeout(() => {
      this.setState({
        showMessage: false
      })
      this.props.getParticipation();
    }, 3900)
  }


  render() {
    const { isLoading, showMessage } = this.state;
    const { amount } = this.props.participationState;
    let showCheckout = this.props.participationState.listParticipation.length;
    return (
      <div className="container stripe">
        {showCheckout && <>
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
              <Button
                type="normal"
                text={this.state.isPaymentLoading ? 'Loading' : 'Pagar'}
                onClick={this.handleClick}
              />
              {showMessage && <>
                <MessageFlash
                  text="Pago realizado correctamente"
                  status="done"
                />
              </>}
            </div>

          </>}
        </>}
        {!showCheckout && this.props.history.push('/')}
      </div>
    );
  }
}
export default compose(injectStripe, withParticipation, withAuth)(Checkout);