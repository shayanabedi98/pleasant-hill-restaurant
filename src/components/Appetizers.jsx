export default function Appetizers({array}) {
  return (
    <div className="appetizer-container">
    <div>
    <hr></hr>
      <h2 >Appetizers</h2>
    </div>
    <div className="card-container">
      {array.map((item) => {
        if (item.type === "Appetizer")
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