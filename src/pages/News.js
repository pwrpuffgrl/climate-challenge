import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Grid from '../components/Grid';
import { getArticles } from '../utils/newsAPI';
import Headline from '../components/Headline';

import Menu from '../components/Menu';

const CardContainer = styled.div`
  margin: 0 auto;
  padding-bottom: 80px;
  max-width: 600px;
  position: relative;
  overflow-y: auto;
`;
const StyledHeadline = styled(Headline)`
  color: #242d42;
  margin: 0;
`;

const NewsCard = styled.div`
  color: #242d42;
  z-index: 1000;
  min-width: 340px;
  background: white;
  margin: 15px;
  position: relative;
  opacity: 1;
  text-align: left;
  box-shadow: 11px 6px 36px -2px rgba(0, 0, 0, 0.26);
`;

const CardHeader = styled.div`
  width: 100%;
  object-fit: cover;
  margin: 0;
`;

const Image = styled.img`
  width: 100%;
  max-height: 200px;
`;

const Content = styled.div`
  font-family: helvetica;
  font-size: 16px;
  color: #46395c;
  padding: 15px;
  font-weight: 200;
  line-height: 1.4;
`;

const A = styled.a`
  font-family: helvetica;
  font-size: 14px;
  color: slategray;
  text-decoration: none;
`;

const Info = styled.i`
  color: #242d42;
  position: absolute;
  bottom: 15px;
  right: 15px;
  font-size: 20px;
`;

function NewsFeed() {
  const [articles, setArticles] = React.useState([]);

  React.useEffect(() => {
    getArticles().then(articles => setArticles(articles));
  }, []);

  function handleClick(article) {
    const index = articles.findIndex(item => item.url === article.url);
    const newArticle = articles[index];
    setArticles([
      ...articles.slice(0, index),
      { ...newArticle, showContent: !article.showContent },
      ...articles.slice(index + 1)
    ]);
  }

  return (
    <Grid>
      <Header title="Climate News" />
      <CardContainer>
        {articles &&
          articles.map(article => (
            <NewsCard key={article.title}>
              <CardHeader>
                <Image src={article.url} />
              </CardHeader>
              <StyledHeadline font="main" size="S">
                {article.title}
              </StyledHeadline>
              <Info
                className="fas fa-info-circle"
                onClick={() => handleClick(article)}
              />
              {article.showContent && <Content>{article.content}</Content>}
              <A href={article.link}>&#8594; GO TO ARTICLE</A>
            </NewsCard>
          ))}
      </CardContainer>
      <Menu />
    </Grid>
  );
}

export default NewsFeed;
