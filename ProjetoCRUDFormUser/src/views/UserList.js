import React from "react";
import { Text, SafeAreaView, FlatList, Alert } from "react-native";
import users from "./data/users";
import { Avatar, Button, Icon, ListItem } from "@rneui/themed";
import { LinearGradient } from "expo-linear-gradient";

const UserList = (props) => {
  function confirmUserDeletion(user) {
    Alert.alert("Excluir Usuário", "Deseja excluir o usuário?", [
      {
        text: "Sim",
        onPress() {
          console.warn("deletei mesmo" + user.id);
        },
      },
      {
        text: "Não",
      },
    ]);
  }

  function getUserItem({ item: user }) {
    return (
      <ListItem
        ViewComponent={LinearGradient}
        linearGradientProps={{
          colors: ["#020617", "#0f172a"],
          start: { x: 1, y: 0 },
          end: { x: 0.2, y: 0 },
        }}
        bottomDivider
        onPress={() => props.navigation.navigate("UserForm")}
      >
        <Avatar rounded source={{ uri: user.avatarUrl }} />
        <ListItem.Content>
          <ListItem.Title style={{ color: "white" }}>
            {user.name}
          </ListItem.Title>
          <ListItem.Subtitle style={{ color: "white" }}>
            {user.email}
          </ListItem.Subtitle>
        </ListItem.Content>
        <Button
          onPress={() => props.navigation.navigate("UserForm", user)}
          type="clear"
          icon={<Icon name="edit" size={20} color="white" />}
        />
        <Button
          onPress={() => confirmUserDeletion(user)}
          type="clear"
          icon={<Icon name="delete" size={20} color="red" />}
        />
      </ListItem>
    );
  }

  return (
    <SafeAreaView>
      <FlatList
        key={(user) => user.id.toString()}
        data={users}
        renderItem={getUserItem}
      />
    </SafeAreaView>
  );
};

export default UserList;
