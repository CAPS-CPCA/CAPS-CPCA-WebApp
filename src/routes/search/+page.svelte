<script lang="ts">
    import {images} from '../../assets/index';
    import { data } from '$lib/translations';
  </script>
  
  <style>

    .search-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      background: linear-gradient(0deg, #011627 0%, #4E7385 100%);
      color: white;
      padding-bottom: 100px;
      

    }
  
    .search-logo {
      width: 350px;
      height: auto;
      margin-bottom: 2rem;
    }
  
    .search-title {
      color: #FFFFFF;
      font-family: "Open Sans", Sans-serif;
      font-size: 48px;
      font-weight: 600;
      margin-bottom: 1rem;
    }
  
    .search-bar {
      display: flex;
      align-items: center;
      max-width: 600px;
      overflow: hidden;
      color: #404040;
      height: 48px;
      width: 100%;
      background: #F6F7F8;
      border: 2px solid #01162740;
      border-radius: 1em 0 0 1em;
      font-family: 'Open Sans';
      font-size: 1em;
    }
  
    .search-input {
      flex: 1;
      padding: 0.5rem 1rem;
      border: none;
      outline: none;
      font-size: 1rem;
      font-style: italic;
    }
  
    .search-button {
      cursor: pointer;
      color: white;
      height: 48px;
      background: #011627;
      text-align: center;
      font-family: "Roboto";
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: 1px;
      border: none;
      border-radius: 0 1em 1em 0;
    }
  
    .search-button:hover {
      background-color: #1a1f24;
    }
  </style>
  
  <main>
    <div class="search-container">
      <img src= {images.SearchBanner} alt="Logo" class="search-logo" />
      <div class="search-title">{@html $data.search.title}</div>
      <div class="search-bar">
        <input type="text" class="search-input" placeholder = {$data.search.input} />
        <button class="search-button">{@html $data.search.button}</button>
      </div>
    </div>
  </main>
  
  