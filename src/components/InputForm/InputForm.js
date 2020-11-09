import React, { useState } from "react";
import { addImageComment } from "../../fetchRequest";
const InputForm = ({ imgId }) => {
  const [response, setResponse] = useState({ image_id: imgId });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setResponse({ ...response, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(response);
    addImageComment(response);
    e.target.reset();
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Ваше имя"
        name="name"
        onChange={changeHandler}
      />
      <input
        type="text"
        name="description"
        onChange={changeHandler}
        placeholder="Ваш комментарий"
      />
      <button>Оставить комментарий</button>
    </form>
  );
};

export default InputForm;
