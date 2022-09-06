import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Counter from "../Counter/Counter"
import TodoList from "../Todos/TodoList"
import ParameterReader from "../ParameterReader/ParameterReader"
import APICaller from "../APICaller/APICaller"

const RouterReader = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<div>Aqui no hay rutas que mostar</div>}></Route>
                <Route path="/Counter" element={<Counter />}></Route>
                <Route path="/Todos" element={<TodoList />}></Route>
                <Route path="/ParameterReader/:myNumber/:myOtherNumber" element={<ParameterReader />}></Route>

                <Route path="*" element={<div>404 Not Found</div>}></Route>
            </Routes >
            {/* <div>
                <Link to='/'>Home</Link> -
                <Link to='/Counter'>Counter</Link> -
                <Link to='/Todos'>Todos</Link> -
                <Link to='/ParameterReader'>ParameterReader</Link>
            </div> */}
        </>
    )
};
export default RouterReader