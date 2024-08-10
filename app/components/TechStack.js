import React from "react";
import StackMember from "./StackMember";

export default function TechStack({dataset}){
  return(
    <div>
      {dataset.map((data, index) => (
        <StackMember key={index} title={data.title} description={data.description} learntAt={data.learntAt} 
        memberID={`${data.title}-stack-member`}
        mainColor={"#00FF41"} />
      ))}
    </div>
  )
}