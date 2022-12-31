import { newSpecPage } from '@stencil/core/testing';
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
          <div>TODO: create notes-list render</div>
        </mock:shadow-root>
      </stnc-notes-list>
    `);
  });
});
