import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../components/Main/reducer";
import { Button } from "../components/shared/Button";
import { Details } from "../components/Character/Details";
import styles from "../components/Character/Details.module.scss";

export const CharacterDetails = () => {
  const history = useHistory();
  const { dispatch } = useContext(Context);

  function handleHistoryGoBack() {
    history.push("/characters/");
    dispatch({ type: "handleSelectCharacter", payload: null });
  }

  return (
    <div>
      <div className={styles.wrapper}>
        <Button warning={true} action={handleHistoryGoBack}>
          back
        </Button>
        <Details />
      </div>
    </div>
  );
};
