import React from "react";
import styled from "styled-components";
import Button from "../../Components/Button";
import Input from "../../Components/Input";

const Wrapper = styled.div`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Box = styled.div`
  ${(props) => props.theme.whiteBox}
  border-radius : 0px;
  width: 100%;
  max-width: 350px;
`;

const StateChanger = styled(Box)`
  text-align: center;
  padding: 20px 0px;
  border-radius: ${(props) => props.theme.borderRadius};
`;

const Link = styled.span`
  color: ${(props) => props.theme.blueColor};
  cursor: pointer;
`;

const Form = styled(Box)`
  padding: 40px;
  padding-bottom: 30px;
  margin-bottom: 15px;
  border-radius: ${(props) => props.theme.borderRadius};
  form {
    width: 100%;
    input {
      width: 100%;
      &:not(:last-child) {
        margin-bottom: 7px;
      }
    }
    button {
      margin-top: 10px;
    }
  }
`;

export default ({ action, setAction, inputs, onSubmit }) => {
  const { username, firstName, lastName, email, secret } = inputs;
  return (
    <Wrapper>
      <Form>
        {action === "logIn" && (
          <form onSubmit={onSubmit}>
            <Input placeholder={"Email"} {...email} type="email" />
            <Button text={"Log in"} />
          </form>
        )}
        {action === "signUp" && (
          <form onSubmit={onSubmit}>
            <Input placeholder={"First name"} {...firstName} />
            <Input placeholder={"Last name"} {...lastName} />
            <Input placeholder={"Email"} {...email} type="email" />
            <Input placeholder={"Username"} {...username} />
            <Button text={"Sign up"} />
          </form>
        )}
        {action === "confirm" && (
          <form onSubmit={onSubmit}>
            <Input placeholder="비밀키를 입려해주세요" required {...secret} />
            <Button text="Confirm" />
          </form>
        )}
      </Form>
      {action !== "confirm" && (
        <StateChanger>
          {action === "logIn" ? (
            <>
              계정이 없으신가요?{" "}
              <Link onClick={() => setAction("signUp")}>Sign up</Link>
            </>
          ) : (
            <>
              계정이 있으신가요?{" "}
              <Link onClick={() => setAction("logIn")}>Log in</Link>
            </>
          )}
        </StateChanger>
      )}
    </Wrapper>
  );
};
