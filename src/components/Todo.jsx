import { useRecoilState } from "recoil";
import { todoState } from "../store/store";

export const Todo = (props) => {
    // let [todo, setTodo] = useRecoilState(todoState);
    let [todo, setTodo] = useRecoilState(todoState);

    const titleHandler = (e) => {
        let change = [];

        todo.forEach((entry) => {
          let temp = {...entry};
          temp.title = 'test';
          change.push(temp);
        });
        setTodo(change);
    }

  return (
    <>
        <input name="title" type="text" defaultValue={props.entry.title} onChange={titleHandler} />
        <input name="content" type="text" defaultValue={props.entry.content}/>
    </>
  );
};