import React from 'react';

interface ComplexTagEditorProps {
  setModalType: React.Dispatch<
    React.SetStateAction<'qoute' | 'url' | 'list' | 'table' | ''>
  >;
}

const ComplexTagEditor: React.FC<ComplexTagEditorProps> = ({
  setModalType
}) => {
  return (
    <div>
      <h3>Сложные теги:</h3>
      <button onClick={() => setModalType('qoute')}>Цитата</button>
      <button onClick={() => setModalType('url')}>Ссылка</button>
    </div>
  );
};

export default ComplexTagEditor;
