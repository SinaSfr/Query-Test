import React, { useEffect, useState } from 'react'
// import FacebookSkeleton from '../Content-Skeleton/ContentSkeleton';
// import { InstagramSkeleton } from '../Content-Skeleton/ContentSkeleton';
import { ContentSkeleton} from '../Content-Skeleton/ContentSkeleton'


export default function UseSkeleton() {
    const [skeletonDatas, setSkeletonDatas] = useState(null)

    useEffect(() => {
        setTimeout(() => {
            setSkeletonDatas({name: "hello" , lastname: "hi"})
        }, 20000);
    })

  return (
    <>
         {/* <p>{skeletonDatas ? skeletonDatas.name : <Skeleton width={800} baseColor='#343131' highlightColor='#EEDF7A' height={20} count={5}/>}</p> */}
         {/* <p>{skeletonDatas ? skeletonDatas.name : <FacebookSkeleton/>}</p>
         <p>{skeletonDatas ? skeletonDatas.name : <InstagramSkeleton/>}</p>  */}
        <p>{skeletonDatas ? skeletonDatas.name : <ContentSkeleton/>}</p> 
        {/* <p>{skeletonDatas ? skeletonDatas.name : <CodeSkeleton/>}</p>  */}
        {/* <p>{skeletonDatas ? skeletonDatas.name : <ListSkeleton/>}</p>  */}
    </>
  )
}
