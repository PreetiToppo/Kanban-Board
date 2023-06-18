import React from "react";

import { Draggable } from "react-beautiful-dnd";
import { BsThreeDots } from "react-icons/bs";
import Message from "../svg/message.svg";
import Files from "../svg/files.svg";

function CardItem({ data, index }) {
  return (
    <Draggable index={index} draggableId={data.id.toString()}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="bg-white rounded-md p-3  m-3 mt-0 last:mb-0"
        >
          <div className="flex justify-between items-center">
            <label
              className={`px-2 py-1 rounded-[4px] text-[12px] font-medium	 bg-opacity-20		
              ${
                data.priority === 0
                  ? "bg-[#DFA874] text-[#D58D49]"
                  : data.priority === 1
                  ? "bg-[#D8727D] text-[#D8727D]"
                  : "bg-[#83C29D] text-[#68B266]"
              }
              `}
            >
              {data.priority === 0
                ? "Low"
                : data.priority === 1
                ? "High"
                : "Completed"}
            </label>
            <BsThreeDots />
          </div>
          <h5 className="font-semibold	text-[18px] leading-6 text-[#0D062D] my-3">
            {data?.title}
          </h5>
          <p className="text-[#787486] font-normal	text-[12px] mb-5">
            {data?.desc}
          </p>
          {data?.img && (
            <img
              src={data?.img}
              alt={data?.img}
              className="my-3 h-full w-full"
            />
          )}
          <div>
            <ul className="flex space-x-3 justify-between">
              <li>
                <div className="-space-x-2">
                  {data?.assignees.map((el, index) => {
                    return (
                      <img
                        key={index}
                        className="relative z-30 inline object-cover w-[24px] h-[24px] border-2 border-white rounded-full"
                        src={el}
                        alt="Profileimage"
                      />
                    );
                  })}
                </div>
              </li>
              <li className="flex items-center gap-1 font-medium text-[#787486]	text-[12px]">
                <img src={Message} w="13px" h="13px" alt="home" />
                <span>{data.comments}</span>
                comments
              </li>
              <li className="flex items-center gap-1 font-medium text-[#787486]	text-[12px]">
                <img src={Files} w="13px" h="13px" alt="home" />
                <span>{data.files}</span>
                files
              </li>
            </ul>
          </div>
        </div>
      )}
    </Draggable>
  );
}

export default CardItem;
