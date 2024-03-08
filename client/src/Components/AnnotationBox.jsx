import { useState } from "react";
import {Group,} from 'react-konva'
export default function AnnotationBox({ shapeId, text, onAddAnnotation, onAnnotationChange }) {
    const [editing, setEditing] = useState(false);
    const [newText, setNewText] = useState(text);
  
    const handleSave = () => {
      if (newText.trim() !== "") {
        onAnnotationChange(shapeId, newText);
      }
      setEditing(false);
    };
  
    return (
      <Group>
        <p onClick={() => setEditing(true)} style={{fontStyle:editing ? "italic" : "normal"}}>{text}</p>
        {editing && (
          <Group>
            <p onChange={(e) => setNewText(e.target.value)}
              onBlur={handleSave}
              style={{fontStyle:"italic"}}>
             {newText}
              
              
            </p>
            <button onClick={handleSave}>Save</button>
          </Group>
        )}
      </Group>
    );
  }