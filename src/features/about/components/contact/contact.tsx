import { SyntheticEvent, useRef } from "react";
import { ContactStructure } from "../../models/contact";

export function Contact() {
  const userData: ContactStructure = {} as ContactStructure;
  const formContactRef = useRef<HTMLFormElement>(null);
  const handleSubmit = (ev: SyntheticEvent) => {
    ev.preventDefault();
    const formContact = formContactRef.current as HTMLFormElement;
    userData.username = (formContact[0] as HTMLInputElement).value;
    userData.email = (formContact[1] as HTMLInputElement).value;
    console.log("Enviando", userData);
  };

  return (
    <>
      <h2>Formulario no controlado</h2>
      <form action="" onSubmit={handleSubmit} ref={formContactRef}>
        <div className="formControl">
          <label htmlFor="username">User name</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div className="formControl">
          <label htmlFor="email">User email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </>
  );
}
