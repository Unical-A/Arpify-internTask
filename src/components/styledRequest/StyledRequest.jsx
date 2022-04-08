import styled from "styled-components";

const Root = styled.div`
  display: flex;
  margin-top: 40px;
  margin-left: 40px;
`
const Button = styled.div`
  width: 80px;
  margin-left: 20px;
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
  background-color: gray;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: red;
    border: 1px solid red;
  }
`
const Td = styled.td`
  color: #fff;
  font-size: 18px;
  background-color: #808080;
`
const Form = styled.div`
  background-color: #909090;
  color: #fff;
  padding: 30px;
  border: 3px solid #808080;
  width: 340px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  margin-top: 40px;
  margin-left: 40px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
`
export const Styled = {Root, Button, Td, Form};
