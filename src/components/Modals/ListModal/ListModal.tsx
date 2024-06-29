import React from 'react';

interface ListModalProps {
  textAreaRef: React.RefObject<HTMLTextAreaElement>;
  setText: React.Dispatch<React.SetStateAction<string>>;
  text: string;
  listType: string;
  setListItems: React.Dispatch<React.SetStateAction<string[]>>;
  listItems: string[];
  closeModal: () => void;
}

const ListModal: React.FC<ListModalProps> = ({
  textAreaRef,
  setText,
  text,
  listType,
  setListItems,
  listItems,
  closeModal
}) => {
  const addListItem = () => {
    setListItems([...listItems, '']);
  };

  const handleListItemChange = (index: number, value: string) => {
    const newListItems = [...listItems];
    newListItems[index] = value;
    setListItems(newListItems);
  };

  const addList = () => {
    const textArea = textAreaRef.current;
    if (!textArea) return;

    const start = textArea.selectionStart;
    const end = textArea.selectionEnd;

    const listTag = listType === 'list' ? 'list' : 'olist';
    const listContent = listItems
      .filter((item) => item.trim() !== '')
      .map((item) => `  [*]${item}\n`)
      .join('');

    const listText = `[${listTag}]\n${listContent}[/${listTag}]`;

    setText(text.slice(0, start) + listText + text.slice(end));
    textArea.setSelectionRange(
      start + listText.length,
      start + listText.length
    );
    textArea.focus();

    closeModal();
  };

  return (
    <div className="modal" onClick={(e) => e.stopPropagation()}>
      <h3>
        Добавить {listType === 'list' ? 'Маркированный' : 'Нумерованный'} список
      </h3>
      {listItems.map((item, index) => (
        <div key={index}>
          <label>
            Элемент списка:
            <input
              type="text"
              value={item}
              onChange={(e) => handleListItemChange(index, e.target.value)}
            />
          </label>
        </div>
      ))}
      <button onClick={addListItem}>Добавить элемент</button>
      <button onClick={addList}>Добавить список</button>
      <button onClick={closeModal}>Отмена</button>
    </div>
  );
};

export default ListModal;
