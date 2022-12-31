import { newSpecPage } from '@stencil/core/testing';
import { AppHome } from './app-home';

describe('app-home', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AppHome],
      html: `<app-home></app-home>`,
    });
    expect(page.root).toEqualHtml(`
      <app-home>
        <mock:shadow-root>
            <div class="app-home">
                <stnc-notes-list></stnc-notes-list>
            </div>
        </mock:shadow-root>
      </app-home>
    `);
  });
});
