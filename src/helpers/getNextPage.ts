const getSearchPage = (page: string) => {
  let pageStr = "";
  for (let i = page.length - 1; i > 0; i--) {
    if (page[i] !== "=") pageStr += page[i];
  }

  return pageStr;
};

export default getSearchPage;
