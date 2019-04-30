import React from 'react';
import { shallow } from 'enzyme';

const List = (props) => {
    console.log(props.array)
    function createLi(item) {
        return <li key={item.id}>{item.value}<button value={item.id} onClick={props.onDelete}>X</button></li>
    }
    if (props.array.length !== 0) {
        return (
            <ul>
                {props.array.map(item => createLi(item))}
            </ul>
        )
    } else {
        return <></>
    }
}

export default List;
