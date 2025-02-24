import Header from "../../commonComponents/Header";
import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../../store/contexStore/store";
const AddSAdmin = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    conPassword: "",
    isAdmin: true,
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your form validation or submission logic here
    try {
      if (formData.password == formData.conPassword) {
        const response = await fetch("http://localhost:5000/registration", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        console.log(response);

        if (response.ok) {
          setFormData({
            name: "",
            email: "",
            password: "",
            conPassword: "",
          });
        }
      } else {
        console.log("password not matched");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className=" sm:flex bg-slate-300 ">
        <Header />
        <section className="mx-auto w-full lg:w-[50%] lg:mt-10">
          <div className="w-full bg-white rounded-md shadow border p-3 xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Create a New Admin
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Name
                  </label>
                  <input
                    value={formData.name}
                    onChange={handleInput}
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Adam james"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Email
                  </label>
                  <input
                    value={formData.email}
                    onChange={handleInput}
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Password
                  </label>
                  <input
                    value={formData.password}
                    onChange={handleInput}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="conPassword"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Confirm Password
                  </label>
                  <input
                    value={formData.conPassword}
                    onChange={handleInput}
                    type="password"
                    name="conPassword"
                    id="conPassword"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Add
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AddSAdmin;
