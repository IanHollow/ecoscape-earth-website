export default function AboutPage() {
  return (
    <main className="flex flex-col justify-center items-center">
      <div className="container mx-auto text-center">
        <h1 className={`text-5xl font-bold p-5`}>Data Tool</h1>
        <table className="table-auto border-collapse border border-slate-500 border-spacing-2">
          <thead>
            <tr>
              <th>Bird</th>
              <th>Location</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Wood Pecker</td>
              <td>Santa Cruz</td>
              <td>2002</td>
            </tr>
            <tr>
              <td>Eagle</td>
              <td>Seattle</td>
              <td>2007</td>
            </tr>
            <tr>
              <td>Falcon</td>
              <td>San Francisco</td>
              <td>2009</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
