import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const SkeletonContent1 = () => {
  return (
    <div className="max-w-[1200px] mx-auto">
      <SkeletonTheme baseColor="#202020" highlightColor="#444" height={"170px"} >
         <h1>
          <Skeleton count={1} height={"70px"} />
        </h1>
        <p className="flex w-[20%]">
          <Skeleton count={5} borderRadius={"100%"} width={"15%"} inline={true} containerClassName="flex-1" />
        </p>
      </SkeletonTheme>
    </div>
  );
};

export default SkeletonContent1;