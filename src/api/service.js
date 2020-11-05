export const service = {
  apiURL: "https://rickandmortyapi.com/api",
  userQuery: "/character",
  async callAPI(url) {
    const response = await fetch(url);
    try {
      if (response.ok) return await response.json();
    } catch (error) {
      console.error(error);
    }
  },
};
