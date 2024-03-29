import { HashLink } from "react-router-hash-link";
import styled from "styled-components/macro";

const NavbarItems = ({ items }) => {
  return (
    <Li>
      <HashLink to={items.url}>{items.title}</HashLink>
    </Li>
  );
};

const Li = styled.li`
  > a {
    transition: all 0.2s ease-in;
  }
  > a:hover {
    color: var(--green);
  }
`;

export default NavbarItems;
