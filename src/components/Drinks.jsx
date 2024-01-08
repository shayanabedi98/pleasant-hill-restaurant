export default function Drinks({array}) {
  return (
    <div className="drink-container">
    <div>
      <h2>Drinks</h2>
    </div>
    <div className="card-container">
      {array.map((item) => {
        if (item.type === "Drinks")
          return (
            <div className="card" key={item.id}>
              <img className="menu-imgs" src={item.img} />
              <h3 className="menu-names">{item.name}</h3>
              <p className="menu-desc">{item.description}</p>
            </div>
          );
      })}
    </div>
  </div>
  )
}