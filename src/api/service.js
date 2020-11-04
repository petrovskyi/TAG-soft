export const service = {
  apiURL: "https://rickandmortyapi.com/api",
  userQuery: "/character",
  requestCount: 3,

  async retrieveDataFrom(url) {
    let userRequest = url;
    const response = await fetch(userRequest);

    console.log(this.requestCount);
    if (response.status !== 200 && this.requestCount !== 0) {
      setTimeout(() => {
        this.requestCount--;
        this.retrieveDataFrom(userRequest);
        console.log(url);
        console.log(userRequest);
      }, 1000);
    }

    const data = await response.json();
    return data;
  },
};
