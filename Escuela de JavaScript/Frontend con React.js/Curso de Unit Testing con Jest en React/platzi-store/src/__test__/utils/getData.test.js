import getData from '../../utils/getData';

describe('Fetch API', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });
  test('LLamar una API y retornar datos', () => {
    fetch.mockResponseOnce(JSON.stringify({ data: '12345' }));
    getData('https://google.com')
      .then((respinses) => {
        expect(respinses.data).toEqual('12345');
      });

    expect(fetch.mock.calls[0][0]).toEqual('https://google.com');
  });
});

