import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return <main className="px-4 md:px-8">{children}</main>;
};

export default Layout;
