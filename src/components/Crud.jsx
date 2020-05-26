import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Input, Button, ListItem } from "react-native-elements";
import { firebaseApp } from "../utils/firebase";
import "firebase/firestore";
import * as firebase from "firebase/app";
import "moment/locale/es";
import Moment from "moment";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Crud() {
  const [tareas, setTareas] = useState([]);
  const [tarea, setTarea] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const db = firebase.firestore();
        const data = await db.collection("tareas").get();

        const arrayData = data.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setTareas(arrayData);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerDatos();
  }, []);

  const agregar = async () => {
    if (!tarea.trim()) {
      setError("Ingresar tarea, campo vacío");
      return;
    }
    try {
      const db = firebase.firestore();
      const nuevaTarea = {
        name: tarea,
        fecha: Date.now(),
      };
      const data = await db.collection("tareas").add(nuevaTarea);
      setTareas([...tareas, { ...nuevaTarea, id: data.id }]);
      setTarea("");
    } catch (error) {
      console.log(error);
    }
    setError(null);
  };

  const eliminar = async (id) => {
    try {
      const db = firebase.firestore();
      await db.collection("tareas").doc(id).delete();

      const arrayFiltrado = tareas.filter((item) => item.id !== id);
      setTareas(arrayFiltrado);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <Text style={{ textAlign: "center", backgroundColor: "#e0ff00" }}>
        Firebase
      </Text>
      {tareas.map((item, index) => {
        return (
          <ListItem
            key={index}
            title={item.name + "   " + Moment(item.fecha).format("DD MMMM YY")}
            rightIcon={
              <Icon
                type="font-awesome"
                name="trash"
                size={25}
                color="#ff0042"
                onPress={() => eliminar(item.id)}
              />
            }
          />
          // <Text key={index} style={{ padding: 10 }}>
          //   {item.name},{"   "}, {Moment(item.fecha).format("DD MMMM YY")}
          // </Text>
        );
      })}

      <View>
        <Text style={{ textAlign: "center", fontSize: 20, marginTop: 30 }}>
          Formulario
        </Text>
        <Input
          placeholder="Ingresar tarea"
          leftIcon={{
            type: "font-awesome",
            name: "minus",
            color: "grey",
            size: 12,
          }}
          onChange={(e) => setTarea(e.nativeEvent.text)}
          value={tarea}
        />
        <Button
          title="Agregar"
          buttonStyle={{
            margin: 50,
            backgroundColor: "#009387",
            borderRadius: 30,
          }}
          onPress={agregar}
        />
      </View>
      {error && (
        <View
          style={{ justifyContent: "center", flex: 1, alignItems: "center" }}
        >
          <Text
            style={{
              backgroundColor: "#ff7675",
              width: 250,
              height: 30,
              color: "#fff",
              textAlign: "center",
              padding: 5,
            }}
          >
            {error}
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    marginBottom: 10,
  },
});
