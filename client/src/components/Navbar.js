import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components/macro";
import { menuItems } from "../data/menuItems";
import { useLocation } from "react-router-dom";
import NavbarItems from "./NavbarItems";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const offset = window.scrollY;
    console.log(offset);
    if (location.pathname === "/") {
      if (offset > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    } else {
      if (offset > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
  };

  return (
    <Wrapper
      style={{ position: scrolled ? "fixed" : "", top: scrolled ? "0" : "" }}
    >
      <OrderList>
        {menuItems.map((menu, index) => {
          return <NavbarItems items={menu} key={index} />;
        })}
      </OrderList>
      {/* <ResumeButton>Resume</ResumeButton> */}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 5em;
`;

const ResumeButton = styled.button`
  color: white;
  text-decoration: none;
  padding-right: 1em;
  margin-right: 1em;
`;

const OrderList = styled.ol`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style-type: decimal-leading-zero;
  list-style-position: outside;
  color: white;
  gap: 5em;
  width: 100%;
`;

const OrderedListItem = styled.li`
  padding-right: 3em;
  color: white;
`;
export default Navbar;
