import * as notesData from './NotesData';

describe('NotesData Test', () => {
  const expectedData = JSON.parse(
    `[
      {"id":"1","datetime":"2023-01-05T10:10Z","title":"My First Note"},
      {"id":"2","datetime":"2023-01-06T11:11Z","title":"My Second Note"},
      {"id":"3","datetime":"2023-01-07T12:12Z","title":"My Third Note"},
      {"id":"4","datetime":"2023-01-08T13:13Z","title":"My Fourth Note"}
  ]`,
  );

  test('getList returns expected data', async () => {
    expect(notesData.getList()).toEqual(expectedData);
  });
});
