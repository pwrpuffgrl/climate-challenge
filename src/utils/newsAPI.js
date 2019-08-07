export function getArticles() {
  return fetch(
    `https://newsapi.org/v2/everything?q=climatechange&apiKey=d2d2ce5a83f945829faea2da36c42397`,
    {
      headers: {
        Authorization: 'Bearer d2d2ce5a83f945829faea2da36c42397'
      }
    }
  )
    .then(response => response.json())
    .then(result => {
      const articles = result.articles.map(article => {
        return {
          title: article.title,
          content: article.description,
          author: article.author,
          link: article.url,
          url: article.urlToImage
        };
      });
      return articles;
    });
}
