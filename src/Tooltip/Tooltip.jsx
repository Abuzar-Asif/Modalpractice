// import React from 'react'
// import { Button, Tooltip } from "reactstrap";
// const Tooltip = () => {
//   return (
//     <>
//       <div className="text-center">
//   <Button id="ScheduleUpdateTooltip">
//     Click me
//   </Button>
//   <UncontrolledTooltip
//     placement="top"
//     target="ScheduleUpdateTooltip"
//     trigger="click"
//   />
// </div>
//     </>
//   )
// }

// export default Tooltip




import React from "react";
import { Button, UncontrolledTooltip } from "reactstrap";

const TooltipExample = () => {
  return (
    <>
      <div className="text-center p-5">
        <Button id="ScheduleUpdateTooltip">Click me</Button>
        <UncontrolledTooltip
          placement="top"
          target="ScheduleUpdateTooltip"
          trigger="click"
        >
          Tooltip content goes here
        </UncontrolledTooltip>
      </div>
      
    </>
  );
};

export default TooltipExample;
