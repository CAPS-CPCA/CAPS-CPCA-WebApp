<script lang="ts">
    import {images} from '../../assets/index';
    import { data } from '$lib/translations';
</script>

<style>
    .about-section {
      display: flex;
      align-items: center;
      justify-content: center; /* Center horizontally */
      padding: 20px;
      background-color: #f0f0f0; /* Example background color */
    }
  
    .about-text {
      max-width: 600px; /* Adjust as needed */
      margin: 0 20px; /* Add spacing around the text */
    }
  
    .about-image {
      border-radius: 50%;
      width: 300px; /* Adjust size as needed */
      height: auto;
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
