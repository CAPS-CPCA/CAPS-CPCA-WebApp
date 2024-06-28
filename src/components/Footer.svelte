<script>
  import { images } from '../assets/index';
  import { data } from '$lib/translations';
  </script>

  <footer>
    <div class="container">
      <a class="top" href="#top"><img src={images.BacktoTop} alt="back to top"/></a>
      <div class="social">
        {#each $data.footer.social as i}
          <li>{i}</li>
        {/each}
      </div>
      <div class="bottom">
        <a href="http://sogc.org/"><img src={$data.footer.logo} alt="footer logo" /></a>
        <div class="contact">
          <ul>
            {#each Object.entries($data.footer.contact) as [key, value]}
              {#if key !== 'mailto:info@sogc.com'}
                <li>{value}</li>
              {:else}
                <li><a href={key}>{value}</a></li>
              {/if}
            {/each}
          </ul>
        </div>
        <p class="copyright">{$data.footer.copyright}</p>
      </div>
    </div>
  </footer>

<style>
  a {
    transition: all 0.2s ease-in-out;
  }
  .top {
    position: absolute;
    top: 1.5rem;
    width: 2rem;
    height: 2rem;
    filter:invert();
    transition: all 0.3s ease-in-out;
  }
  .top img {
    width: 100%;
    height: 100%;
  }
  .top:hover {
    filter:invert(0.8);
  }
  footer {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .container {
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    padding: 4.375rem 11.25rem;
    background: linear-gradient(to bottom, #292f3c 0%, #031f2d 100%);
  }
  .social {
    display: flex;
    align-items: center;
    gap: 2rem;
    margin: 4rem 0 2rem 0;
  }
  .bottom {
    box-sizing: border-box;
    position: relative;
    display: flex;
    align-items: end;
    gap: 3rem;
    width: 100%;
    border-top: 3px solid #4e7385;
    padding-top: 2rem;
  }
  .bottom a:hover {
    opacity: 0.75;
  }
  .contact {
    display: flex;
    border-left: 3px solid #4e7385;
  }
  .copyright {
    position: absolute;
    right: 0;
    bottom: 0;
    color: #4e7385;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
  .social li {
    list-style-type:none;
    width: 3.125rem;
    height: 3.125rem;
    border: 2px solid #ffffff;
    border-radius: 50%;
    transition: all 0.3s ease-in-out;
  }
  .social li:hover {
    border-color: #4e7385;
  }
  .contact ul {
    list-style-type:none;
    color: #4e7385;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    margin: 0;
  }
  .contact li {
    list-style-type:none;
  }
  .contact li:first-of-type {
    font-weight: 700;
    margin: 1rem 0;
  }
  .contact li a { 
    color: #4e7385;
  }
  .contact li a:hover {
    color: #ffffff;
  }
</style>