function App() {
  const data = [
    {
      name: "Bob",
      gender: "male",
      age: "50"
    },
    {
      name: "Alice",
      gender: "male",
      age: "20"
    }
  ];
  return (
    <div class="ml-2">
      <h3 class="title is-3">Person List</h3>

      {/* Please make me a component!!! */}
      <table class="table is-bordered mb-3">
        <tbody>
          <tr>
            <td>Name</td>
            <td>Gender</td>
            <td>Age</td>
          </tr>
          <tr>
            <td>Bob</td>
            <td>male</td>
            <td>50</td>
          </tr>
        </tbody>
      </table>

      {/* Code me please!!! */}
      <h3 class="title is-3">ID Counter</h3>
      <p>YOUR ID HERE</p>
      <button>-</button>
      <button>reset</button>
      <button>+</button>
    </div>
  );
}

export default App;
