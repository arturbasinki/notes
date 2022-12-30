import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'stnc-notes-list',
  styleUrl: 'stnc-notes-list.css',
  shadow: true,
})
export class StncNotesList {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
