import style from "./App.module.css";
import Button from "@mui/material/Button";
import ModalBox from "./ModalBox";

import { useState} from "react";


function App() {
  const [isModal, setIsModal] = useState(false);
  
  return (
    <div className={isModal?style.modal_open:style.app}>
      <div className={style.container}>
        <div className={isModal?style.flexbox_modal:style.flexbox}>
           {!isModal && <div className={style.block_btn}><button
              className={style.button}
              onClick={() => setIsModal(true)}
            >
              Налоговый вычет
            </button></div>} 
          <div className={style.block_modal}>
            {isModal && <ModalBox active={isModal} setActive={setIsModal} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
