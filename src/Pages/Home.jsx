import React, { useEffect, useState } from "react";

import BoardData from "../data/board.json";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import CardItem from "../Component/CardItem";
import Addsquare1 from "../svg/addsquare1.svg";

const Home = () => {
  const [ready, setReady] = useState(false);
  const [boardData, setBoardData] = useState(BoardData);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setReady(true);
    }
  }, []);

  const onDragEnd = (re) => {
    if (!re.destination) return;
    let newBoardData = boardData;
    var dragItem =
      newBoardData[parseInt(re.source.droppableId)].items[re.source.index];
    newBoardData[parseInt(re.source.droppableId)].items.splice(
      re.source.index,
      1
    );
    newBoardData[parseInt(re.destination.droppableId)].items.splice(
      re.destination.index,
      0,
      dragItem
    );
    setBoardData(newBoardData);
  };

  return (
    <div className="p-5 flex flex-col lg:h-[115vh]  bg-white">
      {ready && (
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  gap-5 my-5 ">
            {boardData.map((board, bIndex) => (
              <div key={board.name}>
                <Droppable droppableId={bIndex.toString()}>
                  {(provided, snapshot) => (
                    <div {...provided.droppableProps} ref={provided.innerRef}>
                      <div
                        className={`bg-[#F5F5F5] rounded-t-lg shadow-md h-[108vh]
                        flex flex-col relative overflow-hidden pb-3 px-2 
                        ${snapshot.isDraggingOver && "bg-green-100"}`}
                      >
                        <div className=" px-3 mt-5 flex gap-2 items-center justify-between">
                          <span className="flex gap-2 items-center">
                            <p
                              className={`${
                                board.name === "To Do"
                                  ? "bg-[#5030E5]"
                                  : board.name === "On Progress"
                                  ? "bg-[#FFA500]"
                                  : "bg-[#76A5EA]"
                              } rounded-full w-[8px] h-[8px]`}
                            ></p>
                            <span className="font-medium text-base leading-5 text-indigo-900">
                              {board.name}
                            </span>
                            <span className="bg-[#E0E0E0] text-center text-[#625F6D] rounded-full h-[20px] w-[20px] font-medium	text-[12px]">
                              {board.items.length}
                            </span>
                          </span>
                          {board.name === "To Do" ? (
                            <img src={Addsquare1} alt="attach" />
                          ) : null}
                        </div>
                        <p
                          className={`${
                            board.name === "To Do"
                              ? "bg-[#5030E5]"
                              : board.name === "On Progress"
                              ? "bg-[#FFA500]"
                              : "bg-[#8BC48A]"
                          } w-100 h-[3px] my-5`}
                        ></p>
                        <div
                          className="mt-1 overflow-y-auto overflow-x-hidden h-auto"
                          style={{ maxHeight: "calc(100vh - 50px)" }}
                        >
                          {board.items.length > 0 &&
                            board.items.map((item, iIndex) => (
                              <CardItem
                                key={item.id}
                                data={item}
                                index={iIndex}
                                className="m-3"
                              />
                            ))}
                          {provided.placeholder}
                        </div>
                      </div>
                    </div>
                  )}
                </Droppable>
              </div>
            ))}
          </div>
        </DragDropContext>
      )}
    </div>
  );
};
export default Home;
