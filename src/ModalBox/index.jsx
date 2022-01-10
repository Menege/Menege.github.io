import style from "./modalbox.module.css";
import CalcBlock from "./CalcBlock";
import { useState} from "react";
import exitIcon from '../img/Vector.svg'
import NumberFormat from "react-number-format";

const mrot = 12130;

export default function ModalBox({ active, setActive }) {
  const desc =
    "Используйте налоговый вычет чтобы погасить ипотеку досрочно. Размер налогового вычета составляет не более 13% от своего официального годового дохода.";

  const [isCalc, setIsCalc] = useState(false);
  const [input, setInput] = useState("");
  const [arr, setArr] = useState([]);
  const [error, setError] = useState(false);

  //Проверка введенного значения ссответствию МРОТ в РФ
  const handlerSalary = (values) => {
    const {formattedValue, value} = values;
    if (value > mrot) {
      setInput(value);
      setError(false);
    } else {
      setInput("");
    }
  };

  //Снятие события по умолчанию с кнопки
  const buttonAction = (e) => {
    e.preventDefault();
  };

  //Расчет ежемесячного вычета
  const handlerCalc = () => {
    setArr([]);
    if (input) {
      let perYear = input * 12 * 0.13;
      let x = 0;
      const maxValue = 260000;
      while (x < maxValue) {
        if (x + perYear > maxValue) {
          x = maxValue - x;
          setArr((number) => [...number, x]);
          break;
        } else {
          x += perYear;
          setArr((number) => [...number, perYear]);
        }
      }
      setIsCalc(true);
    } else {
      setError(true);
      setIsCalc(false);
    }
  };


  return (
    <div className={style.box}>
      <div
        className={style.exit}
        onClick={() => {
          setActive(false);
          setIsCalc(false);
        }}
      >
        <img src={exitIcon} alt="Выход" />
      </div>
      <span className={style.title}>Налоговый вычет</span>
      <p className={style.desc}> {desc} </p>
      <form action="">
        <span className={style.quest}>Ваша зарплата в месяц</span>
        <NumberFormat
          value={input}
          thousandSeparator=" "
          suffix=" ₽"
          placeholder="Введите данные"
          onValueChange={handlerSalary}
          className={error ? style.salary_input_error : style.salary_input}
        />
        {error && (
          <div className={style.text_error}>
            Введите заработную плату выше минимального
            размера (МРОТ в РФ 12 130 ₽)
          </div>
        )}
        <span
          className={style.calc}
          onClick={handlerCalc}
        >
          Рассчитать
        </span>
        {isCalc && <CalcBlock arr={arr} />}
        <div className={style.block_quest}>
          <div className={`${style.quest} ${style.mg32}`}>Что уменьшаем?</div>
          <input
            className={style.reduce_input}
            name="reduce"
            type="radio"
            value="Pay"
            id="Pay"
          />
          <label className={style.label} htmlFor="Pay">
            Платеж
          </label>
          <input
            className={style.reduce_input}
            name="reduce"
            type="radio"
            value="Period"
            id="Period"
          />
          <label className={style.label} htmlFor="Period">
            Срок
          </label>
        </div>
        <button onClick={buttonAction} className={style.form__button}>
          Добавить
        </button>
      </form>
    </div>
  );
}
