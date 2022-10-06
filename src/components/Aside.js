const x = 3 > 5 ? false : true;
console.log(x);

function Aside({ dogs }) {
  return (
    <aside>
      <h3>Roster:</h3>
      <ol>
        {dogs.map((dog) => {
          return dog.present ? <li key={dog.id}>{dog.name}</li> : null;
        })}
      </ol>
    </aside>
  );
}

export default Aside;
