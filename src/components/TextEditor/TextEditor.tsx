import React, { useState, useRef } from 'react';

import './TextEditor.scss';

import SimpleTagEditor from '../TagEditors/SimpleTagEditor/SimpleTagEditor';
import ComplexTagEditor from '../TagEditors/ComplexTagEditor/ComplexTagEditor';
import ListTagEditor from '../TagEditors/ListTagEditor/ListTagEditor';
import TableTagEditor from '../TagEditors/TableTagEditor/TableTagEditor';

import QuoteModal from '../Modals/QuoteModal/QuoteModal';
import UrlModal from '../Modals/UrlModal/UrlModal';
import ListModal from '../Modals/ListModal/ListModal';
import TableModal from '../Modals/TableModal/TableModal';

const TextEditor = () => {
  const [text, setText] = useState<string>('');

  const [modalType, setModalType] = useState<
    'qoute' | 'url' | 'list' | 'table' | ''
  >('');

  // const [showQuoteModal, setShowQuoteModal] = useState<boolean>(false);
  const [quoteText, setQuoteText] = useState<string>('');
  const [quoteAuthor, setQuoteAuthor] = useState<string>('');

  // const [showUrlModal, setShowUrlModal] = useState<boolean>(false);
  const [urlText, setUrlText] = useState<string>('');
  const [urlAddress, setUrlAddress] = useState<string>('');

  // const [showListModal, setShowListModal] = useState<boolean>(false);
  const [listType, setListType] = useState<'list' | 'olist'>('list');
  const [listItems, setListItems] = useState<string[]>(['']);

  // const [showTableModal, setShowTableModal] = useState<boolean>(false);
  const [tableData, setTableData] = useState<string[][]>([['']]);
  const [noborder, setNoborder] = useState<boolean>(false);
  const [equalcells, setEqualcells] = useState<boolean>(false);

  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const closeModal = () => {
    switch (modalType) {
      case 'qoute':
        setQuoteText('');
        setQuoteAuthor('');
        break;

      case 'url':
        setUrlText('');
        setUrlAddress('');
        break;

      case 'list':
        setListItems(['']);
        break;

      case 'table':
        setTableData([['']]);
        setNoborder(false);
        setEqualcells(false);
        break;
    }

    setModalType('');
  };

  return (
    <>
      <SimpleTagEditor
        textAreaRef={textAreaRef}
        setText={setText}
        text={text}
      />

      <ComplexTagEditor setModalType={setModalType} />

      <ListTagEditor setModalType={setModalType} setListType={setListType} />

      <TableTagEditor setModalType={setModalType} />

      {modalType && (
        <div className="overlay" onClick={closeModal}>
          {modalType === 'qoute' && (
            <QuoteModal
              textAreaRef={textAreaRef}
              setText={setText}
              text={text}
              setQuoteAuthor={setQuoteAuthor}
              quoteAuthor={quoteAuthor}
              setQuoteText={setQuoteText}
              quoteText={quoteText}
              closeModal={closeModal}
            />
          )}

          {modalType === 'url' && (
            <UrlModal
              textAreaRef={textAreaRef}
              setText={setText}
              text={text}
              setUrlAddress={setUrlAddress}
              urlAddress={urlAddress}
              setUrlText={setUrlText}
              urlText={urlText}
              closeModal={closeModal}
            />
          )}

          {modalType === 'list' && (
            <ListModal
              textAreaRef={textAreaRef}
              setText={setText}
              text={text}
              listType={listType}
              setListItems={setListItems}
              listItems={listItems}
              closeModal={closeModal}
            />
          )}

          {modalType === 'table' && (
            <TableModal
              textAreaRef={textAreaRef}
              setText={setText}
              text={text}
              setTableData={setTableData}
              tableData={tableData}
              setNoborder={setNoborder}
              noborder={noborder}
              setEqualcells={setEqualcells}
              equalcells={equalcells}
              closeModal={closeModal}
            />
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
