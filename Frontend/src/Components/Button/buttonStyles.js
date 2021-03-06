import { css } from 'styled-components';

const buttonStyles = css`
  display: inline-block;
  box-sizing: border-box;
  margin: 0.5em;
  padding: 0.5em 1.5em;
  text-decoration: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 1em;
  border-radius: 5px;
  background-color: ${props => props.bg ? props.bg : props.theme.accent};
  border: ${props => props.bg ? props.bg : props.theme.accent};
  color: ${props => props.theme.color}; 
`;

export default buttonStyles;