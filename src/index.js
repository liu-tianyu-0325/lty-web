import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import{BrowserRouter}from'react-router-dom'
import { RecoilRoot } from "recoil";

// 为提供的创建一个 React 根container并返回根。
const root = createRoot(document.getElementById("root"));

// 根可用于将 React 元素渲染到 DOM 中
root.render(
    <div>
        <RecoilRoot>
        <BrowserRouter>
        <App />
        </BrowserRouter>
        </RecoilRoot>
    </div>
);

