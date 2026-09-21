import { Outlet } from "react-router";

import Navbar from "./Navbar";
import Footer from "./Footer";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="min-h-[calc(100vh-8rem)]">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}