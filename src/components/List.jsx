import { useAtom } from 'jotai';
import React from 'react';
import { todoAtom } from '../lib/atom';

function List() {
    const [todos, setTodos] = useAtom(todoAtom)
    return (
        <div className='border p-3 mt-5'>
            <h3 className='font-bold mb-7'>Todo List</h3>
            {todos.map((todo, index) => (
                <p key={index} className={`py-3 text-sm ${todos.length - 1 !== index ? 'border-b-2' : ''}`}>{todo}</p>
            ))}
        </div>
    );
}

export default List;