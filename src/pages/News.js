import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Grid from '../components/Grid';
import Footer from '../components/Footer';
import { getArticles } from '../utils/newsAPI';
import Headline from '../components/Headline';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 600px;
  position: relative;
  overflow-y: auto;
`;

const NewsCard = styled.div`
  padding: 20px;
  color: white;
  z-index: 2000;
  max-width: 360px;
  border-radius: 12px;
  background: #242d42;
  margin: 15px;
  position: relative;
  opacity: 1;
  box-shadow: 10px 10px 8px;
  animation: ${props => props.animation} 5s;
`;
const Content = styled.p`
  font-family: helvetica;
  font-size: 16px;
  padding: 15px;
`;

const Image = styled.img`
  height: 200px;
  width: 300px;
`;

const A = styled.a`
  font-family: helvetica;
  font-size: 16px;
  padding-bottom: 10px;
  color: white;
`;

const Info = styled.i`
  position: absolute;
  bottom: 15px;
  right: 15px;
  font-size: 20px;
`;

function NewsFeed() {
  const [articles, setArticles] = React.useState([]);
  const [showContent, setShowContent] = React.useState(false);

  React.useEffect(() => {
    getArticles().then(articles => setArticles(articles));
  }, []);

  return (
    <Grid>
      <Header title="CLIMATE NEWS" />
      <CardContainer>
        {articles &&
          articles.map(article => (
            <NewsCard>
              <Headline font="sub" size="S">
                {article.title}
              </Headline>
              {/* <Image src={article.url} /> */}
              <Info
                className="fas fa-info-circle"
                onClick={() => setShowContent(!showContent)}
              />
              {showContent && <Content>{article.content}</Content>}
              <A href={article.link}>Go to article</A>
            </NewsCard>
          ))}
      </CardContainer>
      <Footer />
    </Grid>
  );
}

export default NewsFeed;
