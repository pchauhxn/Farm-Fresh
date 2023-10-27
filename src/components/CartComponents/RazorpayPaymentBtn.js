import React, { useEffect } from 'react'

export default function RazorpayPaymentBtn({id,amount}) {
    useEffect(() => {
        const options = {
          key: 'rzp_test_3VhFJzygakGkMD', // Enter the Key ID generated from the Dashboard
          amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
          currency: 'INR',
          name: 'Farm Fresh',
          description: 'Test Transaction',
          image: 'https://example.com/your_logo',
          order_id: id,
          handler: function (response) {
            alert(response.razorpay_payment_id);
            alert(response.razorpay_order_id);
            alert(response.razorpay_signature);
          },
          prefill: {
            name: 'Rakshit',
            email: 'gaurav.kumar@example.com',
            contact: '9000090000',
          },
          notes: {
            address: 'Razorpay Corporate Office',
          },
          theme: {
            color: '#3399cc',
          },
        };
    
        const rzp1 = new window.Razorpay(options);
    
        rzp1.on('payment.failed', function (response) {
          alert(response.error.code);
          alert(response.error.description);
          alert(response.error.source);
          alert(response.error.step);
          alert(response.error.reason);
          alert(response.error.metadata.order_id);
          alert(response.error.metadata.payment_id);
        });
    
        document.getElementById('rzp-button1').addEventListener('click', function (e) {
          rzp1.open();
          e.preventDefault();
        });
      }, []);
    
  return (
    <div>
      <button >Pay Razorpay</button>
    </div>
  )
}
