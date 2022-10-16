/* eslint-disable no-undef */
import styled, { css } from 'styled-components';
// import Button from './Button'

export const ButtonEl = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;

  color: black;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 1;
  }

  ${props =>
    props.loadMore &&
    css`
      padding: 8px 16px;
      border-radius: 2px;
      background-color: #3f51b5;
      transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
      text-align: center;

      color: #fff;

      font-family: inherit;
      font-size: 18px;
      line-height: 24px;
      font-style: normal;
      font-weight: 500;
      min-width: 180px;
      opacity: 1;
      box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
        0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
      &:hover,
      &:focus {
        background-color: #303f9f;
      }
    `};
`;
