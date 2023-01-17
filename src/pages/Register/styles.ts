import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  align-items: center;
  background-color: #131324;
`;

export const Brand = styled.View`
  gap: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
`;

export const Title = styled.Text`
  color: white;
  font-size: 32px;
  text-transform: uppercase;
`;

export const Form = styled.View`
  flex-direction: column;
  width: 80%;
  gap: 32px;
  align-items: center;
  background-color: #00000076;
  border-radius: 32px;
  padding: 48px 40px;
`;

export const Input = styled.TextInput`
  background-color: transparent;
  padding: 16px;
  border: 1.6px solid #4e0eff;
  border-radius: 6.4px;
  color: white;
  width: 100%;
  font-size: 16px;
  margin-bottom: 16px;
  &:focus {
    border: 1.6px solid #997af0;
    outline: none;
  }
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  background-color: #4e0eff;
  color: white;
  padding: 16px 32px;
  border: none;
  font-weight: bold;
  border-radius: 6.4px;
  align-items: center;
  font-size: 16px;
  margin-bottom: 8px;
  text-transform: uppercase;
`;

export const ButtonText = styled.Text`
  color: white;
  font-weight: bold;
  text-transform: uppercase;
`;

export const LoginText = styled.Text`
  color: white;
  text-transform: uppercase;
`;
export const LoginNavigation = styled.Text`
  color: #4e0eff;
  text-decoration: none;
  font-weight: bold;
`;
