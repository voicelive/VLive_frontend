import React, { useState, useEffect } from 'react';
import useParams from 'react-router-dom';
import styled from '@emotion/styled';

import ChannelMain from '../Channel/ChannelMain';
import ChannelSide from '../Channel/ChannelSide';

export default function ChannelContainer() {
  const [channelInfo, setChannelInfo] = useState(null);
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  // const channelId = useParams();
  const channelId = '6135b03f428aabe0cf791289';

  useEffect(async () => {
    const channel = await getChannelData();

    await setChannelInfo(channel);
  }, []);

  async function getChannelData() {
    try {
      const response = await fetch(`${baseUrl}/channel/${channelId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const { data } = await response.json();
      return data;
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      {channelInfo && (
        <Wrapper>
          <ChannelMain channelInfo={channelInfo} />
          <ChannelSide channelInfo={channelInfo} />
        </Wrapper>
      )}
    </div>
  );
}

const Wrapper = styled.div`
  display: flex;
`;
