function Alert({ message }) {
  return (
    <div className="bg-red-200 p-4 rounded-md shadow-md border-l-8 border-red-900">
      <p>{message}</p>
    </div>
  );
}

export default Alert;

// const App = () => {
// 	return (
// <div className="wrapper">
//     <Alert
//         type="success"
//         title="Thank you!"
//         id="001">
//         We have received your application. Check your email in a few weeks to find out if you’ve been admitted.
//     </Alert>
// </div>
//     );
// }
