import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Headline from '../components/Headline';
import ProfileGrid from '../components/ProfileGrid';
import florentine from '../Images/florentineProfile.png';
import CardHeader from '../Images/CardHeader.png';
import CategoryIcon from '../components/CategoryIcon';

const Image = styled.img`
  height: 110px;
  width: 110px;
  padding: 5px;
  object-fit: cover;
  border-radius: 50%;
  margin: 5px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'helvetica';
  font-weight: 200;
  line-height: 1.4;
  font-size: 16px;
  padding: 10px;
  margin: 0;
  color: #46395c;
`;
const ProfileHeader = styled.div`
  background: url(${CardHeader});
  position: relative;
`;

const Name = styled(Headline)`
  display: inline-block;
  position: absolute;
  top: 15px;
  color: white;
`;

const Overview = styled.div`
  color: #30224b;
  padding: 5px;
`;

const Tag = styled.div`
  background: #c39791;
  border-radius: 12px;
  margin: 3px;
  color: white;
`;

const Karma = styled.div`
  position: absolute;
  top: 90px;
  right: 20px;
  background: #c39791;
  height: 70px;
  width: 70px;
  border-radius: 50%;
  color: white;
  font-family: 'Merriweather';
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Profile({ challenges, user, ...props }) {
  const challenge = challenges.map(challenge => challenge);

  function renderKarma() {
    const points = challenges.map(challenge => challenge.karma);
    const sum = points.reduce((a, b) => a + b, 0);
    return sum;
  }

  return (
    <ProfileGrid>
      <Container>
        <ProfileHeader>
          <Image src={florentine} />
          <Name size="L">Florentine Draeger</Name>
          <Karma>{renderKarma()}</Karma>
        </ProfileHeader>
        <Overview>
          <Headline size="M">About me</Headline>
          <Container>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </Container>
          <Headline size="S">My Challenges</Headline>
          {!challenge.completed && (
            <Overview>You haven't completed any challenges yet</Overview>
          )}
          <Container>
            {challenge.completed && (
              <Tag>
                <CategoryIcon category={challenge.category} />
                <div>{challenge.title}</div>
              </Tag>
            )}
          </Container>
          <Container />
        </Overview>
      </Container>
      <Footer />
    </ProfileGrid>
  );
}

export default Profile;
