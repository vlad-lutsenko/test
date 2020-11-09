import React, { useState } from "react";
import { addImageComment } from "../../fetchRequest";
import styles from "./InputForm.module.css";

const InputForm = ({ imgId, imageComments }) => {
  const [response, setResponse] = useState({ image_id: imgId });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setResponse({ ...response, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    addImageComment(response);
    imageComments.push(response);
    e.target.reset();
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <input
        type="text"
        placeholder="Ваше имя"
        name="name"
        onChange={changeHandler}
        required
      />
      <input
        type="text"
        name="description"
        onChange={changeHandler}
        placeholder="Ваш комментарий"
        required
      />
      <button className={styles.submitButton}>Оставить комментарий</button>
    </form>
  );
};

export default InputForm;
