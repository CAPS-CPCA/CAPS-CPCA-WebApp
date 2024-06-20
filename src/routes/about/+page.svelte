<script lang="ts">
  import {images} from '../../assets/index';
  import { data } from '$lib/translations';
</script>

<style>
  .about-section {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      background-color: #f0f0f0;
    }

  .about-text {
    max-width: 600px; 
    margin: 0 20px; 
  }

  .about-image {
    border-radius: 50%;
    width: 300px; 
    height: auto;
  }

  .about-us-box {
    background-color: #cccccc; 
    width: calc(80% - 40px);
    padding: 20px; 
    min-height: calc(100vh - 200px); 
    border: 1px solid black; 
    border-radius: 10px; 
    margin-bottom: 50px;
    justify-content: space-between; 
    align-items: center; 

}

.about-us-wrapper {
    display: flex;
    justify-content: center; 
}

.inner-box {
    background-color: white; 
    border: 1px solid black; 
    padding: 10px; 
    display: flex; 
    flex-direction: column;
    align-items: center; 
    width: 97%;
    height: 250px;
    margin: 10px;
    height: auto;
}

.box-title {
    background-color: #011627; ; 
    color: white; 
    padding: 5px 10px; 
    margin-bottom: 10px; 
    width: 100%;
    grid-row: 1;
}

</style>
<div class="about-section">
   <img src="{images.AboutUsBanner}" alt="Banner" class="about-image">
   <div class="about-text">
      <h1>{@html $data.aboutus.title}</h1>
          {#each $data.aboutus.paragraphs as paragraph}
              <p>{@html paragraph}</p>
          {/each}
  </div>
</div>

<section>
  <div class="about-us-wrapper">
  <div class="about-us-box">
    <div class="inner-box">
      <div class="box-title">
        <h3>About Us</h3> </div>
        <div class="box-content">
          <p>Commuanuté de pratique Canadienne sur l'avortement (CAPS-CPCA) is a virtual community of practice for clinicians and non-clinicians who are interested in providing and supporting medication abortion.</p>
          <p>CAPS-CPCA was initiated by the Contraception and Abortion Research Team (CART) at the University of British Columbia. In 2017, the first version of the CAPS-CPCA website was released in a subscription-based format to facilitate communications on best practices among medication abortion providers. In 2023, in response to changes in the regulatory landscape and clinical guidelines of medication abortion, CART-GRAC and the Society of Obstetricians and Gynaecologists of Canada worked together to develop the second generation of CAPS-CPCA, which is publicly available and targets both healthcare providers and allied helping professionals such as community workers, social workers, doulas and counsellors. The second generation of CAPS-CPCA is the joint effort of many individuals and organizations, including:</p>
          <ul>
            <li>Website developer: Department of Computing Science, University of Alberta</li>
            <li>Translator: Marianne Manuge</li>
            <li>Content reviewer: Andrea Houle, Anna Sherlock, Ashleigh McCullagh-Cheung, Coral Maloney, David Ram, Inna Genkin, Lyndsay Palsson, Mélina Castonguay, Nnamdi Ezugwu, Rahima Alani, Sarah Anderson, Vallée Carol-Anne</li>
          </ul>
        </div>
      </div>
    <div class="inner-box">
      <div class="box-title">
        <h3>Content Development Process</h3> </div>
        <div class="box-content">
          <p>Canadian Abortion Provider Support – Communauté de pratique Canadienne sur l’avortement (CAPS-CPCA) is a web-based resource for clinicians and non-clinicians who are interested in providing and supporting medication abortion. CAPS-CPCA was initiated by the Contraception and Abortion Research Team-Groupe de recherche sur l’avortement et la contraception (CART-GRAC) and funded by Health Canada.</p>
        </div>
      </div>
    <div class="inner-box">
      <div class="box-title">
        <h3>Bibliography</h3> </div>
        <div class="box-content">
          <p>The content in this website was developed based on the information provided in the following references. Please note that the content in this website was updated as of November 2023 and this reference list may not capture the most recent guidelines, checklists and tools published after this date.</p>
        </div>
      </div>
  </div>
</div>
</section>