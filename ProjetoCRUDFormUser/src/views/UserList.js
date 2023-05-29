import React from "react";
import { Text, SafeAreaView, FlatList, Alert } from "react-native";
import { Avatar, Button, Icon, ListItem } from "@rneui/themed";
import { LinearGradient } from "expo-linear-gradient";
import { useContext } from "react";
import UsersContext from "../context/UsersContext";
import { StatusBar } from "expo-status-bar";

const UserList = (props) => {
  const { state, dispatch } = useContext(UsersContext);

  function confirmUserDeletion(user) {
    Alert.alert("Excluir Usuário", "Deseja excluir o usuário?", [
      {
        text: "Sim",
        onPress() {
          dispatch({
            type: "deleteUser",
            payload: user,
          });
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
        bottomDivider
        onPress={() => props.navigation.navigate("UserForm")}
      >
        <Avatar rounded source={{ uri: user.avatarUrl }} />
        <ListItem.Content>
          <ListItem.Title style={{ color: "black" }}>
            {user.name}
          </ListItem.Title>
          <ListItem.Subtitle style={{ color: "black" }}>
            {user.email}
          </ListItem.Subtitle>
        </ListItem.Content>
        <Button
          onPress={() => props.navigation.navigate("UserForm", user)}
          type="clear"
          icon={<Icon name="edit" size={20} color="black" />}
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
        data={state.users}
        renderItem={getUserItem}
      />
      <StatusBar style="light" />
    </SafeAreaView>
  );
};

export default UserList;
