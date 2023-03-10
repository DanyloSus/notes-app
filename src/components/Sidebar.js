import React from "react"

export default function Sidebar(props) {
    const noteElements = props.notes.map((note, index) => {
        let snippet = []
        
        for (let i = 0; i < note.body.length; i++) {
            if (note.body[i] == "\n") {
                break
            }
            snippet.push(note.body[i])
        }
        
        return (
        <div key={note.id}>
            <div
                
                className={`title ${
                    note.id === props.currentNote.id ? "selected-note" : ""
                }`}
                onClick={() => props.setCurrentNoteId(note.id)}
            >
                <h4 className="text-snippet">
                    {snippet}
                </h4>
            </div>
        </div>
    )})

    return (
        <section className="pane sidebar">
            <div className="sidebar--header">
                <h3>Notes</h3>
                <button className="new-note" onClick={props.newNote}>+</button>
            </div>
            {noteElements}
        </section>
    )
}
