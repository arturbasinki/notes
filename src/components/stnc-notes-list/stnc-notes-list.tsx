import { Component, h } from '@stencil/core';
import { getList } from '../../library/NotesData';

@Component({
  tag: 'stnc-notes-list',
  styleUrl: 'stnc-notes-list.css',
  shadow: true,
})
export class StncNotesList {
  render() {
    const notes = getList();
    console.log(notes);
    return (
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
            {notes.map((note: any, index: number) => (
              <tr>
                <td>{index + 1}</td>
                <td>{note.datetime}</td>
                <td>{note.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
