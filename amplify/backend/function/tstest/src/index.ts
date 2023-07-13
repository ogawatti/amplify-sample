export interface EventTSTest {
  key1: string;
  key2: string;
  key3: string;
}

interface TSTestResponse {
  statusCode: number;
  body: string;
}

import AWS from 'aws-sdk';

// eslint-disable-next-line @typescript-eslint/require-await
export const handler = async (event: EventTSTest): Promise<TSTestResponse> => {
  console.log(AWS);
  console.log(`EVENT: ${JSON.stringify(event)}`)

  return {
    statusCode: 200,
    body: JSON.stringify('Hello from Lambda!'),
  };
};
