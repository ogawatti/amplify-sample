export interface EventTSTest {
  key1: string;
  key2: string;
  key3: string;
}

interface TSTestResponse {
  statusCode: number;
  body: string;
}

// eslint-disable-next-line @typescript-eslint/require-await
export const handler = async (event: EventTSTest): Promise<TSTestResponse> => {
  console.log(`EVENT: ${JSON.stringify(event)}`)

  return {
    statusCode: 200,
    body: JSON.stringify('Hello from Lambda!'),
  };
};
