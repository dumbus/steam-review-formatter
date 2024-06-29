import React from 'react';

import { ModalType } from '../../../types/types';

interface ComplexTagEditorProps {
  setModalType: React.Dispatch<React.SetStateAction<ModalType>>;
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
