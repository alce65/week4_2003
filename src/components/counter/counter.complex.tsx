import { useEffect, useState } from "react";

export function CounterComplex() {
  const [counts, setCount] = useState({
    count1: 0,
    count2: 0,
  });

  const handlerClick = (incremento: number) => {
    setCount({ ...counts, count1: counts.count1 + incremento });
  };

  const handlerClick2 = (incremento: number) => {
    setCount({ ...counts, count2: counts.count2 + incremento });
  };

  useEffect(() => {
    console.log("Iniciando la aplicación");
  }, []);

  console.log("Renderizando");

  useEffect(() => {
    console.log(counts);
  }, [counts]);

  return (
    <div>
      <p>{counts.count1}</p>
      <button onClick={() => handlerClick(-1)}>➖</button>
      <button onClick={() => handlerClick(+1)}>➕</button>

      <p>{counts.count2}</p>
      <button onClick={() => handlerClick2(-1)}>➖</button>
      <button onClick={() => handlerClick2(+1)}>➕</button>
    </div>
  );
}
