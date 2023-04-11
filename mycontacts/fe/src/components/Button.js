import styled, { css } from "styled-components";

export default styled.button`
  height:50px ;
  border:none ;
  padding:0 16px ;
  background:${({ theme }) => theme.colors.primary.main} ;
  font-size:16px ;
  box-shadow:0px 4px 10px rgba(0, 0,  0, 0.09);
  font-weight:bold ;
  color:#fff ;
  border-radius:4px ;
  transition:background 0.2s ease-in ;


  &:hover {
    background:${({ theme }) => theme.colors.primary.light} ;
  }

  &:active {
    background:${({ theme }) => theme.colors.primary.dark} ;
  }

  &[disabled] {
    background:#ccc ;
    cursor:default ;
  }

  ${({ theme, danger }) => danger && css`
    background: ${theme.colors.danger.main} ;
    &:hover {
    background:${({ theme }) => theme.colors.danger.light} ;
  }

  &:active {
    background:${({ theme }) => theme.colors.danger.dark} ;
  }
  `}
`;
