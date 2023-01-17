import React, { useEffect, useState } from "react";
import axios from "axios";
import { Image, Text } from "react-native";
import loader from "../../assets/loader.gif";
import { useNavigation } from "@react-navigation/native";

import {
  Container,
  TitleContainer,
  Title,
  Avatars,
  Avatar,
  ButtonFromImages,
} from "./styles";

export function SetAvatar() {
  // const navigate = useNavigation();
  const apiAvatars = "https://avatars.dicebear.com/api/adventurer";
  const [avatars, setAvatars] = useState([]);
  const [selectedAvatar, setSelectedAvatar] = useState(undefined);
  const [loading, setLoading] = useState(true);

  async function loadAvatarPictures() {
    const data = [];
    for (let i = 0; i < 4; i++) {
      const image = await axios.get(
        `${apiAvatars}/${Math.round(Math.random() * 1000)}.png`
      );
      console.log("image", image.config.url);
      data.push(image.config.url);
    }

    if (data.length > 0) {
      setAvatars(data);
      setLoading(false);
    }
  }

  useEffect(() => {
    loadAvatarPictures();
  }, []);

  return (
    <>
      {loading ? (
        <Container>
          <Image source={loader} />
        </Container>
      ) : (
        <Container>
          <TitleContainer>
            <Title>Pick an Avatar as your profile picture</Title>
          </TitleContainer>
          <Avatars>
            {avatars.map((avatar, index) => {
              return (
                <Avatar key={index} onPress={() => setSelectedAvatar(index)}>
                  <Image
                    style={{ height: 100, width: 100 }}
                    source={{ uri: avatar }}
                    key={avatar}
                  />
                </Avatar>
              );
            })}
          </Avatars>
          <ButtonFromImages onPress={() => {}}>
            <Text>Set as Profile Picture</Text>
          </ButtonFromImages>
          <ButtonFromImages onPress={loadAvatarPictures}>
            <Text> Load new pictures</Text>
          </ButtonFromImages>
        </Container>
      )}
    </>
  );
}
