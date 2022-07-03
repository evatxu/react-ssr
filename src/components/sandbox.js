import React from 'react';
import styled from 'styled-components';

// import nimiPng from '../logo.svg';

const CardListStyled = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 10px;
  overflow: hidden;
`;

const defaultItemCard = {
  title: '贴片激光钢网',
  src: 'http://www.xjxsmt.com/cut_294_238/Data/xjxsmt/upload/image/20190926/736%C3%97736%E6%BF%80%E5%85%89%E9%92%A2%E7%BD%91.jpg',
};

let list = [];

for (let i = 1; i <= 9; i++) {
  list.push(defaultItemCard);
}

const sandBox = () => {
  return (
    <CardListStyled>
      <ul className="overflow-hidden">
        {list.map((item) => (
          <li style={{width: '30%', display: 'block', float: 'left'}}>
            <a
              className="w-full"
              title={item.title}
              href="http://www.xjxsmt.com/tpjg.html"
            >
              <img className="transform transition-transform hover:scale-105" src={item.src} alt={item.title} />
              <br />
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </CardListStyled>
  );
}

export default sandBox;
