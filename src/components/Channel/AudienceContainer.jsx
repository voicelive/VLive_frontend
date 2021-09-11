import React from 'react';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import useAudience from '../../hooks/channel/useAudience';

import AudienceItem from './AudienceItem';
import ErrorBox from '../ErrorBox';

export default function AudienceContainer() {
  const {
    query: { channelId },
  } = useRouter();
  const { audience, error } = useAudience(channelId);

  if (error) {
    return <ErrorBox message={error.message} />;
  }

  return (
    <Wrapper>
      {audience.map((audience) => (
        <AudienceItem key={audience._id} user={audience} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 30%;
  border: 1px solid red;
`;
