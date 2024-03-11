import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";

export const Layout: React.FC = () => {
  return (
    <section className="h-[100dvh] text-[#393939]">
      <Header />

      <div className="container-blog">
        <Outlet />
      </div>
    </section>
  );
};
