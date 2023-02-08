import { SyntheticEvent, useState } from "react";
import { ContactStructure } from "../../models/contact";

export function Contact2() {
  const initialUserData: ContactStructure = {
    username: "",
    email: "",
    category: "",
    hasLetter: false,
    gender: "",
  } as ContactStructure;

  const [userData, setUserData] = useState(initialUserData);

  const handleChange = (ev: SyntheticEvent) => {
    const element = ev.target as HTMLFormElement;
    const type = element.getAttribute("type");
    setUserData({
      ...userData,
      [element.name]: type === "checkbox" ? element.checked : element.value,
    });
  };

  const handleSubmit = (ev: SyntheticEvent) => {
    ev.preventDefault();
    console.log(userData);
  };

  return (
    <>
      <h2>Formulario controlado</h2>
      <form action="" onSubmit={handleSubmit}>
        <div className="formControl">
          <label htmlFor="username">User name</label>
          <input
            type="text"
            id="username"
            name="username"
            value={userData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="formControl">
          <label htmlFor="email">User email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <fieldset onChange={handleChange}>
            <legend>Dinos tu genero (si te parece)</legend>
            <input type="radio" name="gender" id="male" value="male" />
            <label htmlFor="male">Hombre</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label htmlFor="female">Mujer</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label htmlFor="other">Otros</label>
          </fieldset>
        </div>

        <div>
          <input
            type="checkbox"
            name="hasLetter"
            id="hasLetter"
            checked={userData.hasLetter}
            onChange={handleChange}
          />
          <label htmlFor="hasLetter">Quiero la newsletter</label>
        </div>
        <div>
          <select
            name="category"
            id=""
            value={userData.category}
            onChange={handleChange}
            required
          >
            <option></option>
            <option value="01-st">Standart</option>
            <option value="02-gd">Gold</option>
            <option value="03-pm">Premium</option>
          </select>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </>
  );
}
