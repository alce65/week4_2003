import { useEffect, useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const handlerClick = (incremento: number) => {
    setCount(count + incremento);
  };

  const handlerClick2 = (incremento: number) => {
    setCount2(count2 + incremento);
  };

  useEffect(() => {
    console.log("Iniciando la aplicación");
  }, []);

  console.log("Renderizando");

  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => handlerClick(-1)}>➖</button>
      <button onClick={() => handlerClick(+1)}>➕</button>

      <p>{count2}</p>
      <button onClick={() => handlerClick2(-1)}>➖</button>
      <button onClick={() => handlerClick2(+1)}>➕</button>
    </div>
  );
}
