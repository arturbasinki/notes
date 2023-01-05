import * as notesData from './NotesData';

describe('NotesData Test', () => {
  test('getList returns expected data', () => {
    expect(notesData.getList()).toEqual('hello list');
  });
});
