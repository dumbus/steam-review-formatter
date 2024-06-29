import React from 'react';

interface UrlModalProps {
  textAreaRef: React.RefObject<HTMLTextAreaElement>;
  setText: React.Dispatch<React.SetStateAction<string>>;
  text: string;
  setUrlAddress: React.Dispatch<React.SetStateAction<string>>;
  urlAddress: string;
  setUrlText: React.Dispatch<React.SetStateAction<string>>;
  urlText: string;
  closeModal: () => void;
}

const UrlModal: React.FC<UrlModalProps> = ({
  textAreaRef,
  setText,
  text,
  setUrlAddress,
  urlAddress,
  setUrlText,
  urlText,
  closeModal
}) => {
  const addUrl = () => {
    const textArea = textAreaRef.current;
    if (!textArea) return;

    const start = textArea.selectionStart;
    const end = textArea.selectionEnd;

    const urlTag = `[url=${urlAddress}]${urlText}[/url]`;
    setText(text.slice(0, start) + urlTag + text.slice(end));

    textArea.setSelectionRange(start + urlTag.length, start + urlTag.length);
    textArea.focus();

    closeModal();
  };

  return (
    <div className="modal" onClick={(e) => e.stopPropagation()}>
      <h3>Добавить Ссылку</h3>
      <label>
        Текст ссылки:
        <input
          type="text"
          value={urlText}
          onChange={(e) => setUrlText(e.target.value)}
        />
      </label>
      <label>
        Адрес ссылки (URL):
        <input
          type="text"
          value={urlAddress}
          onChange={(e) => setUrlAddress(e.target.value)}
        />
      </label>
      <button onClick={addUrl}>Добавить</button>
      <button onClick={closeModal}>Отмена</button>
    </div>
  );
};

export default UrlModal;
