import React, { useState } from "react";
import { useContext } from "react";
import {
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Button,
} from "react-native";
import UsersContext from "../context/UsersContext";

const UserForm = ({ route, navigation }) => {
  const [user, setUser] = useState(route.params ? route.params : {});
  const { dispatch } = useContext(UsersContext);
  return (
    <SafeAreaView style={style.form}>
      <Text>Name</Text>
      <TextInput
        style={style.input}
        onChangeText={(name) => setUser({ ...user, name })}
        placeholder="Informe o Nome"
        value={user.name}
      />
      <Text>Email</Text>
      <TextInput
        style={style.input}
        onChangeText={(email) => setUser({ ...user, email })}
        placeholder="Informe o E-mail"
        value={user.email}
      />
      <Text>URL do Avatar</Text>
      <TextInput
        style={style.input}
        onChangeText={(avatarUrl) => setUser({ ...user, avatarUrl })}
        placeholder="Informe o E-mail"
        value={user.avatarUrl}
      />
      <Button
        title="Salvar"
        onPress={() => {
          dispatch({
            type: user.id ? "updateUser" : "createUser",
            payload: user,
          });
          navigation.goBack();
        }}
      />
    </SafeAreaView>
  );
};

export default UserForm;

const style = StyleSheet.create({
  form: {
    padding: 12,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    marginTop: 5,
    padding: 10,
  },
});
