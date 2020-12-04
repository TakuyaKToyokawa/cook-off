  
import React from "react";
import styled, { css } from "styled-components";
import Link from "next/link";

const Maindiv = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
`;

const Textdiv = styled.h1`
  display: flex;
  color: #f04b4a;
  flex-direction: column;
  margin: 0px;
`;

const Arrow = styled.img`
  width: 30px;
  height: 50px;
  cursor: pointer;
  margin-right: 25px;
`;

const NavigationHeader = ({ text, displayArrow, link }) => {
  return (
    <div>
      <Maindiv>
        {displayArrow == true ? (
          <Link href={link}>
            <Arrow src="/img/general/redarrow.png" />
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