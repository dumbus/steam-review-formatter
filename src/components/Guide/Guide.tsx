import React from 'react';

import './Guide.scss';

const Guide = () => {
  return (
    <div className="guide">
      <h2>Пример оформления:</h2>

      <div className="guide-table">
        <div className="guide-row guide-header">
          <div className="guide-cell guide-cell__tag">Синтаксис</div>
          <div className="guide-cell guide-cell__example">Пример</div>
        </div>

        <div className="guide-row">
          <div className="guide-cell guide-cell__tag">
            [h1] Заголовок 1 [/h1]
          </div>
          <div className="guide-cell guide-cell__example">
            <div className="steam-h1">Заголовок 1</div>
          </div>
        </div>

        <div className="guide-row">
          <div className="guide-cell guide-cell__tag">
            [h2] Заголовок 2 [/h2]
          </div>
          <div className="guide-cell guide-cell__example">
            <div className="steam-h2">Заголовок 2</div>
          </div>
        </div>

        <div className="guide-row">
          <div className="guide-cell guide-cell__tag">
            [h3] Заголовок 3 [/h3]
          </div>
          <div className="guide-cell guide-cell__example">
            <div className="steam-h3">Заголовок 3</div>
          </div>
        </div>

        <div className="guide-row">
          <div className="guide-cell guide-cell__tag">
            [b] Полужирный текст [/b]
          </div>
          <div className="guide-cell guide-cell__example">
            <div className="steam-b">Полужирный текст</div>
          </div>
        </div>

        <div className="guide-row">
          <div className="guide-cell guide-cell__tag">
            [u] Подчёркнутый текст [/u]
          </div>
          <div className="guide-cell guide-cell__example">
            <div className="steam-u">Подчёркнутый текст</div>
          </div>
        </div>

        <div className="guide-row">
          <div className="guide-cell guide-cell__tag">[i] Курсив [/i]</div>
          <div className="guide-cell guide-cell__example">
            <div className="steam-i">Курсив</div>
          </div>
        </div>

        <div className="guide-row">
          <div className="guide-cell guide-cell__tag">
            [strike] Зачёркнутый текст [/strike]
          </div>
          <div className="guide-cell guide-cell__example">
            <div className="steam-strike">Зачёркнутый текст</div>
          </div>
        </div>

        <div className="guide-row">
          <div className="guide-cell guide-cell__tag">
            [spoiler] Скрытый текст [/spoiler]
          </div>
          <div className="guide-cell guide-cell__example">
            <div className="steam-spoiler">Скрытый текст</div>
          </div>
        </div>

        <div className="guide-row">
          <div className="guide-cell guide-cell__tag">
            [noparse] Не обрабатывать [b]теги[/b] [/noparse]
          </div>
          <div className="guide-cell guide-cell__example">
            <div className="steam-noparse">Не обрабатывать [b]теги[/b]</div>
          </div>
        </div>

        <div className="guide-row">
          <div className="guide-cell guide-cell__tag">
            [code] Моноширинный шрифт, сохраняет пробелы [/code]
          </div>
          <div className="guide-cell guide-cell__example">
            <div className="steam-code">
              Моноширинный шрифт, сохраняет пробелы
            </div>
          </div>
        </div>

        <div className="guide-row">
          <div className="guide-cell guide-cell__tag">
            [quote=author] Цитата [/quote]
          </div>
          <div className="guide-cell guide-cell__example">
            <blockquote className="steam-qoute">
              <div className="steam-quote__author">
                Автор сообщения:
                <b> author</b>
              </div>
              <div className="steam-quote__quote">Цитата</div>
            </blockquote>
          </div>
        </div>

        <div className="guide-row">
          <div className="guide-cell guide-cell__tag">
            <div>Нарисовать горизонтальную линию</div>
            <div>[hr][/hr]</div>
          </div>
          <div className="guide-cell guide-cell__example">
            Нарисовать горизонтальную линию
            <div className="steam-hr" />
          </div>
        </div>

        <div className="guide-row">
          <div className="guide-cell guide-cell__tag">
            <div className="guide-cell__item">[list]</div>
            <div className="guide-cell__item">
              &nbsp;&nbsp;&nbsp;&nbsp; [*]Маркированный список
            </div>
            <div className="guide-cell__item">
              &nbsp;&nbsp;&nbsp;&nbsp; [*]Маркированный список
            </div>
            <div className="guide-cell__item">
              &nbsp;&nbsp;&nbsp;&nbsp; [*]Маркированный список
            </div>
            <div className="guide-cell__item">[/list]</div>
          </div>

          <div className="guide-cell guide-cell__example">
            <ul className="steam-ul">
              <li className="steam-li">Маркированный список</li>
              <li className="steam-li">Маркированный список</li>
              <li className="steam-li">Маркированный список</li>
            </ul>
          </div>
        </div>

        <div className="guide-row">
          <div className="guide-cell guide-cell__tag">
            <div className="guide-cell__item">[list]</div>
            <div className="guide-cell__item">
              &nbsp;&nbsp;&nbsp;&nbsp; [*]Нумерованный список
            </div>
            <div className="guide-cell__item">
              &nbsp;&nbsp;&nbsp;&nbsp; [*]Нумерованный список
            </div>
            <div className="guide-cell__item">
              &nbsp;&nbsp;&nbsp;&nbsp; [*]Нумерованный список
            </div>
            <div className="guide-cell__item">[/list]</div>
          </div>

          <div className="guide-cell guide-cell__example">
            <ol className="steam-ol">
              <li className="steam-li">Нумерованный список</li>
              <li className="steam-li">Нумерованный список</li>
              <li className="steam-li">Нумерованный список</li>
            </ol>
          </div>
        </div>

        <div className="guide-row">
          <div className="guide-cell guide-cell__tag">
            <div className="guide-cell__item">[table]</div>

            <div className="guide-cell__item">
              &nbsp;&nbsp;&nbsp;&nbsp; [tr]
            </div>
            <div className="guide-cell__item">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [th] Name [/th]
            </div>
            <div className="guide-cell__item">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [th] Age [/th]
            </div>
            <div className="guide-cell__item">
              &nbsp;&nbsp;&nbsp;&nbsp; [/tr]
            </div>

            <div className="guide-cell__item">
              &nbsp;&nbsp;&nbsp;&nbsp; [tr]
            </div>
            <div className="guide-cell__item">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [td] John [/td]
            </div>
            <div className="guide-cell__item">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [td] 65 [/td]
            </div>
            <div className="guide-cell__item">
              &nbsp;&nbsp;&nbsp;&nbsp; [/tr]
            </div>

            <div className="guide-cell__item">
              &nbsp;&nbsp;&nbsp;&nbsp; [tr]
            </div>
            <div className="guide-cell__item">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [td] Gitte [/td]
            </div>
            <div className="guide-cell__item">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [td] 40 [/td]
            </div>
            <div className="guide-cell__item">
              &nbsp;&nbsp;&nbsp;&nbsp; [/tr]
            </div>

            <div className="guide-cell__item">
              &nbsp;&nbsp;&nbsp;&nbsp; [tr]
            </div>
            <div className="guide-cell__item">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [td] Sussie [/td]
            </div>
            <div className="guide-cell__item">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [td] 19 [/td]
            </div>
            <div className="guide-cell__item">
              &nbsp;&nbsp;&nbsp;&nbsp; [/tr]
            </div>

            <div className="guide-cell__item">[/table]</div>
          </div>

          <div className="guide-cell guide-cell__example">
            <div className="steam-table">
              <div className="steam-table__tr">
                <div className="steam-table__th">Name</div>
                <div className="steam-table__th">Age</div>
              </div>

              <div className="steam-table__tr">
                <div className="steam-table__td">John</div>
                <div className="steam-table__td">65</div>
              </div>

              <div className="steam-table__tr">
                <div className="steam-table__td">Gitte</div>
                <div className="steam-table__td">40</div>
              </div>

              <div className="steam-table__tr">
                <div className="steam-table__td">Sussie</div>
                <div className="steam-table__td">19</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guide;
