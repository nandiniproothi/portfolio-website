(function() {
    var stripe = Stripe('env.API_KEY');
  
    var checkoutButton = document.getElementById('checkout-button-price_1ISvziIVaoq2crjznFhPL6Hh');
    checkoutButton.addEventListener('click', function () {
      /*
       * When the customer clicks on the button, redirect
       * them to Checkout.
       */
      stripe.redirectToCheckout({
        lineItems: [{price: 'price_1ISvziIVaoq2crjznFhPL6Hh', quantity: 1}],
        mode: 'payment',
        /*
         * Do not rely on the redirect to the successUrl for fulfilling
         * purchases, customers may not always reach the success_url after
         * a successful payment.
         * Instead use one of the strategies described in
         * https://stripe.com/docs/payments/checkout/fulfill-orders
         */
        successUrl: 'https://nandiniproothi.glitch.me',
        cancelUrl: 'https://nandiniproothi.glitch.me',
      })
      .then(function (result) {
        if (result.error) {
          /*
           * If `redirectToCheckout` fails due to a browser or network
           * error, display the localized error message to your customer.
           */
          var displayError = document.getElementById('error-message');
          displayError.textContent = result.error.message;
        }
      });
    });
  })();