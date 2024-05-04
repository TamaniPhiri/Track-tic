import { FC, ReactNode } from "react";
import NavBar from "./NavBar";

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <main className="px-4 md:px-8 min-h-screen w-full relative max-w-7xl mx-auto items-center justify-center">
      <NavBar />
      <section>{children}</section>
    </main>
  );
};

export default Layout;
