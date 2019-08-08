import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Grid from '../components/Grid';
import Footer from '../components/Footer';
import { getArticles } from '../utils/newsAPI';
import Headline from '../components/Headline';
import { cardFade } from '../utils/animations';

const CardContainer = styled.div`
  margin: 0 auto;
  max-width: 600px;
  position: relative;
  overflow-y: auto;
`;
const StyledHeadline = styled(Headline)`
  color: #242d42;
`;
const NewsCard = styled.div`
  padding: 20px;
  color: #242d42;
  z-index: 2000;
  min-width: 380px;
  background: #d3e7ee;
  border-radius: 12px;
  margin: 15px;
  position: relative;
  opacity: 1;
  box-shadow: 10px 10px 8px;
  animation: ${cardFade} 2s ease 1 both;
`;
const Content = styled.p`
  font-family: helvetica;
  font-size: 16px;
`;

const A = styled.a`
  font-family: helvetica;
  font-size: 16px;
  padding-bottom: 10px;
  color: #943855;
`;

const Info = styled.i`
  color: #242d42;
  position: absolute;
  bottom: 15px;
  right: 15px;
  font-size: 20px;
`;

const Image = styled.img`
  height: 100%
  width: 260px; 
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
              <Image src={article.url} />
              <StyledHeadline font="main" size="S">
                {article.title}
              </StyledHeadline>
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
