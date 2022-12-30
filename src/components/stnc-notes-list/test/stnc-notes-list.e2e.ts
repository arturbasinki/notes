import { newE2EPage } from '@stencil/core/testing';

describe('stnc-notes-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<stnc-notes-list></stnc-notes-list>');

    const element = await page.find('stnc-notes-list');
    expect(element).toHaveClass('hydrated');
  });
});
