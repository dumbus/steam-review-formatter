import React from 'react';

interface ListTagEditorProps {
  setShowTableModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const TableTagEditor: React.FC<ListTagEditorProps> = ({
  setShowTableModal
}) => {
  return (
    <div>
      <h3>Таблицы:</h3>
      <button onClick={() => setShowTableModal(true)}>Добавить таблицу</button>
    </div>
  );
};

export default TableTagEditor;
