import { Counter } from "../components/counter/counter";
import { CounterComplex } from "../components/counter/counter.complex";

export default function HomePage() {
  return (
    <section>
      <h2>Home Page</h2>
      <Counter></Counter>
      <CounterComplex></CounterComplex>;
    </section>
  );
}
