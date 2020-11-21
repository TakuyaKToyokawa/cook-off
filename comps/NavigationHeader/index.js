import React from "react";
import styled, { css } from "styled-components";
import Link from "next/link";

const Maindiv = styled.div`
  width: 100px;
  color: #f04b4a;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  margin-left: ${(props) => (props.displayArrow ? "0px" : "0px")};
`;

const Textdiv = styled.h1`
  display: flex;
  color: #f14b4a;
  flex-direction: column;
  width: 50px;
  margin: 0px;
  margin-left: 20px;
  padding-left: ${(props) => (props.displayArrow ? "25px" : "0px")};
`;

const Arrow = styled.img`
  width: 30px;
  height: 50px;
  cursor: pointer;
`;

const NavigationHeader = ({ text, displayArrow, link }) => {
  return (
    <div>
      <Maindiv>
        {displayArrow == true ? (
          <Link href={link}>
            <Arrow src="./redarrow.png" />
          </Link>
        ) : undefined}
        <Textdiv> {text} </Textdiv>
      </Maindiv>
    </div>
  );
};

NavigationHeader.defaultProps = {
  text: "text",
  displayArrow: true,
  link: "default",
};

export default NavigationHeader;
