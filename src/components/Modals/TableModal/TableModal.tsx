import React from 'react';

interface TableModalProps {
  textAreaRef: React.RefObject<HTMLTextAreaElement>;
  setText: React.Dispatch<React.SetStateAction<string>>;
  text: string;
  setTableData: React.Dispatch<React.SetStateAction<string[][]>>;
  tableData: string[][];
  setNoborder: React.Dispatch<React.SetStateAction<boolean>>;
  noborder: boolean;
  setEqualcells: React.Dispatch<React.SetStateAction<boolean>>;
  equalcells: boolean;
  closeModal: () => void;
}

const TableModal: React.FC<TableModalProps> = ({
  textAreaRef,
  setText,
  text,
  setTableData,
  tableData,
  setNoborder,
  noborder,
  setEqualcells,
  equalcells,
  closeModal
}) => {
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

    let tableHeader = `[table${borderAttr}${equalcellsAttr}]\n`;
    let tableFooter = `[/table]`;

    if (start > 0 && text[start - 1] !== '\n') {
      tableHeader = `\n${tableHeader}`;
    }
    if (end < text.length && text[end] !== '\n') {
      tableFooter = `${tableFooter}\n`;
    }

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

  return (
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
                      handleTableCellChange(rowIndex, colIndex, e.target.value)
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
  );
};

export default TableModal;
