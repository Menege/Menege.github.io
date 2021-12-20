import style from './calcblock.module.css'
import Part from './Part'

export default function CalcBlock({arr}){

 return (
     <div className={style.block}>
         <span className={style.title}>Итого можете внести в качестве досрочных:</span>
         <div className={style.parts}>
           {arr && arr.map((i, idx) => <Part sumYear={i} idx={idx} key={(Math.random() / Math.random()) * Math.random()} />)}
         </div>
     </div>
 )
}