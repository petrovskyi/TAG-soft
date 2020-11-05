export const service = {
  apiURL: "https://rickandmortyapi.com/api",
  userQuery: "/character",
  retries: 3,
  delay: 300,
  async retrieveDataFrom(url) {
    const response = await fetch(url);
    try {
      if (response.ok) return await response.json();

      if (this.retries > 0) {
        this.retries--;
        setTimeout(() => {
          this.retrieveDataFrom(url);
        }, this.delay);
      } else {
        throw new Error(response);
      }
    } catch (error) {
      console.error(error);
    }
  },
};
