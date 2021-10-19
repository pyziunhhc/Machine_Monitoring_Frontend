// import React, { useEffect, useState } from "react";
// import PropTypes from "prop-types";
// import { useDrag } from "react-dnd";
// import { useMachines } from "hooks/useMachines";
// import MachineCard from "components/molecules/Machines/MachineCard/MachineCard";
// const MachineMap = () => {
//   const [machines, setMachines] = useState([]);
//   const { getMachinesByUser } = useMachines();
//   const [{ opacity }, dragRef] = useDrag(
//     () => ({
//       type: MachineCard.CARD,
//       item: { text },
//       collect: (monitor) => ({
//         opacity: monitor.isDragging() ? 0.5 : 1,
//       }),
//     }),
//     []
//   );
//   useEffect(() => {
//     (async () => {
//       console.log(await getMachinesByUser());
//     })();
//     return () => {};
//   }, []);
//   return (
//     <div>
//       {machines.length
//         ? machines.map((machine) => {
//             console.log(machine);
//           })
//         : null}
//     </div>
//   );
// };

// MachineMap.propTypes = {};

// export default MachineMap;
