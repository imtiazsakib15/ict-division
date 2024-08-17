const VisitorCounter = () => {
  return (
    <table className="border border-collapse text-sm">
      <thead>
        <p className="p-2 text-center font-bold">Visitor Counter</p>
      </thead>
      <tbody className="text-start">
        <tr className="border">
          <th className="text-start font-medium p-1">Today</th>
          <td>11</td>
        </tr>
        <tr className="border">
          <th className="text-start font-medium p-1">Yesterday</th>
          <td>95</td>
        </tr>
        <tr className="border">
          <th className="text-start font-medium p-1">All</th>
          <td>245</td>
        </tr>
        <tr className="border">
          <th className="text-start font-medium p-1">Online</th>
          <td>2</td>
        </tr>
      </tbody>
    </table>
  );
};

export default VisitorCounter;
