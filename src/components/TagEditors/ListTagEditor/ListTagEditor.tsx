import React from 'react';

import { ListType, ModalType } from '../../../types/types';

interface ListTagEditorProps {
  setListType: React.Dispatch<React.SetStateAction<ListType>>;
  setModalType: React.Dispatch<React.SetStateAction<ModalType>>;
}

const ListTagEditor: React.FC<ListTagEditorProps> = ({
  setListType,
  setModalType
}) => {
  return (
    <div>
      <h3>Списки:</h3>
      <button
        onClick={() => {
          setListType('list');
          setModalType('list');
        }}
      >
        Маркированный список
      </button>
      <button
        onClick={() => {
          setListType('olist');
          setModalType('list');
        }}
      >
        Нумерованный список
      </button>
    </div>
  );
};

export default ListTagEditor;
