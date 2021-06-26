import axios from 'axios';

const route = "https://swapi.dev/api/starships/";

class AnaliseGeralService {
  async getStarships() {
    // creates a unique await block that will run in parallel
    const [pageOne, pageTwo, pageThree, pageFour] = await Promise.all(
      [axios.get(`${route}/?page=1`),
      axios.get(`${route}/?page=2`),
      axios.get(`${route}/?page=3`),
      axios.get(`${route}/?page=4`),
    ]);

    this.isError(pageOne, 1);
    this.isError(pageTwo, 2);
    this.isError(pageThree, 3);
    this.isError(pageFour, 4);

    return pageOne.data.results.concat(pageTwo.data.results, pageThree.data.results, pageFour.data.results);
  }

  isError(response, page){
    if (!response || response.status !== 200) {
      throw new Error(`Error getting page number: ${page}`);
    }
  }
}

export default new AnaliseGeralService();
