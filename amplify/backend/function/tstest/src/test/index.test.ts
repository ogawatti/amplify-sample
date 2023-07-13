import { EventTSTest, handler } from './../index';

describe('TSTest', () => {
  describe('handler', () => {
    const event: EventTSTest = {
      key1: 'test1',
      key2: 'test2',
      key3: 'test3',
    };

    it('returns statusCode and body', async () => {
      const spy = jest.spyOn(console, 'log').mockImplementation();

      const { statusCode, body }= await handler(event);
      const data = JSON.parse(body) as string;

      expect(statusCode).toBe(200);
      expect(data).toBe('Hello from Lambda!');
      expect(spy).toHaveBeenNthCalledWith(1, expect.stringMatching(/^EVENT: /));
    });
  });
});
