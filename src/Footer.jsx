import React from 'react'

const Footer = () => {
  return (
    <div>
<hr />
  <div class="foot">

      <div class="foot-half1">
        <h6 class="foot-word1">Download IGP App:</h6>
        <button type="button" class="Appledownload"><i class="fab fa-apple"></i> Download</button>
        <button type="button" class="googledownload"><i class="fab fa-google-play"></i> Download</button>
      </div>
      <div class="foot-half2">
        <h6 class="foot-word2">Follow Us:</h6>
        <i class="fab fa-twitter foot-icon fa-2x"></i>
        <i class="fab fa-facebook-f foot-icon fa-2x"></i>
        <i class="fab fa-instagram foot-icon fa-2x"></i>
        <i class="fas fa-envelope foot-icon fa-2x"></i>
      </div>

    </div>
    <div class="payment">
      <p class="securepayment"><small>Secure Shopping :   </small></p>
      <img src="https://cdn.igp.com/raw/upload/assets/images/siteseal_gd_3_h_l_m.png" alt="" />

      <p class="Copyright"><small>Copyright © 2000-2022. IGP.com. All rights reserved</small></p>
      <p class="paymentmethod"><small>Payment Methods: </small></p>
      <img class="paymentphoto"src="https://www.kindpng.com/picc/m/44-440249_paypal-payment-methods-icons-hd-png-download.png" alt="" />

    </div>
    </div>
  )
}

export default Footer