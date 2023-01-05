import { Component, h } from '@stencil/core';
import { getList } from '../../library/NotesData';

@Component({
  tag: 'stnc-notes-list',
  styleUrl: 'stnc-notes-list.css',
  shadow: true,
})
export class StncNotesList {
  render() {
    return (
      <div>
        <div>Notes List</div>
        <table>
          <thead>
            <tr>
              <th>{getList()}</th>
            </tr>
          </thead>
        </table>
      </div>
    );
  }
}
