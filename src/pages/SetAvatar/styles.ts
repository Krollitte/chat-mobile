import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 48px;
  background-color: #131324;
`;

export const TitleContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
`;

export const Title = styled.Text`
  color: white;
  font-size: 20px;
`;

export const Avatars = styled.View`
  gap: 32px;
`;

export const Avatar = styled.TouchableOpacity`
  border: 6.4px solid blue;
  padding: 6.4px;
  border-radius: 80px;
  justify-content: center;
  align-items: center;
  transition: 0.5s ease-in-out;
  margin-bottom: 8px;
`;

export const ButtonFromImages = styled.TouchableOpacity`
  background-color: #4e0eff;
  color: white;
  padding: 16px 32px;
  border: none;
  font-weight: bold;
  border-radius: 6.4px;
  font-size: 16px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;
