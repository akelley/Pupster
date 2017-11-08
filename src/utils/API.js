import axios from 'axios';

export default {
	getRandomDog: function(){	// get random dog for DISCOVER page
		return axios.get('https://dog.ceo/api/breeds/image/random');
	},

  getDogsOfBreed: function(breed) {
    return axios.get("https://dog.ceo/api/breed/" + breed + "/images");
  },

	getBaseBreedsList: function(){		// gets list of all dog breed for SEARCH page
		return axios.get('https://dog.ceo/api/breeds/list');
	}
};