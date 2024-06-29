import React from 'react';

interface ComplexTagEditorProps {
  setShowQuoteModal: React.Dispatch<React.SetStateAction<boolean>>;
  setShowUrlModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ComplexTagEditor: React.FC<ComplexTagEditorProps> = ({
  setShowQuoteModal,
  setShowUrlModal
}) => {
  return (
    <div>
      <h3>Сложные теги:</h3>
      <button onClick={() => setShowQuoteModal(true)}>Цитата</button>
      <button onClick={() => setShowUrlModal(true)}>Ссылка</button>
    </div>
  );
};

export default ComplexTagEditor;
