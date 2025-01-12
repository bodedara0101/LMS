import Header from "../../commonComponents/Header";
import SingleSAdmin from "./SingleSAdmin";
import { useState, useEffect } from "react";
const Superadmins = () => {
  const [userData, suserData] = useState([
    {
      name: "",
      email: "",
    },
  ]);
  useEffect(() => {
    const getusers = async () => {
      try {
        const response = await fetch("http://localhost:5000/getusers", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const data = await response.json();
          suserData(data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getusers();
  }, []);
  return (
    <>
      <div className=" sm:flex bg-slate-300 ">
        <Header />
        <div className=" w-full ">
          <h1 className="text-[2rem] font-semibold text-center mt-20">Users</h1>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-5">
            <table className="w-full text-sm text-left text-gray-700">
              <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    #
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Admin Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Email
                  </th>

                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {userData.map((obj, index) =>
                  obj.isAdmin ? (
                    <SingleSAdmin
                      key={index}
                      index={index}
                      name={obj.name}
                      email={obj.email}
                    />
                  ) : null
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Superadmins;
