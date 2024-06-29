import React from 'react';

interface SimpleTagEditorProps {
  textAreaRef: React.RefObject<HTMLTextAreaElement>;
  setText: React.Dispatch<React.SetStateAction<string>>;
  text: string;
}

const SimpleTagEditor: React.FC<SimpleTagEditorProps> = ({
  textAreaRef,
  setText,
  text
}) => {
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

  return (
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
      <button onClick={() => simpleTag('noparse')}>Не обрабатывать теги</button>
      <button onClick={() => simpleTag('code')}>
        Моноширинный шрифт, сохраняет пробелы
      </button>

      <button onClick={drawLine}>Нарисовать горизонтальную линию</button>
    </div>
  );
};

export default SimpleTagEditor;
