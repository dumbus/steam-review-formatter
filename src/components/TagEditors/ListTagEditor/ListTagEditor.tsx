import React from 'react';

interface ListTagEditorProps {
  setListType: React.Dispatch<React.SetStateAction<'list' | 'olist'>>;
  setShowListModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ListTagEditor: React.FC<ListTagEditorProps> = ({
  setListType,
  setShowListModal
}) => {
  return (
    <div>
      <h3>Списки:</h3>
      <button
        onClick={() => {
          setListType('list');
          setShowListModal(true);
        }}
      >
        Маркированный список
      </button>
      <button
        onClick={() => {
          setListType('olist');
          setShowListModal(true);
        }}
      >
        Нумерованный список
      </button>
    </div>
  );
};

export default ListTagEditor;
