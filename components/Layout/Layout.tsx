import React from 'react'
import NavBar from "@components/NavBar/NavBar";

type LayoutProps = {
  children: React.ReactNode; 
};


const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <div>
      <NavBar />
      { children }
      <footer>this is the footer</footer>
    </div>
  )
}

export default Layout