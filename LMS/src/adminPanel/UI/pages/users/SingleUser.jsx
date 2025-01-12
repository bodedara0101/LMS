import { useNavigate } from "react-router-dom";
const SingleUser = ({ index, name, email, _id }) => {
  const navigate = useNavigate();
  const delateuser = async () => {
    try {
      const response = await fetch("http://localhost:5000/delateuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ _id }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <tr className="odd:bg-white even:bg-gray-50 border-b border-gray-200">
        <td className="px-6 py-4 font-medium text-gray-900 ">{index}</td>
        <td className="px-6 py-4">{name}</td>
        <td className="px-6 py-4">{email}</td>

        <td className="px-6 py-4">
          <button
            onClick={delateuser}
            className="font-medium text-red-600 hover:underline"
          >
            Delate
          </button>
        </td>
      </tr>
    </>
  );
};

export default SingleUser;
