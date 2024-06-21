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
      background-color: #213d4f;
      color: white;
      padding-bottom: 50px; /* Ensure 50px whitespace at the bottom */

    }
  
    .search-logo {
      width: 350px;
      height: auto;
      margin-bottom: 2rem;
    }
  
    .search-title {
      font-size: 2rem;
      margin-bottom: 1rem;
    }
  
    .search-bar {
      display: flex;
      align-items: center;
      width: 50%;
      max-width: 600px;
      background-color: white;
      border-radius: 25px;
      overflow: hidden;
    }
  
    .search-input {
      flex: 1;
      padding: 0.5rem 1rem;
      border: none;
      outline: none;
      font-size: 1rem;
    }
  
    .search-button {
      padding: 0.5rem 1rem;
      background-color: #0d1117; /* Dark blue background */
      color: white;
      border: none;
      cursor: pointer;
      font-size: 1rem;
    }
  
    .search-button:hover {
      background-color: #1a1f24; /* Slightly lighter dark blue for hover effect */
    }
  </style>
  
  <main>
    <div class="search-container">
      <img src= {images.SearchBanner} alt="Logo" class="search-logo" />
      <div class="search-title">{@html $data.search.title}</div>
      <div class="search-bar">
        <input type="text" class="search-input" placeholder = {$data.search.input} />
        <button class="search-button">Search</button>
      </div>
    </div>
  </main>
  
  