<script lang="ts">
  import { images } from '../../assets';
  import Hero from '../../components/Hero.svelte';
</script>

<Hero variant="content" type="About" />

<section class="secreader">
  <div class="container">
    <div class="reader">
      <div class="pane">
        <h1>About Us</h1>
        <div class="module">
          <p>Commuanuté de pratique Canadienne sur l'avortement (CAPS-CPCA) is a virtual community of practice for clinicians and non-clinicians who are interested in providing and supporting medication abortion. CAPS-CPCA was initiated by the Contraception and Abortion Research Team (CART) at the University of British Columbia. In 2017, the first version of the CAPS-CPCA website was released in a subscription-based format to facilitate communications on best practices among medication abortion providers. In 2023, in response to changes in the regulatory landscape and clinical guidelines of medication abortion, CART-GRAC and the Society of Obstetricians and Gynaecologists of Canada worked together to develop the second generation of CAPS-CPCA, which is publicly available and targets both healthcare providers and allied helping professionals such as community workers, social workers, doulas and counsellors. The second generation of CAPS-CPCA is the joint effort of many individuals and organizations, including:</p>
          <ul>
            <li>Website developer: Department of Computing Science, University of Alberta</li>
            <li>Graphic designer: Pinwheel Communication Design (www.pinwheeldesign.ca)</li>
            <li>Translator: Marianne Manuge</li>
            <li>Content reviewer: Andrea Houle, Anna Sherlock, Ashleigh McCullagh-Cheung, Coral Maloney, David Ram, Inna Genkin, Lyndsay Palsson, Mélina Castonguay, Nnamdi Ezugwu, Rahima Alani, Sarah Anderson, Vallée Carol-Anne</li>
          </ul>
          <p>We are also grateful for the financial support by Health Canada. The views expressed herein do not necessarily represent the views of Health Canada. Lastly, we would like to acknowledge the input and support from our partnering physicians, nurse practitioners, midwives and pharmacists, and from our collaborating organizations:</p>
          <img src={images.PartnerLogos} alt="partners"/>
        </div>
        
        <h1>Content Development Process</h1>
        <div class="module">
          <p>Canadian Abortion Provider Support – Communauté de pratique Canadienne sur l’avortement (CAPS-CPCA) is a web-based resource for clinicians and non-clinicians who are interested in providing and supporting medication abortion. CAPS-CPCA was initiated by the Contraception and Abortion Research Team-Groupe de recherche sur l’avortement et la contraception (CART-GRAC) and funded by Health Canada.</p>
          <p>The content in this website was co-developed by the CAPS-CPCA development team and providers of medication abortion across Canada. Through this co-development process, we attempted to capture the most common guidelines and practices and, whenever possible, explain the variation in these practices. Nevertheless, we acknowledge that the information we present here may differ from your knowledge and experiences.</p>
          <p>Please write to us at <a href="mailto:ubcfmpr-gcaps@mail.ubc.ca" class="ex">ubcfmpr-gcaps@mail.ubc.ca</a> if you have any feedback.</p>
          <p><b>The content presented in this website was updated as of November 2023</b> and developed through the three phases described below:</p>
          <h2>Phase 1: Resource curation</h2>
          <ol>
            <li>More than <b>200 written documents</b> on medication abortion such as protocols, checklists, guidelines, toolkits, manuals, instructions and factsheets were identified and retrieved by the content team through collaboration with various healthcare and advocacy organizations in Canada such as the Society of Obstetricians and Gynecologists of Canada (SOGC), National Federation of Abortion Canada, Canadian Pharmacists Association an Action Canada for Sexual Health & Rights.</li>
            <li>The title and content of these documents were then screened to narrow down the relevant resources into a list of over <b>60 documents</b>. These documents were included if they (1) discuss any aspects of medication abortion services and care, (2) are intended for healthcare providers such as physicians, nurse practitioners, pharmacists, and midwives, social workers and birth attendants, and (3) are applicable to Canadian context.</li>
            <li>Of 60 documents, 30 documents were deemed important and then reviewed and updated by <b>10 medication abortion providers (family and OB/GYN physicians, nurse practitioners, midwives and pharmacists)</b> to ensure that the most recent guidelines and practices are captured.</li>
          </ol>
          <h2>Phase 2: Content writing</h2>
          <ol>
            <li>The scope and skeletal framework of the online content were brainstormed and developed in consultation with the collaborating partners and medication abortion providers.</li>
            <li>The online content was first drafted by the content team through summarizing and synthesizing the information from the 60 documents.</li>
            <li>The first draft was reviewed by the 10 medication abortion providers, who provided feedback and suggestions to improve the accuracy, consistency and clarity of the content. The feedback and suggestions were then compiled, reviewed and incorporated by the content team. Discrepancies in the suggestions and comments were discussed and clarified. These suggestions and feedback were then incorporated to revise the first draft into the second draft.</li>
            <li>The second draft was reviewed by another 2 MA providers and their feedback and suggestions were reviewed and incorporated to create the third draft.</li>
            <li>The third draft was reviewed and revised by the SOGC, and then finalized for phase 3.</li>
          </ol>
          <h2>Phase 3: Content migration and testing</h2>
          <ol>
            <li>The online content developed in the Phase 2 was migrated to the CAPS-CPCA webpages.</li>
            <li>These webpages were then shared with additional 30 medication abortion providers with diverse background to test for inclusive and destigmatizing languages and for webpages’ functionality, navigation, look-and-feel, and content.</li>
            <li>Suggestions from users were incorporated to revise both the content and visual elements of the webpages.</li>
          </ol>
        </div>
        
        <h1>Bibliography</h1>
        <div class="module">
          <p>The content in this website was developed based on the information provided in the following references. Please note that the content in this website was updated as of November 2023 and this reference list may not capture the most recent guidelines, checklists and tools published after this date.</p>
          <ol>
            <li><a class="ref" href="https://caps.sogc.org/wp-content/uploads/2024/01/WHO1.pdf" target="_blank">
              Abortion care guideline. Geneva: World Health Organization; 2022.
            </a></li>
            <li><a class="ref" href="https://caps.sogc.org/wp-content/uploads/2024/01/VCOP2.pdf" target="_blank">
              Bancsi A & Grindrod K. Update on medical abortion. Canadian Family Physician; 2020; 66.
            </a></li>
            <li>Canada Abortion Providers Support, Planned Parenthood, & the University of British Columbia. Medical abortion prescriber checklist resource guide.</li>
            <li>Canadian Abortion Providers Support, Planned Parenthood, & the University of British Columbia. Medical abortion prescriber checklist.</li>
            <li>Costescu D, Guilbert E et al. Induced abortion: updated guidance during pandemics and periods of social disruption.</li>
            <li>Costescu D, Guilbert E et al. Medical abortion. Journal of Obstetrics and Gynaecology Canada, 2016; Volume 38, Issue 4, 366 – 389.</li>
            <li>Guilbert E, Costescu D, et al. Canadian protocol for the provision of medical abortion via telemedicine; SOGC 2020.</li>
            <li>Horvath S, Goyal V, Traxler S, Prager S. Society of Family Planning committee Consensus on Rh testing in early pregnancy. Contraception. 2022 Oct;114:1-5.</li>
            <li>Judith Soon & Nevena Rebic. Pharmacist checklist for medical abortion. 2018. CART-GRAC 2020.</li>
            <li>Judith Soon & Nevena Rebic. Pharmacist resource guide for medical abortion. 2018. CART-GRAC 2020.</li>
            <li>Linepharma International Limited. Health Canada MIFISO Product Monograph. Submission Control No: 265940. December 15, 2022.</li>
            <li>National Abortion Federation. Checklist for starting medical abortion services.</li>
            <li>National Abortion Federation. NAF Protocol for early abortion with mifepristone and misoprostol, 2016.</li>
            <li>Planned Parenthood Ottawa & the SHORE centre. What to expect during a medication abortion; 2017.</li>
            <li>Reproductive Health Access Project. Early abortion options; 2022.</li>
            <li>Reproductive Health Access Project. Integrating early abortion services into primary care; 2019.</li>
            <li>Royal College of Obstetricians and Gynaecologists. Best practice in abortion care; 2022.</li>
            <li>Wellness Within. Accessing Abortion in Canada.</li>
            <li>Women’s College Hospital. Client information about evidence-based telemedicine medication abortion. Adapted from Choice in Health clinic; 2020.</li>
            <li>World Health Organization. Abortion care guideline; 2022.</li>
            <li>Society of Obstetricians and Gynaecologists of Canada. Guideline No. 448: Prevention of Rh D Alloimmunization; 2024.</li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  img {
    width: 100%;
    margin-top: 2rem;
  }
  .secreader {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .reader {
    position: relative;
    display: flex;
    overflow: hidden;
    margin-bottom: 5rem;
    background:#cbced1;
    border: 3px solid var(--Primary);
    border-radius: 1.15rem;
  }
  .pane {
      flex: 1;
      padding: 0 4rem 4rem 4rem;
      min-height: 50rem;
  }
  h1 {
      font-family: 'Open Sans', sans-serif;
      font-size: 2rem;
      font-weight: 600;
      padding: 1.5rem 4.5rem;
      color: var(--Primary);
  }
  .pane h1 {
      margin-top: 4rem;
      background: var(--Primary);
      color: white;
  }
  ol {
    list-style-type: decimal;
    padding-left: 2rem;
  }
  li {
    list-style-type: decimal;
  }
</style>