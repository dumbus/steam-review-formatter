import React from 'react';

interface QuoteModalProps {
  textAreaRef: React.RefObject<HTMLTextAreaElement>;
  setText: React.Dispatch<React.SetStateAction<string>>;
  text: string;
  setQuoteAuthor: React.Dispatch<React.SetStateAction<string>>;
  quoteAuthor: string;
  setQuoteText: React.Dispatch<React.SetStateAction<string>>;
  quoteText: string;
  closeModal: () => void;
}

const QuoteModal: React.FC<QuoteModalProps> = ({
  textAreaRef,
  setText,
  text,
  setQuoteAuthor,
  quoteAuthor,
  setQuoteText,
  quoteText,
  closeModal
}) => {
  const addQuote = () => {
    const textArea = textAreaRef.current;
    if (!textArea) return;

    const start = textArea.selectionStart;
    const end = textArea.selectionEnd;

    const quoteTag = `[quote=${quoteAuthor}]${quoteText}[/quote]`;
    setText(text.slice(0, start) + quoteTag + text.slice(end));

    textArea.setSelectionRange(
      start + quoteTag.length,
      start + quoteTag.length
    );
    textArea.focus();

    closeModal();
  };

  return (
    <div className="modal" onClick={(e) => e.stopPropagation()}>
      <h3>Добавить Цитату</h3>
      <label>
        Текст цитаты:
        <textarea
          value={quoteText}
          onChange={(e) => setQuoteText(e.target.value)}
        />
      </label>
      <label>
        Автор цитаты:
        <input
          type="text"
          value={quoteAuthor}
          onChange={(e) => setQuoteAuthor(e.target.value)}
        />
      </label>
      <button onClick={addQuote}>Добавить</button>
      <button onClick={closeModal}>Отмена</button>
    </div>
  );
};

export default QuoteModal;
