export default function Entrees({array}) {
  return (
    <div>
    <div>
      <h2>Entrees</h2>
    </div>
    <div>
      {array.map((item) => {
        if (item.type === "Entreé")
          return (
            <div key={item.id}>
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