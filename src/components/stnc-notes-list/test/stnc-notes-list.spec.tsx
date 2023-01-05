import { newSpecPage } from '@stencil/core/testing';

jest.mock('../../../library/NotesData', () => ({
  getList: () => 'test hello list',
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
                  <th>test hello list</th>
                </tr>
              </thead>
            </table>
          </div>
        </mock:shadow-root>
      </stnc-notes-list>
    `);
  });
});
