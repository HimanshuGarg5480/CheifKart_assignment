import React, { useEffect, useState } from "react";
import Select_date from "../assets/Select_date-01.svg";
import { Link } from "react-router-dom";

function Page1() {
  const [dishes, setDishes] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/"
      ); // Replace with your API endpoint
      const jsonData = await response.json();
      setDishes(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const renderButtons = () => {
    const buttons = [];
    for (let i = 0; i < 4; i++) {
      buttons.push(
        <button
          key={i}
          className="h-[24px] w-[76px] rounded-xl border-solid border-[#BDBDBD] focus:border-[#FF941A] focus:bg-[#FFF9F2] border-[0.5px] ml-1 text-[#8A8A8A] focus:text-[#FF941A] font-sans text-sm"
        >
          Indian
        </button>
      );
    }
    return buttons;
  };
  return (
    <>
      <div className=" h-[57px] bg-[#FFFFFF] p-3">
        <div className="  text-[#1C1C1C] font-semibold font-sans text-lg justify-center">
          {"< "} Select Dishes
        </div>
      </div>
      <div>
        <div className="h-[42px] bg-[#1C1C1C]"></div>
        <div className="h-[63px] w-[95%] bg-[#FFFFFF] rounded-[9px] absolute top-[13%] left-2 p-5 flex space-x-[2%] justify-center drop-shadow-[0_1px_4px_rgba(0,0,0,0.25)]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16.231"
            height="16.231"
            viewBox="0 0 16.231 16.231"
          >
            <g id="Select_date-01" transform="translate(-5.7 -5.7)">
              <g
                id="Group_1540"
                data-name="Group 1540"
                transform="translate(5.7 5.7)"
              >
                <g
                  id="Group_1539"
                  data-name="Group 1539"
                  transform="translate(0 0)"
                >
                  <path
                    id="Path_3460"
                    data-name="Path 3460"
                    d="M278.5,279.259a1.268,1.268,0,0,0,1.268,1.268h1.491a1.268,1.268,0,0,0,1.268-1.268v-1.492a1.268,1.268,0,0,0-1.268-1.268h-1.491a1.267,1.267,0,0,0-1.268,1.268Zm1.268-1.492h1.491v1.492h-1.491Z"
                    transform="translate(-269.655 -267.72)"
                    fill="#ff941a"
                  />
                  <circle
                    id="Ellipse_132"
                    data-name="Ellipse 132"
                    cx="0.635"
                    cy="0.635"
                    r="0.635"
                    transform="translate(11.601 6.021)"
                  />
                  <circle
                    id="Ellipse_133"
                    data-name="Ellipse 133"
                    cx="0.635"
                    cy="0.635"
                    r="0.635"
                    transform="translate(8.842 6.021)"
                  />
                  <path
                    id="Path_3461"
                    data-name="Path 3461"
                    d="M21.3,16.86a.637.637,0,0,0,.635-.635V9.5A2.539,2.539,0,0,0,19.4,6.968h-.824V6.335a.635.635,0,1,0-1.271,0v.635H14.415V6.335a.635.635,0,0,0-1.271,0v.635H10.291V6.335a.635.635,0,1,0-1.271,0v.635H8.235A2.534,2.534,0,0,0,5.7,9.5V19.4a2.539,2.539,0,0,0,2.535,2.535H19.4A2.539,2.539,0,0,0,21.931,19.4a.635.635,0,1,0-1.271,0,1.268,1.268,0,0,1-1.268,1.268H8.235A1.268,1.268,0,0,1,6.968,19.4V9.5A1.268,1.268,0,0,1,8.235,8.235h.791v.635a.635.635,0,1,0,1.271,0V8.235h2.853v.635a.635.635,0,0,0,1.271,0V8.235h2.886v.635a.635.635,0,1,0,1.271,0V8.235H19.4A1.268,1.268,0,0,1,20.67,9.5v6.721A.624.624,0,0,0,21.3,16.86Z"
                    transform="translate(-5.7 -5.7)"
                  />
                  <circle
                    id="Ellipse_134"
                    data-name="Ellipse 134"
                    cx="0.635"
                    cy="0.635"
                    r="0.635"
                    transform="translate(3.327 11.536)"
                  />
                  <circle
                    id="Ellipse_135"
                    data-name="Ellipse 135"
                    cx="0.635"
                    cy="0.635"
                    r="0.635"
                    transform="translate(3.327 6.021)"
                  />
                  <circle
                    id="Ellipse_136"
                    data-name="Ellipse 136"
                    cx="0.635"
                    cy="0.635"
                    r="0.635"
                    transform="translate(3.327 8.78)"
                  />
                  <circle
                    id="Ellipse_137"
                    data-name="Ellipse 137"
                    cx="0.635"
                    cy="0.635"
                    r="0.635"
                    transform="translate(6.086 8.78)"
                  />
                  <circle
                    id="Ellipse_138"
                    data-name="Ellipse 138"
                    cx="0.635"
                    cy="0.635"
                    r="0.635"
                    transform="translate(6.086 6.021)"
                  />
                  <circle
                    id="Ellipse_139"
                    data-name="Ellipse 139"
                    cx="0.635"
                    cy="0.635"
                    r="0.635"
                    transform="translate(6.086 11.536)"
                  />
                </g>
              </g>
            </g>
          </svg>
          <div className="font-sans font-bold text-sm"> 21 May 2021</div>
          <div className="w-0 h-[26px] border-solid border-[0.5px] border-[#130404ce]"></div>
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

          <div className="font-sans font-bold text-sm"> 10:30 Pm- 12:30 Pm</div>
        </div>
      </div>
      <div className="flex justify-start max-[600px]:mt-[20%] mt-[10%] w-[100%] p-3">
        <button className="h-[24px] w-[76px] rounded-xl border-solid border-[#BDBDBD] focus:border-[#FF941A] focus:bg-[#FFF9F2] border-[0.5px]  text-[#8A8A8A] focus:text-[#FF941A] font-sans text-sm">
          Italian
        </button>
        {renderButtons()}
      </div>
      <div className="ml-1.5 p-3">
        <div className="font-sans text-#1C1C1C font-bold text-lg mb-2">
          Popular Dishes
        </div>
        <div className="overflow-x-auto">
          <div className="flex space-x-4 scrollbar-hide">
            {dishes.popularDishes?.map((dish) => {
              return (
                <>
                  <div className="border-solid border-[#FF941A] border-2 rounded-[50%] p-0.5 relative">
                    <div className="h-[75px] w-[80px] rounded-[50%] bg-slate-400 grid place-content-center bg-cover bg-center overflow-hidden">
                      <img
                        className="h-[100%] w-[100%] rounded-full"
                        src={`${dish.image}`}
                        alt=""
                      />
                    </div>
                    <div className="font-sans text-sm text-[#FFFFFF] absolute top-6 left-3">
                      {dish.name}
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
      <hr />
      <div className="overflow-hidden p-1">
        <div className="flex justify-between ">
          <h1 className="text-[16px] font-bold text-[#1C1C1C] mx-4 my-9">
            Recommended <span className="text-[11px]">▼</span>
          </h1>
          <button className="bg-[#1C1C1C] text-[#FFFFFF] rounded-md px-4 py-1 mt-7 mr-[9%] h-[50%]">
            Menu
          </button>
        </div>

        {dishes.dishes?.map((dish) => {
          return (
            <div className="mb-9">
              <div className="flex justify-between px-4">
                <div className="">
                  <div className="flex my-2">
                    <h1 className="font-semibold font-sans text-md text-[#1C1C1C]">
                      {dish.name}
                    </h1>
                    <div className="h-4 w-4 p-0.5 ml-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="17"
                        viewBox="0 0 8 8"
                      >
                        <g
                          id="Group_359"
                          data-name="Group 359"
                          transform="translate(-212 -266)"
                        >
                          <circle
                            id="Ellipse_48"
                            data-name="Ellipse 48"
                            cx="1"
                            cy="1"
                            r="2"
                            transform="translate(215 269)"
                            fill="#51c452"
                          />
                          <g
                            id="Path_788"
                            data-name="Path 788"
                            transform="translate(212 266)"
                            fill="none"
                          >
                            <path
                              d="M1,0H7A1,1,0,0,1,8,1V7A1,1,0,0,1,7,8H1A1,1,0,0,1,0,7V1A1,1,0,0,1,1,0Z"
                              stroke="none"
                            />
                            <path
                              d="M 1 1 L 1 7 L 7 7 L 7 1 L 1 1 M 1 0 L 7 0 C 7.552279949188232 0 8 0.4477200508117676 8 1 L 8 7 C 8 7.552279949188232 7.552279949188232 8 7 8 L 1 8 C 0.4477200508117676 8 0 7.552279949188232 0 7 L 0 1 C 0 0.4477200508117676 0.4477200508117676 0 1 0 Z"
                              stroke="none"
                              fill="#51c452"
                            />
                          </g>
                        </g>
                      </svg>
                    </div>
                    <div className="flex">
                      <div className="ml-2 h-[100%] w-10 bg-[#51C452] rounded-md text-[#FFFFFF] text-sm text-center">
                        {dish.rating}★
                      </div>
                    </div>
                  </div>
                  <div className="flex ">
                    <div className="max-sm:text-[10px] text-sm mr-2">
                      {dish.equipments[0]},{dish.equipments[1]}
                    </div>
                    <div className="w-0 h-[35px] border-solid border-[0.5px] border-[#707070] mr-1"></div>
                    <div>
                      <div className="max-sm:text-[10px] text-sm text-[#1C1C1C]">
                        Ingredients
                      </div>
                      <Link to="/detail">
                      <div className="max-sm:text-[10px] text-sm text-[#FF8800]">
                        view list {">"}
                      </div>
                      </Link>
                    </div>
                  </div>
                  <div className="text-[#707070] font-normal max-sm:text-[9px] mb-4">
                    {dish.description}
                  </div>
                </div>
                <div className="w-2"></div>
                <div className="h-[100px] w-[90px] max-sm:mr-[1%] mr-[7%] rounded-md overflow-hidden relative">
                  <img
                    className="h-[90%] w-[100%]"
                    src={`${dish.image}`}
                    alt=""
                  />
                  <button className="add flex items-center justify-center absolute bottom-[1%] border-solid border-[#FF9A26] border-2 text-[#FF9A26] bg-[#FFFFFF] px-4 py-0.5 left-3 font-sans font-semibold rounded-lg drop-shadow-[0_1px_4px_rgba(0,0,0,0.0)]" >
                    Add
                    <div className="absolute right-1 top-0 plus text-[10px]">
                      +
                    </div>
                  </button>{" "}
                </div>
              </div>
              <hr />
            </div>
          );
        })}
      </div>
      <div className="bg-[#1C1C1C] rounded-md font-bold text-[#FFFFFF] w-[85%] py-4 px-7 fixed top-[90%] left-[8%] text-center opacity-90">3 food items selected</div>
    </>
  );
}

export default Page1;
