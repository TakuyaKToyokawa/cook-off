import React from "react";
import styled from "styled-components";
import Link from "next/link";

const Maindiv = styled.div`
  width: 100%;
  padding: 15px;
  background-color: #f04b4a;
`;

const Flexeddiv = styled.div`
  display: flex;
  flex-direction: row;
  color: white;
  justify-content: space-between;
  align-items: center;
`;

const Textdiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 10;
  margin-right: 20px;
`;

const Title = styled.h2`
  margin-bottom: 5px;
`;

const Borderbox = styled.div`
  border: 1px solid #ffffff;
  box-sizing: border-box;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  margin-right: 25px;
`;

const ArrowandTitle = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  margin: 20px;
  align-items: center;
  justify-content: space-between;
`;

const Arrow = styled.img`
  width: 40px;
  height: 50px;
  cursor: pointer;
  transform: rotate(180deg);
`;

const Textmini = styled.p``;

const StreamHeader = ({ name, title, viewers, link }) => {
  return (
    <div>
      <Maindiv>
        <Flexeddiv>
          <ArrowandTitle>
            <Link href={link}>
              <Arrow src="/icons/general/arrow-white.svg" />
            </Link>
          </ArrowandTitle>
          <Textdiv>
            <Title>{name}</Title>
            <Textmini>{title}</Textmini>
          </Textdiv>
          <Borderbox>{viewers} viewers</Borderbox>
        </Flexeddiv>
      </Maindiv>
    </div>
  );
};

StreamHeader.defaultProps = {
  viewers: "999",
  name: "Lily Lee",
  title: "Chef Lily",
  link: "default"
};

export default StreamHeader;
