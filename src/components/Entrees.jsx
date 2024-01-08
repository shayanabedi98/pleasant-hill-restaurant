export default function Entrees({array}) {
  return (
    <div className="entree-container">
    <div>
      <h2>Entrees</h2>
    </div>
    <div className="card-container">
      {array.map((item) => {
        if (item.type === "Entreé")
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