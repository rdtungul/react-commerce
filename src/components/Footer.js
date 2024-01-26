import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom/cjs/react-router-dom";
const Footer = () => {
  const years = new Date().getFullYear();
  return (
    <Wrapper>
      <h5>
        &copy; {years}{" "}
        <Link to="https://rosephdarl.netlify.app/">rosephdarl</Link>
      </h5>
      <h5>Made with 🤍.</h5>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--clr-black);
  text-align: center;
  span {
    color: var(--clr-primary-5);
  }
  h5 {
    color: var(--clr-white);
    margin: 0.1rem;
    color: #eeeeee !important;
    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }
  @media (min-width: 776px) {
    flex-direction: row;
  }
`;

export default Footer;
