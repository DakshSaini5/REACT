import { useState } from 'react';

function Panel({ title, children }) {
  const [isActive, setIsActive] = useState(false);

  let content;
  if (isActive) {
    content = <p>{children}</p>;
  } else {
    content = (
      <button onClick={() => setIsActive(true)}>
        Show
      </button>
    );
  }

  return (
    <section className="panel">
      <h3>{title}</h3>
      {content}
    </section>
  );
}

export default function Accordion() {
  return (
    <>
      <h2>Almaty, Kazakhstan</h2>
      <Panel title="About">
        With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.
      </Panel>
      <Panel title="Etymology">
        The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild <i lang="la">Malus sieversii</i> is considered a likely candidate for the ancestor of the modern domestic apple.
      </Panel>
    </>
  );
}
