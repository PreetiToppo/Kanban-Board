import Navbars from "../Component/Navbar";
import Sidebar from "./sidebar";

function RootLayout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="max-w-6xl flex-1 mx-auto bg-white">
        <Navbars />
        {children}
      </main>
    </div>
  );
}

export default RootLayout;
