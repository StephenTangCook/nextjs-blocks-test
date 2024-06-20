'use client';

import type { Block } from 'slack-blocks-to-jsx';
import { Message } from 'slack-blocks-to-jsx';

const MessageContainer = () => {
  const blocks: Block[] = [
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: 'This is a mrkdwn section block :ghost: *this is bold*, and ~this is crossed out~, and <https://google.com|this is a link>',
      },
    },
  ];

  return (
    <div>
      Message container
      <Message
        time={new Date()}
        name="Your Company"
        logo="logo_url"
        blocks={blocks}
      />
    </div>
  );
};

export { MessageContainer };
