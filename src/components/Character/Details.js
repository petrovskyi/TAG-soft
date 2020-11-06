import React, { useContext } from "react";
import { Context } from "../../utils/context";
import styles from "./Details.module.scss";

export const Details = () => {
  const { state } = useContext(Context);
  const character = state.selectedCharacter;

  return (
    <div className={styles.container}>
      <img
        className={styles.portrait}
        src={character?.image}
        alt={character?.name}
      />
      <h2>{character?.name}</h2>
      <p>gender : {character?.gender}</p>
      <p>status : {character?.status}</p>
    </div>
  );
};
