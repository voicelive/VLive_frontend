import React from 'react';
import * as nextRouter from 'next/router';
import { render } from '@testing-library/react';

import History from '../src/components/History';

jest.mock('../src/hooks/channel/useChannel', () => ({
  __esModule: true,
  default: function () {
    return {
      channel,
      error: null,
    };
  },
}));

const channel = {
  name: '아무나 들어오세요',
  episode: { title: '타짜' },
  players: [
    {
      user: {
        email: 'abc@gmail.com',
        name: 'jon doe',
        photoUrl: 'https://picsum.photos/200/300',
        _id: '1234qwe',
      },
      voteCount: 1,
      character: {
        imgUrl: 'https://picsum.photos/70/70',
        name: 'a',
        _id: '1234qwe0',
      },
      _id: '1234qwe1',
    },
    {
      user: {
        email: '1234@gmail.com',
        name: 'jon',
        photoUrl: 'https://picsum.photos/200/300',
        _id: '1234qwe2',
      },
      voteCount: 0,
      character: {
        imgUrl: 'https://picsum.photos/70/70',
        name: 'b',
        _id: '1234qwe3',
      },
      _id: '1234qwe4',
    },
  ],
};

nextRouter.useRouter = jest.fn();
nextRouter.useRouter.mockImplementation(() => ({
  query: { historyId: '012345' },
}));

describe('History', () => {
  it('renders History component', () => {
    const { getByText } = render(<History />);
    expect(getByText(channel.name)).toBeInTheDocument();

    channel.players.map((player) => {
      expect(getByText(player.user.name)).toBeVisible();
      expect(getByText(player.character.name)).toBeVisible();
      expect(getByText(player.voteCount)).toBeVisible();
    });
  });
});
