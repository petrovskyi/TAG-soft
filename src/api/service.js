export const service = {
  apiURL: "https://rickandmortyapi.com/api",
  query: "/character",
  retry: 3,

  fetchDataFromAPI() {
    return fetch(this.apiURL + this.query);
  },

  async getCharactersList() {
    const response = await this.fetchDataFromAPI();
    if (response.status !== 200) {
      this.requestCount++;
      this.fetchDataFromAPI();
    }

    const data = await response.json();
    return data;
  },
};
