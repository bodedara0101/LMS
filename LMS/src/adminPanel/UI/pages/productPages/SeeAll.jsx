import Header from "../../commonComponents/Header";
import { useContext } from "react";
import { AuthContext } from "../../../../store/contexStore/store";
const SeeAll = () => {
  const { productData, productData2 } = useContext(AuthContext);

  const allProductData = [...productData, ...productData2];

  return (
    <>
      <div className=" sm:flex bg-slate-300 ">
        <Header />
        <div className=" w-full ">
          <h1 className="text-[2rem] font-semibold text-center mt-20">
            All Products
          </h1>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-5">
            <table className="w-full text-sm text-left text-gray-700">
              <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    #
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Orignal Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Sell Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Discount
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Catagory
                  </th>

                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {allProductData.map((obj, index) => (
                  <SingleProduct
                    key={index}
                    index={index}
                    name={obj.name}
                    realPrice={obj.realPrice}
                    discount={obj.discount}
                    sellPrice={obj.sellPrice}
                    catagory={obj.catagory}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default SeeAll;

const SingleProduct = ({
  index,
  name,
  realPrice,
  discount,
  sellPrice,
  catagory,
}) => {
  return (
    <>
      <tr className="odd:bg-white even:bg-gray-50 border-b border-gray-200">
        <td className="px-6 py-4 font-medium text-gray-900 ">{index}</td>
        <td className="px-6 py-4">{name}</td>
        <td className="px-6 py-4">{realPrice}</td>
        <td className="px-6 py-4">{sellPrice}</td>
        <td className="px-6 py-4">{discount}%</td>
        <td className="px-6 py-4">{catagory}</td>

        <td className="px-6 py-4">
          <a href="#" className="font-medium text-red-600 hover:underline">
            Delate
          </a>
        </td>
      </tr>
    </>
  );
};
