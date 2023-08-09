import { ITarefa } from '../../types/tarefas';
import style from'./Lista.module.scss'
import Item from "./item";

interface Props{
  tarefas: ITarefa[],
  selecionaTarefa: (tarefaSelecioknada: ITarefa) => void
}

export default function List ({ tarefas,selecionaTarefa }: Props){
    return(
    <aside className={style.listaTarefas}>
      <h2>Tarefas do dia</h2>
      <ul>
      {tarefas.map(item => (
        <Item
        selecionaTarefa= {selecionaTarefa}
        key = {item.id}
          {...item}
        />
      ))}
      </ul>
    </aside>
  )
}