import React, { useState, useRef } from 'react';

import './TextEditor.scss';

const TextEditor = () => {
  const [text, setText] = useState<string>('');
  const [showQuoteModal, setShowQuoteModal] = useState<boolean>(false);
  const [quoteText, setQuoteText] = useState<string>('');
  const [quoteAuthor, setQuoteAuthor] = useState<string>('');
  const [showUrlModal, setShowUrlModal] = useState<boolean>(false);
  const [urlText, setUrlText] = useState<string>('');
  const [urlAddress, setUrlAddress] = useState<string>('');
  const [showListModal, setShowListModal] = useState<boolean>(false);
  const [listType, setListType] = useState<'list' | 'olist'>('list');
  const [listItems, setListItems] = useState<string[]>(['']);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const simpleTag = (tag: string) => {
    const textArea = textAreaRef.current;
    if (!textArea) return;

    const start = textArea.selectionStart;
    const end = textArea.selectionEnd;
    const selectedText = textArea.value.substring(start, end);

    const wrappedText = `[${tag}]${selectedText}[/${tag}]`;

    setText(text.slice(0, start) + wrappedText + text.slice(end));
  };

  const drawLine = () => {
    const textArea = textAreaRef.current;
    if (!textArea) return;

    const start = textArea.selectionStart;
    const end = textArea.selectionEnd;

    let lineTag = '[hr][/hr]';

    if (start > 0 && text[start - 1] !== '\n') {
      lineTag = `\n${lineTag}`;
    }
    if (end < text.length && text[end] !== '\n') {
      lineTag = `${lineTag}\n`;
    }

    setText(text.slice(0, start) + lineTag + text.slice(end));

    textArea.setSelectionRange(start + lineTag.length, start + lineTag.length);
    textArea.focus();
  };

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
    setShowQuoteModal(false);
    setQuoteText('');
    setQuoteAuthor('');
  };

  const addUrl = () => {
    const textArea = textAreaRef.current;
    if (!textArea) return;

    const start = textArea.selectionStart;
    const end = textArea.selectionEnd;

    const urlTag = `[url=${urlAddress}]${urlText}[/url]`;
    setText(text.slice(0, start) + urlTag + text.slice(end));

    textArea.setSelectionRange(start + urlTag.length, start + urlTag.length);
    textArea.focus();
    setShowUrlModal(false);
    setUrlText('');
    setUrlAddress('');
  };

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

  const closeModal = () => {
    setShowQuoteModal(false);
    setShowUrlModal(false);
    setShowListModal(false);
    setQuoteText('');
    setQuoteAuthor('');
    setUrlText('');
    setUrlAddress('');
    setListItems(['']);
  };

  return (
    <>
      <div>
        <h3>Простые теги:</h3>
        <button onClick={() => simpleTag('h1')}>Заголовок 1</button>
        <button onClick={() => simpleTag('h2')}>Заголовок 2</button>
        <button onClick={() => simpleTag('h3')}>Заголовок 3</button>
        <button onClick={() => simpleTag('b')}>Полужирный текст</button>
        <button onClick={() => simpleTag('u')}>Подчёркнутый текст</button>
        <button onClick={() => simpleTag('i')}>Курсив</button>
        <button onClick={() => simpleTag('strike')}>Зачёркнутый текст</button>
        <button onClick={() => simpleTag('spoiler')}>Скрытый текст</button>
        <button onClick={() => simpleTag('noparse')}>
          Не обрабатывать теги
        </button>
        <button onClick={() => simpleTag('code')}>
          Моноширинный шрифт, сохраняет пробелы
        </button>
        <button onClick={drawLine}>Нарисовать горизонтальную линию</button>
      </div>

      <div>
        <h3>Сложные теги:</h3>
        <button onClick={() => setShowQuoteModal(true)}>Цитата</button>
        <button onClick={() => setShowUrlModal(true)}>Ссылка</button>
      </div>

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

      {(showQuoteModal || showUrlModal || showListModal) && (
        <div className="overlay" onClick={closeModal}>
          {showQuoteModal && (
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
          )}

          {showUrlModal && (
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
          )}

          {showListModal && (
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              <h3>
                Добавить{' '}
                {listType === 'list' ? 'Маркированный' : 'Нумерованный'} список
              </h3>
              {listItems.map((item, index) => (
                <div key={index}>
                  <label>
                    Элемент списка:
                    <input
                      type="text"
                      value={item}
                      onChange={(e) =>
                        handleListItemChange(index, e.target.value)
                      }
                    />
                  </label>
                </div>
              ))}
              <button onClick={addListItem}>Добавить элемент</button>
              <button onClick={addList}>Добавить список</button>
              <button onClick={closeModal}>Отмена</button>
            </div>
          )}
        </div>
      )}

      <h2>Текст отзыва:</h2>
      <textarea
        ref={textAreaRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={10}
        cols={50}
      />
    </>
  );
};

export default TextEditor;
