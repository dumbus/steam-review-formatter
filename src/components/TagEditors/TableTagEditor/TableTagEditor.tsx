import React from 'react';

interface ListTagEditorProps {
  setModalType: React.Dispatch<
    React.SetStateAction<'qoute' | 'url' | 'list' | 'table' | ''>
  >;
}

const TableTagEditor: React.FC<ListTagEditorProps> = ({ setModalType }) => {
  return (
    <div>
      <h3>Таблицы:</h3>
      <button onClick={() => setModalType('table')}>Добавить таблицу</button>
    </div>
  );
};

export default TableTagEditor;
