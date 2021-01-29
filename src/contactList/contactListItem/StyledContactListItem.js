import styled from 'styled-components';

const ContactLi = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 15px;
  border: 1px solid navy;
  border-radius: 5px;
  box-shadow: 1px 1px 7px 0px rgba(140, 140, 140, 0.75);
  .contactName {
    font-weight: 700;
    margin-right: 5px;
  }
  .contactNumber {
    margin-right: 5px;
  }
  .contactBtn {
    padding: 5px 15px;
    border: 1px solid navy;
    border-radius: 5px;
    background-color: lightblue;
    box-shadow: 1px 1px 7px 0px rgba(140, 140, 140, 0.75);
  }
  .contactBtn:hover,
  .contactBtn:focus {
    background-color: yellow;
  }
`;

export default ContactLi;
