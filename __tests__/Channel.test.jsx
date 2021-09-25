import React from 'react';
import * as nextRouter from 'next/router';
import { render } from '@testing-library/react';

import Channel from '../src/components/Channel';

const channel = {
  name: '아무나 들어오세요',
  episode: { title: '호박고구마' },
};

nextRouter.useRouter = jest.fn();
nextRouter.useRouter.mockImplementation(() => ({
  query: { channelId: '012345' },
}));

jest.mock('../src/hooks/channel/useChannel', () => ({
  __esModule: true,
  default: function () {
    return {
      channel,
      error: null,
    };
  },
}));

jest.mock('../src/components/channel/ChannelMain', () => ({
  __esModule: true,
  default: function () {
    return <h2>Channel Main</h2>;
  },
}));

jest.mock('../src/components/channel/ChannelSide', () => ({
  __esModule: true,
  default: function () {
    return <h2>Channel Side</h2>;
  },
}));

describe('Channel', () => {
  it('renders Channel component', () => {
    const { getByText } = render(<Channel />);

    expect(getByText(channel.name)).toBeInTheDocument();
    expect(getByText(channel.episode.title)).toBeInTheDocument();

    expect(getByText('Channel Main')).toBeInTheDocument();
    expect(getByText('Channel Side')).toBeInTheDocument();
  });
});

const { ERR_MSG } = require('../constants/errors/errorMessage');

class VliveError extends Error {
  constructor() {
    super();
    this.name = 'ServerError';
    this.message = ERR_MSG.SERVER_ERR;
    console.log(this.message);
  }
}

class NotFoundError extends VliveError {
  constructor() {
    super();
    this.name = 'NotFoundError';
    this.message = ERR_MSG.NOT_FOUND;
    this.status = 404;
  }
}

class NotFoundError extends VliveError {
  constructor() {
    super();
    this.name = 'NotFoundError';
    this.message = ERR_MSG.NOT_FOUND;
    this.status = 404;
  }
}

class JsonWebTokenError extends VliveError {
  constructor() {
    super();
    this.name = 'JsonWebTokenError';
    this.message = ERR_MSG.INVALID_TOKEN;
    this.status = 401;
  }
}

class TokenExpiredError extends VliveError {
  constructor() {
    super();
    this.name = 'TokenExpiredError';
    this.message = ERR_MSG.TOKEN_EXPIRED;
    this.status = 401;
  }
}

module.exports = {
  VliveError,
  NotFoundError,
  JsonWebTokenError,
  TokenExpiredError,
};
