import React from 'react';
import styled from 'styled-components';
import ReactTooltip from 'react-tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faGithub,
  faInstagram,
  faTwitter,
  faSlack,
} from '@fortawesome/free-brands-svg-icons';

const SocialShare = () => (
  <SocialShareWrapper>
    {/* TODO: change to as="a" */}
    <Link href="https://www.facebook.com/reactrosario/" data-tip="@reactrosario">
      <FontAwesomeIcon icon={faFacebookSquare} color="white" />
    </Link>
    <Link href="https://github.com/reactrosario" data-tip="@reactrosario">
      <FontAwesomeIcon icon={faGithub} color="white" />
    </Link>
    <Link href="https://www.instagram.com/reactrosario/" data-tip="@reactrosario">
      <FontAwesomeIcon icon={faInstagram} color="white" />
    </Link>
    <Link href="https://twitter.com/reactrosario" data-tip="@reactrosario">
      <FontAwesomeIcon icon={faTwitter} color="white" />
    </Link>
    <Link href="https://slack.meetupjs.com.ar/" data-tip="Sumate al channel #reactrosario dentro del Slack de MeetupJS :)">
      <FontAwesomeIcon icon={faSlack} color="white" />
    </Link>
    <StyledReactTooltip />
  </SocialShareWrapper>
);

const StyledReactTooltip = styled(ReactTooltip)`
  color: #fff !important;
  background-color: #2BB7FA !important;
  &.place-top {
    &:after {
      border-top-color: #2BB7FA !important;
      border-bottom-color: #2BB7FA !important;
      border-top-style: solid !important;
      border-top-width: 6px !important;
    }
  }
`;

const SocialShareWrapper = styled.div`
  margin: 0 2%;
  display: flex;
  font-size: 22px;  
`;

const Link = styled.a`
  margin: 0 12%;
`;

export default SocialShare;
