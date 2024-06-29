import React from 'react';

import { ModalType } from '../../../types/types';

interface ListTagEditorProps {
  setModalType: React.Dispatch<React.SetStateAction<ModalType>>;
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
