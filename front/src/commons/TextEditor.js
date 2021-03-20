import React, { useState } from 'react';
import RichTextEditor from 'react-rte';

import './TextEditor.css';

const te = `<p><strong>Porquê isso é necessário para meu site?</strong></p>
<p>Os conceitos de UI e UX geram um maravilhoso desempenho para quem for utilizar as propriedades de sua interface.</p>
<p><br></p>
<p><strong>Porquê isso é necessário para meu site?</strong></p>
<p>Os conceitos de UI e UX geram um maravilhoso desempenho para quem for utilizar as propriedades de sua interface.</p>
<p><br></p>
<p><strong>Porquê isso é necessário para meu site?</strong></p>
<p>Os conceitos de UI e UX geram um maravilhoso desempenho para quem for utilizar as propriedades de sua interface.</p>`;

function TextEditor({ textData, onChange, name = 'text' }) {
  const [text, setText] = useState(createText());

  const toolbarConfig = {
    // Optionally specify the groups to display (displayed in the order listed).
    display: ['INLINE_STYLE_BUTTONS', 'BLOCK_TYPE_BUTTONS', 'BLOCK_TYPE_DROPDOWN'],
    INLINE_STYLE_BUTTONS: [
      { label: 'Bold', style: 'BOLD', className: 'custom-css-class' },
      { label: 'Italic', style: 'ITALIC' },
      { label: 'Underline', style: 'UNDERLINE' }
    ],
    BLOCK_TYPE_DROPDOWN: [
      { label: 'Normal', style: 'unstyled' },
      { label: 'Título Grande', style: 'header-one' },
      { label: 'Título Médio', style: 'header-two' },
      { label: 'Título Pequeno', style: 'header-three' }
    ],
    BLOCK_TYPE_BUTTONS: [
      { label: 'UL', style: 'unordered-list-item' },
      { label: 'OL', style: 'ordered-list-item' }
    ]
  };

  function createText() {
    if (textData) {
      return RichTextEditor.createValueFromString(textData, 'html');
    }
    return RichTextEditor.createEmptyValue();
  }

  function handleChange(value) {
    setText(value);

    if (onChange) {
      onChange(name, value.toString('html'));
    }
  }

  return (
    <RichTextEditor
      editorClassName="CustomTextEditor"
      toolbarClassName="CustomTextEditorTollbar"
      value={text}
      onChange={handleChange}
      toolbarConfig={toolbarConfig}
    />
  );
}

export default TextEditor;
