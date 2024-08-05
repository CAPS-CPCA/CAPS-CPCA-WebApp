<script lang="ts">
  import { Bibliography } from '$lib/store';
  import { images } from '../../assets';
  import Hero from '../../components/Hero.svelte';
</script>

<Hero type="content" id="A" />

<section class="secreader">
  <div class="container">
    <div class="reader">
      <div class="pane">
        <h1>À propos de nous</h1>
        <div class="module">
          <p>Canadian Abortion Providers Support – Communauté de pratique Canadienne sur l’avortement (CAPS-CPCA) est une communauté de pratique virtuelle pour les cliniciens et non-cliniciens qui souhaitent fournir et soutenir l’avortement par médicaments. CAPS-CPCA a été lancé par l’équipe de recherche sur la contraception et l’avortement-Groupe de recherche sur l’avortement et la contraception (CART-GRAC) de l’Université de la Colombie-Britannique. En 2017, la première version du site web CAPS-CPCA a été publiée sous forme d’abonnement pour faciliter la communication sur les meilleures pratiques entre les prestataires d’avortement par médicaments. En 2023, en réponse aux changements dans le paysage réglementaire et aux lignes directrices cliniques sur l’avortement par médicaments, le CART-GRAC et La SOGC ont travaillé ensemble pour développer la deuxième génération du CAPS-CPCA, qui est accessible au public et cible à la fois les soins de santé prestataires et professionnels alliés tels que les travailleurs communautaires, les travailleurs sociaux, les doulas et les conseillers. Nous sommes reconnaissants pour les contributions et le soutien de nos médecins, infirmières praticiennes, sages-femmes et pharmaciens partenaires, ainsi que de nos organisations collaboratrices:</p>
          <ul>
            <li>Website developer: Department of Computing Science, University of Alberta</li>
            <li>Graphic designer: Pinwheel Communication Design (www.pinwheeldesign.ca)</li>
            <li>Translator: Marianne Manuge</li>
            <li>Content reviewer: Andrea Houle, Anna Sherlock, Ashleigh McCullagh-Cheung, Coral Maloney, David Ram, Inna Genkin, Lyndsay Palsson, Mélina Castonguay, Nnamdi Ezugwu, Rahima Alani, Sarah Anderson, Vallée Carol-Anne</li>
          </ul>
          <p>Nous tenons également à remercier le Département des sciences informatiques de l’Université de l’Alberta pour le développement du site web CAPS-CPCA, Pinwheel Communication Design (www.pinwheeldesign.ca) pour la conception des infographies et des illustrations du site web, et Marianne Manuge pour la traduction du contenu en français. Nous sommes également reconnaissants du soutien financier de Santé Canada. Les opinions exprimées ici ne représentent pas nécessairement celles de Santé Canada:</p>
          <img src={images.PartnerLogos} alt="partners"/>
        </div>
        
        <h1>Content Development Process</h1>
        <div class="module">
          <p>Le contenu de ce site Web a été co-développé par l’équipe de développement du CAPS-CPCA et des fournisseurs d’avortement par médicaments à travers le Canada. </p>
          <p>Grâce à ce processus de co-développement, nous avons tenté de capturer les lignes directrices et les pratiques les plus courantes et, dans la mesure du possible, d’expliquer les variations de ces pratiques. Cependant, nous reconnaissons que les informations que nous présentons ici peuvent différer de vos connaissances et de votre expérience.</p>
          <p>Veuillez nous écrire à <a href="mailto:ubcfmpr-gcaps@mail.ubc.ca" class="ex">ubcfmpr-gcaps@mail.ubc.ca</a> si vous avez des commentaires.</p>
          <p><b>Le contenu présenté sur ce site web a été mis à jour en novembre 2023</b> et développé à travers les trois phases décrites ci-dessous:</p>
          <h2>Phase 1: Conservation des ressources</h2>
          <ol>
            <li>Plus de <b>200 documents écrits</b> sur l’avortement tels que des protocoles, des listes de contrôle, des lignes directrices, des boîtes à outils, des manuels, des instructions et des fiches d’information, ont été identifiés et récupérés par l’équipe chargée du contenu, grâce à la collaboration avec diverses organisations de soins de santé et de défense des droits au Canada, telles que La SOGC, la Fédération Nationale de l’Avortement (NAF), l’Association des pharmaciens du Canada et Action Canada pour la santé et les droits sexuels.</li>
            <li>Le titre et le contenu de ces documents ont ensuite été examinés afin de limiter les ressources pertinentes à une liste de plus de <b>60 documents</b>.  Ces documents ont été inclus s’ils (1) abordent les aspects des services et soins d’avortement par médicaments, (2) sont destinés aux professionnels de la santé tels que les médecins, les infirmières praticiennes spécialisées, les pharmaciens, les sages-femmes, les travailleurs sociaux et les aides à l’accouchement, et (3) sont applicables au contexte canadien.</li>
            <li>Sur les 60 documents, 30 ont été jugés importants, puis examinés et mis à jour par <b>10 fournisseurs d’avortement par médicaments (médecins de famille et obstétriciens / gynécologues, infirmières praticiennes spécialisées, sages-femmes et pharmaciens)</b>  afin de s’assurer que les lignes directrices et les pratiques les plus récentes sont respectées.</li>
          </ol>
          <h2>Phase 2: Rédaction de contenu</h2>
          <ol>
            <li>La portée et le cadre du contenu en ligne ont été examinés et développés en consultation avec des partenaires collaborateurs et des fournisseurs d’avortement par médicaments.</li>
            <li>Le contenu en ligne a été initialement rédigé par l’équipe de contenu en résumant et en synthétisant les informations provenant des 60 documents.</li>
            <li>La première ébauche a été examinée par les 10 fournisseurs d’avortement par médicaments, qui ont fourni des commentaires et des suggestions pour améliorer l’exactitude, la cohérence et la clarté du contenu. Les commentaires et suggestions ont ensuite été compilés, examinés et intégrés par l’équipe chargée du contenu. Les divergences dans les suggestions et commentaires ont été discutées et clarifiées. Ces suggestions et commentaires ont ensuite été integrés dans une deuxième ébauche.</li>
            <li>La deuxième ébauche a été examinée par <b>2 autres fournisseurs d’AM</b> et leurs commentaires et suggestions ont été examinés et integrés dans une troisième ébauche.</li>
            <li>La troisième ébauche a été examinée et révisée par La SOGC, puis finalisée pour la phase 3.</li>
          </ol>
          <h2>Phase 3: Migration et tests de contenu</h2>
          <ol>
            <li>Le contenu en ligne développé lors de la phase 2 a été migré vers les pages Web du CAPS-CPCA.</li>
            <li>Ces pages Web ont ensuite été partagées avec 30 autres fournisseurs d’avortement par médicaments d’expérience variable pour tester le caractère inclusif et déstigmatisé le langage ainsi que la fonctionnalité, la navigation, l’apparence et le contenu des pages web.</li>
            <li>Les suggestions des utilisateurs ont été intégrées pour réviser à la fois le contenu et les éléments visuels des pages web.</li>
          </ol>
        </div>
        
        <h1 id="ref">Bibliographie</h1>
        <div class="module">
          <p>Le contenu de ce site web a été développé sur la base des informations fournies dans les références suivantes. Il est à noter que le contenu de ce site web a été mis à jour en novembre 2023 et que cette liste de référence peut ne pas refléter les lignes directrices, listes de contrôle et outils les plus récents publiés après cette date.</p>
          <ol>
            {#each Bibliography as item}
              <li><a href={item.href} target="_blank" class="ref">{item.title}</a></li>
            {/each}
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