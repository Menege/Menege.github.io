import style from './part.module.css'

export default function Part({sumYear, idx}) {

    let idRand=(Math.random() / Math.random()) * Math.random();

    const handlerEnding=()=>{
        let curIdx=idx+1;
        if (curIdx<10){
            switch (curIdx%10) {
                case 0:case 1:case 4:case 5:case 9: return `в ${curIdx}-ый`;
                case 2: return `во ${curIdx}-ой`;
                case 6: case 7: case 8: return `в ${curIdx}-ой`; 
                case 3: return `в ${curIdx}-ий`
                default: return curIdx;
            }
        } else {
            switch (curIdx%10) {
                case 0:case 1:case 4:case 5:case 9:case 2:case 3: return `в ${curIdx}-ый`;
                case 6: case 7: case 8: return `в ${curIdx}-ой`; 
                default: return curIdx;
            }
        }
    }

    return(
        <div className={style.part}>
               <input className={style.input} type="checkbox" id={idRand}/>
               <span className={style.square}></span>
               <label className={style.label} htmlFor={idRand}>{sumYear} рублей <span className={style.label_desc}>{handlerEnding()} год</span></label>
           </div>
    )
}