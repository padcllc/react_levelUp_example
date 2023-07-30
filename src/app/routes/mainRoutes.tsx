import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Main,User,ToDoList,UserItem } from "../pages";


export function MainRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route path="/" element={<Navigate to="/todo-list" />} />
            <Route path="/todo-list" element={<ToDoList />} />
            <Route path="/user" element={<User />} />
            <Route path="/user/:id" element={<UserItem/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
