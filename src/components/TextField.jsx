import { useSetAtom } from 'jotai';
import { useRef } from 'react';
import { todoAtom } from '../lib/atom';

function textField() {
    const setTodos = useSetAtom(todoAtom)
    const inputRef = useRef()

    console.log("textField rerendered")

    function handleAdd() {
        setTodos(todo => [...todo, inputRef.current.value])
        inputRef.current.value = ""
    }

    return (
        <div className='mt-5'>
            <button className='border px-3 py-1 bg-slate-300 rounded' onClick={handleAdd}>Add</button>
            <input className='ml-5 outline-none border rounded px-2 py-1' ref={inputRef} type="text" placeholder='Do the dishe....' />
        </div>
    );
}

export default textField;