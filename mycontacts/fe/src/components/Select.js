import styled from 'styled-components';

export default styled.select`
  width:100%;
  border:none ;
  border:  2px solid #fff;
  background-color:#fff ;
  box-shadow:0px 4px 10px rgba(0, 0, 0, 0.09) ;
  height:52px ;
  border-radius:52px ;
  border-radius:4px ;
  outline:none ;
  padding:0 16px ;
  font-size: 16px;
  transition: border-color 0.2s ease-in ;

  &:focus {
    border-color:${({ theme }) => theme.colors.primary.main};
  }
`;
