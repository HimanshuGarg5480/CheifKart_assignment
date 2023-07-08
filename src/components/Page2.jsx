import React, { useEffect, useState } from "react";
import veg1 from "../assets/veg1.png";
import veg2 from "../assets/veg2.png";
import { Link } from "react-router-dom";

function Page2() {
  const [dishes, setDishes] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/1"
      ); // Replace with your API endpoint
      const jsonData = await response.json();
      setDishes(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <div className="max-w-screen min-h-screen px-6 lg:pr-44">
      <Link to="/">
      <div className="font-sans font-normal text-[#1C1C1C] text-3xl my-4">
        {"<"}
      </div>
      </Link>

      <div className="text-[32px] text-[#242424] font-bold mb-2">
        {dishes.name}
      </div>
      <div className="w-[70%] text-[#A3A3A3] mb-3 text-[12px]">
        Mughlai Masala is a style of cookery developed in the Indian
        Subcontinent by the imperial kitchens of the Mughal Empire.
      </div>
      <div className="flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="16.272"
          viewBox="0 0 15 16.272"
        >
          <g id="Set_time-01" transform="translate(-23.8 -4.1)">
            <g
              id="Group_1538"
              data-name="Group 1538"
              transform="translate(23.8 4.1)"
            >
              <g
                id="Group_1537"
                data-name="Group 1537"
                transform="translate(0 0)"
              >
                <path
                  id="Path_3456"
                  data-name="Path 3456"
                  d="M37.264,20.04a.633.633,0,0,0,.407-.149l1.724-1.44a.635.635,0,0,0-.814-.975l-1.724,1.44a.636.636,0,0,0,.407,1.124Z"
                  transform="translate(-36.215 -16.902)"
                />
                <path
                  id="Path_3457"
                  data-name="Path 3457"
                  d="M382.826,18.552l1.724,1.44a.632.632,0,0,0,.895-.081.635.635,0,0,0-.081-.894l-1.724-1.44a.635.635,0,0,0-.814.975Z"
                  transform="translate(-371.01 -16.998)"
                />
                <path
                  id="Path_3458"
                  data-name="Path 3458"
                  d="M36.6,7.568a7.435,7.435,0,0,0-4.7-2.173V4.736a.636.636,0,1,0-1.272,0V5.4A7.5,7.5,0,0,0,26,18.173q.2.2.407.378l-.51.859a.636.636,0,0,0,.22.872.631.631,0,0,0,.869-.22l.452-.759a7.518,7.518,0,0,0,7.728,0l.452.759a.633.633,0,0,0,.546.31.619.619,0,0,0,.323-.09.636.636,0,0,0,.22-.872l-.794-1.334a.631.631,0,0,0-.42-.3.651.651,0,0,0-.5.11,6.214,6.214,0,1,1,1.776-2.022.635.635,0,0,0,1.114.61A7.488,7.488,0,0,0,36.6,7.568Z"
                  transform="translate(-23.8 -4.1)"
                />
                <path
                  id="Path_3459"
                  data-name="Path 3459"
                  d="M235.936,131a.635.635,0,0,0-.636.636v4.037a.636.636,0,0,0,.187.449l1.8,1.8a.639.639,0,0,0,.449.187.626.626,0,0,0,.449-.187.633.633,0,0,0,0-.9l-1.611-1.611v-3.775A.635.635,0,0,0,235.936,131Z"
                  transform="translate(-228.47 -126.902)"
                  fill="#ff941a"
                />
              </g>
            </g>
          </g>
        </svg>
        <div className="ml-2">{dishes.timeToPrepare}</div>
      </div>
      <div className="h-1 bg-[#F2F2F2] mt-5"></div>
      <div className="py-5">
        <h1 className="font-sans font-bold text-lg text-ellipsis-[#242424]">
          Ingredients
        </h1>
        <p className="text-[#8A8A8A] text-[10px]">For 2 people</p>
      </div>
      <hr />
      <div>
        <h1 className="font-bold text-md text-[#242424] my-3 ">
          Vegetables ({dishes?.ingredients?.vegetables?.length}){" "}
          <span className="text-[10px]">▼</span>
        </h1>
        <div className="w-[100%]">
          {dishes.ingredients?.vegetables?.map((vege) => {
            return (
              <>
                <div className="flex w-[100%] justify-between my-2">
                  <div className="font-sans text-sm">{vege.name} </div>
                  <div className="font-sans text-sm">{vege.quantity} pc</div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <div>
        <h1 className="font-bold text-md text-[#242424] my-3 ">
          Spices ({dishes?.ingredients?.spices?.length}){" "}
          <span className="text-[10px]">▼</span>
        </h1>
        <div className="w-[100%]">
          {dishes.ingredients?.spices?.map((spice) => {
            return (
              <>
                <div className="flex w-[100%] justify-between my-2">
                  <div className="font-sans text-sm">{spice.name} </div>
                  <div className="font-sans text-sm">{spice.quantity} pc</div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <div>
        <h1 className="font-bold text-md text-[#242424] my-3 ">Appliances</h1>
        <div className="overflow-x-auto">
          <div className="flex space-x-4 scrollbar-hide">
            {dishes.ingredients?.appliances?.map((spice) => {
              return (
                <>
                  <div className="my-2 bg-[#F5F5F5] p-5 w-[30%]">
                    <img
                      className="h-[90px] w-[40px] ml-[15%] lg:ml-[40%]"
                      src="https://cdn1.smartprix.com/rx-iXL9pnUw9-w420-h420/lg-gl-s342spzy-340-l.jpg"
                      alt=""
                    />
                    <div className="font-sans text-sm mt-1 text-center text-[#242424]">
                      {spice.name}{" "}
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page2;
