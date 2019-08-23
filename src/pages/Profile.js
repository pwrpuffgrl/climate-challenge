import React from 'react';
import styled from 'styled-components';
import Headline from '../components/Headline';
import ProfileGrid from '../components/ProfileGrid';
import Florentine from '../images/florentineProfile.png';
import CardHeader from '../components/challenge/CardHeader.png';
import CategoryIcon from '../components/challenge/CategoryIcon';
import Menu from '../components/Menu';
import CountUp from 'react-countup';
import BadgeSlider from '../components/Slider';
import propTypes from 'prop-types';

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
  padding: 0px;
  margin: 0;
  color: #46395c;
`;

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'helvetica';
  font-weight: 200;
  line-height: 1.4;
  font-size: 16px;
  padding: 20px;
  margin: 0;
  color: #46395c;
  text-align: justify;
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
  padding: 10px;
  overflow-y: auto;
  margin: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
const Badge = styled.div`
  background: #c39791;
  color: white;
  font-size: 14px;
  border-radius: 12px;
`;

const SliderContainer = styled.div`
  height: 200px;
  width: 300px;
`;
function Profile({ challenges, activeUser, ...props }) {
  function renderKarma() {
    const { karmaPoints } = activeUser;
    return <CountUp end={karmaPoints}>{karmaPoints}</CountUp>;
  }

  return (
    <ProfileGrid>
      <Container>
        <ProfileHeader>
          <Image src={Florentine} />
          <Name size="L">
            {activeUser.first_name} {activeUser.last_name}
          </Name>
          <Karma>{renderKarma()}</Karma>
        </ProfileHeader>
        <Overview>
          <Headline size="L">About me</Headline>
          <AboutContainer>{activeUser.about_me}</AboutContainer>
          <Headline size="L">My challenges</Headline>
          <SliderContainer>
            <BadgeSlider>
              {challenges.map(challenge => (
                <Badge key={challenge._id}>
                  <Headline>
                    {challenge.title}
                    <CategoryIcon category={challenge.category} />
                  </Headline>
                </Badge>
              ))}
            </BadgeSlider>
          </SliderContainer>
        </Overview>
      </Container>
      <Menu />
    </ProfileGrid>
  );
}

Profile.propTypes = {
  challenge: propTypes.object,
  activeUser: propTypes.object
};
export default Profile;
