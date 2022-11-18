import {reactive} from 'vue';

export const store = reactive({
  apiUrl: 'https://www.breakingbadapi.com/api/characters',
  apiResponse: [],
  searchLength: 0,
  isLoaded: false,
  searchCategory: ''
})