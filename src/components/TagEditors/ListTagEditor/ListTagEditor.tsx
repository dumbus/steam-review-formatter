import React from 'react';

interface ListTagEditorProps {
  setListType: React.Dispatch<React.SetStateAction<'list' | 'olist'>>;
  setModalType: React.Dispatch<
    React.SetStateAction<'qoute' | 'url' | 'list' | 'table' | ''>
  >;
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
