import React from "react"; 
import { useDispatch, useSelector } from 'react-redux';
// import {countUp} from '../modules/Count';
import {Link} from 'react-router-dom';

const Count = () => {
    const dispatch = useDispatch(); //Count.jsのreducerを使うため
    const count = useSelector(state => state.count.count); //useStateとかの仲間
    const click = useSelector(state => state.click.click);
    const [resource, setResource] = React.useState("posts");　//ローカルstate(使いすぎないこと、管理が難しい)
    const changeName = name => {
        setResource(name);                                  //setResourceで一回関数を定義して、もう一度用途に合わせて定義
     };
    // const changeCount = () => {
    //     // dispatch(countUp)
    //     alert("届いてます");
    // };
       return(
        <div>
            <div>
            <Link to="/components/new">Count down</Link>
            <button onClick={() => changeName("posts")}>
                Posts
            </button>
            <button onClick={() => changeName("todos")}> {/*引数があるから()を入れる*/}
                Todos
            </button>
              <button onClick={()=> {dispatch({ type: "COUNT_UP" })}}>
                +1 
              </button>    
              <button onClick={()=> {dispatch({ type: "CLICK_A" })}}>
                CLICK A
              </button>                
        </div>
            {resource}
            {count}
            {click}
        </div>    
        );   
};

export default Count;