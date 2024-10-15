import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const SkeletonContent2 = () => {
  return (
    <div className="max-w-[1300px] mx-auto">
      <SkeletonTheme baseColor="#d3d3d3" highlightColor="#9b9999" height={"500px"} >
         <header>
          <Skeleton count={1}  height={"170px"} />
          
        </header>
        <section className="">
          <Skeleton count={1}   width={"100%"} containerClassName="flex-1" />
        </section>
        <footer className="">
          <Skeleton count={1}   width={"100%"} height={"170px"} containerClassName="flex-1" />
        </footer>
      </SkeletonTheme>
    </div>
  );
};

export default SkeletonContent2;
