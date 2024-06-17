<script>
    import { images } from '../assets/index';
  </script>

  <style>
    footer {
      background-color: #2f3e52;
      color: #ffffff;
      padding: 20px 0;
      text-align: center;
    }

    .footer-content {
      max-width: 1200px;
      margin: 0 auto;
      display: flex; 
      flex-direction: column; 
      align-items: center; 
    }

    .footer-icons {
      margin-bottom: 20px;
    }

    .footer-icons a {
      margin: 0 10px;
      color: #ffffff; 
      text-decoration: none;
    }

    .footer-icons a:hover {
      color: #ccc; 
    }

    .footer-contact {
      text-align: left; 
      margin-bottom: 20px;
    }

    .footer-contact p {
      margin: 5px 0;
      color: #ffffff; 
    }

    .footer-contact h3 { 
      color: #ffffff; 
      margin-bottom: 5px;
    }

    .footer-bottom {
      border-top: 1px solid #444;
      padding-top: 10px;
      font-size: 14px;
      display: flex; 
      justify-content: space-between; 
      align-items: center; 
    }

  </style>

  <footer>
    <div class="footer-content">
        <div>
            <i class="fa fa-arrow-up"></i>
        </div>
      <img src={images.EnFooter} alt="The Society of Obstetricians and Gynaecologists of Canada" class="footer-logo" />
      <div class="footer-icons">
        <a href=""><i class="fa fa-share-alt"></i></a>
        <a href=""><i class="fa fa-print"></i></a>
        <a href="https://www.facebook.com/sogc.org" target = "_blank"><i class="fa fa-facebook"></i></a>
        <a href="https://x.com/SOGCorg" target = "_blank" ><i class="fa fa-twitter"></i></a>
        <a href="https://www.youtube.com/user/sexandu" target = "_blank" ><i class="fa fa-youtube"></i></a>
      </div>
      <div class="footer-contact">
        <h3>CONTACT INFO</h3>
        <p>2781 Lancaster Road, Suite 200</p>
        <p>Ottawa, Ontario, K1B 1A7</p>
        <p>(800) 561-2416</p>
        <p>(613) 730-4192</p>
        <p>info@sogc.com</p>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2024 | </p>
        <span>Privacy Policy</span>
        <span>Terms of Use</span>
        <span>About</span>
      </div>
    </div>
  </footer>

  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />