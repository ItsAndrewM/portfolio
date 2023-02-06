import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";

const Navbar = () => {
    const [show, setShow] = useState(true);

    useEffect(() => {
        let previousScrollY = 0;
        let currentScrollY = 0;

        window.addEventListener('scroll', ((e) => {
            currentScrollY = window.pageYOffset;

            if (previousScrollY - currentScrollY < 0) {
                setShow(false);
            }
            else if (previousScrollY - currentScrollY > 0) {
                setShow(true);
            }

            previousScrollY = currentScrollY;
        }));
    }, []);

    return (
        <Wrapper style={{top: !show ? '0px' : '-50px'}}>
            <OrderList>
                <OrderedListItem>About</OrderedListItem>
                <OrderedListItem>Experience</OrderedListItem>
                <OrderedListItem>Work</OrderedListItem>
                <OrderedListItem>Contact</OrderedListItem>
            </OrderList>
            <ResumeButton>Resume</ResumeButton>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    border: 1px solid red;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
`

const ResumeButton = styled.button`
    color: white;
    text-decoration: none;
    padding-right: 1em;
    margin-right: 1em;
`

const OrderList = styled.ol`
    display: flex;
    align-items: center;
    justify-content: center;
    list-style-type: decimal-leading-zero;
    list-style-position: outside;
    color: white;
`

const OrderedListItem = styled.li`
    padding-right: 3em;
    color: white;
`
export default Navbar;