import React from "react";

const Form = ({setInputText, todos, setTodos, inputText}) => {
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };
    const submitTodoHandler = (e) => {
        e.preventDefault();
        if(inputText !==""){
            setTodos([...todos,{text: inputText, completed: false, id: Math.random()}]);
        }
        setInputText("");
    };
    return(
        <form className="inputField">
            <input 
                value={inputText} 
                onChange={inputTextHandler} 
                type="text"
                placeholder="Enter your todo..." 
            />
            <button 
                onClick={submitTodoHandler} 
                type="submit">
                <i className="fas fa-plus"></i>
            </button>
        </form>
    );
};

export default Form;