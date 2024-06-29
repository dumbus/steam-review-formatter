import React, { useState, useRef } from 'react';

import './TextEditor.scss';

import SimpleTagEditor from '../TagEditors/SimpleTagEditor/SimpleTagEditor';
import ComplexTagEditor from '../TagEditors/ComplexTagEditor/ComplexTagEditor';
import ListTagEditor from '../TagEditors/ListTagEditor/ListTagEditor';
import TableTagEditor from '../TagEditors/TableTagEditor/TableTagEditor';

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

  const [showTableModal, setShowTableModal] = useState<boolean>(false);
  const [tableData, setTableData] = useState<string[][]>([['']]);
  const [noborder, setNoborder] = useState<boolean>(false);
  const [equalcells, setEqualcells] = useState<boolean>(false);

  const textAreaRef = useRef<HTMLTextAreaElement>(null);

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

  const addTableRow = () => {
    const newTableData = [...tableData, Array(tableData[0].length).fill('')];
    setTableData(newTableData);
  };

  const addTableColumn = () => {
    const newTableData = tableData.map((row) => [...row, '']);
    setTableData(newTableData);
  };

  const handleTableCellChange = (
    rowIndex: number,
    colIndex: number,
    value: string
  ) => {
    const newTableData = [...tableData];
    newTableData[rowIndex][colIndex] = value;
    setTableData(newTableData);
  };

  const addTable = () => {
    const textArea = textAreaRef.current;
    if (!textArea) return;

    const start = textArea.selectionStart;
    const end = textArea.selectionEnd;

    const borderAttr = noborder ? ' noborder=1' : '';
    const equalcellsAttr = equalcells ? ' equalcells=1' : '';

    const tableHeader = `[table${borderAttr}${equalcellsAttr}]\n`;
    const tableFooter = `[/table]`;

    const tableContent = tableData
      .map((row, rowIndex) => {
        const rowTag = rowIndex === 0 ? 'tr' : 'tr';
        const cellTag = rowIndex === 0 ? 'th' : 'td';
        const cells = row
          .map((cell) => `    [${cellTag}]${cell}[/${cellTag}]`)
          .join('\n');
        return `  [${rowTag}]\n${cells}\n  [/${rowTag}]\n`;
      })
      .join('');

    const tableText = `${tableHeader}${tableContent}${tableFooter}`;

    setText(text.slice(0, start) + tableText + text.slice(end));
    textArea.setSelectionRange(
      start + tableText.length,
      start + tableText.length
    );
    textArea.focus();
    closeModal();
  };

  const closeModal = () => {
    setShowQuoteModal(false);
    setQuoteText('');
    setQuoteAuthor('');

    setShowUrlModal(false);
    setUrlText('');
    setUrlAddress('');

    setShowListModal(false);
    setListItems(['']);

    setShowTableModal(false);
    setTableData([['']]);
    setNoborder(false);
    setEqualcells(false);
  };

  return (
    <>
      <SimpleTagEditor
        textAreaRef={textAreaRef}
        setText={setText}
        text={text}
      />

      <ComplexTagEditor
        setShowQuoteModal={setShowQuoteModal}
        setShowUrlModal={setShowUrlModal}
      />

      <ListTagEditor
        setListType={setListType}
        setShowListModal={setShowListModal}
      />

      <TableTagEditor setShowTableModal={setShowTableModal} />

      {(showQuoteModal || showUrlModal || showListModal || showTableModal) && (
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

          {showTableModal && (
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              <h3>Добавить таблицу</h3>
              <table>
                <tbody>
                  {tableData.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {row.map((cell, colIndex) => (
                        <td key={colIndex}>
                          <input
                            type="text"
                            value={cell}
                            onChange={(e) =>
                              handleTableCellChange(
                                rowIndex,
                                colIndex,
                                e.target.value
                              )
                            }
                          />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
              <button onClick={addTableRow}>Добавить ряд</button>
              <button onClick={addTableColumn}>Добавить колонку</button>
              <label>
                <input
                  type="checkbox"
                  checked={noborder}
                  onChange={(e) => setNoborder(e.target.checked)}
                />
                Скрыть рамки таблицы
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={equalcells}
                  onChange={(e) => setEqualcells(e.target.checked)}
                />
                Растянуть таблицу на всю ширину страницы
              </label>
              <button onClick={addTable}>Добавить таблицу</button>
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
