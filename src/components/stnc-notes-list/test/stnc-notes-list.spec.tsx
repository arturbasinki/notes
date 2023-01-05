import { newSpecPage } from '@stencil/core/testing';

jest.mock('../../../library/NotesData', () => ({
  getList: () =>
    JSON.parse(`[
    {"id":"1","datetime":"2023-01-05T10:10Z","title":"My First Note"},
    {"id":"2","datetime":"2023-01-06T11:11Z","title":"My Second Note"},
    {"id":"3","datetime":"2023-01-07T12:12Z","title":"My Third Note"},
    {"id":"4","datetime":"2023-01-08T13:13Z","title":"My Fourth Note"}
]`),
}));

import { StncNotesList } from '../stnc-notes-list';

describe('stnc-notes-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [StncNotesList],
      html: `<stnc-notes-list></stnc-notes-list>`,
    });
    expect(page.root).toEqualHtml(`
      <stnc-notes-list>
        <mock:shadow-root>
          <div>
            <div>Notes List</div>
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Date/Time</th>
                  <th>Title</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>2023-01-05T10:10Z</td>
                  <td>My First Note</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>2023-01-06T11:11Z</td>
                  <td>My Second Note</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>2023-01-07T12:12Z</td>
                  <td>My Third Note</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>2023-01-08T13:13Z</td>
                  <td>My Fourth Note</td>
                </tr>
              </tbody> 
            </table>
          </div>
        </mock:shadow-root>
      </stnc-notes-list>
    `);
  });
});
