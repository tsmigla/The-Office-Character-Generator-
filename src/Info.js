export default function Info({ data }) {
  return data.name && data.actor && data.gender ? (
    <section>
      <h2>Meet {data.name}! </h2>
      {/* <figure>
        <img src={data.image.front_shiny} alt={data.image} />
      </figure> */}
      <p>Actor: {data.actor} </p>
      <p>First Appearance: {data.firstAppearance} </p>
      <p>Last Appearance: {data.lastAppearance} </p>
    </section>
  ) : (
    <p> No data yet </p>
  );
}
