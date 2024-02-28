// import style from './Styling/Menu.module.scss';
// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { NavLink } from 'react-router-dom';

// const Menu = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <section className={style.menu}>
//       <section className={style.menu__toggleButton} onClick={toggleMenu}>
//         <motion.div
//             initial={{ rotate: 0, y: 0, x: 0 }}
//             animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? "10px" : "0px", x: isOpen ? "-4px" : "0px"}}
//         ></motion.div>
//         <motion.div
//           initial={{ opacity: 1 }}
//           animate={{ opacity: isOpen ? 0 : 1 }}
//           transition={{ duration: 0.3 }}
//         ></motion.div>
//         <motion.div
//             initial={{ rotate: 0, y: 0, x: 0 }}
//             animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? "-10px" : "0px", x: isOpen ? "-3px" : "0px" }}
//             transition={{ duration: 0.3 }}
//         ></motion.div>
//       </section>
//       <AnimatePresence>
//         {isOpen && (
//           <motion.article>
//             <motion.ul>
//               <NavLink to='/'>
//                 <motion.li
//                   initial={{ x: -150 }}
//                   animate={{ x: 0 }}
//                   transition={{ duration: 0.5, delay: 0 }}
//                   exit={{ x: -150 }}>
//                    Start 
//                 </motion.li>
//               </NavLink>
//               <NavLink to='/rides'>
//                 <motion.li
//                   initial={{ x: -150 }}
//                   animate={{ x: 0 }}
//                   transition={{ duration: 0.5, delay: 0.1 }}
//                   exit={{ x: -150 }}>
//                   About us 
//                 </motion.li>
//               </NavLink>
//               <NavLink to='/games'>
//                 <motion.li
//                   initial={{ x: -150 }}
//                   animate={{ x: 0 }}
//                   transition={{ duration: 0.5, delay: 0.3 }}
//                   exit={{ x: -150 }}>
//                   Calendar 
//                 </motion.li>
//               </NavLink>
//               <NavLink to='/tickets'>
//                 <motion.li
//                   initial={{ x: -150 }}
//                   animate={{ x: 0 }}
//                   transition={{ duration: 0.5, delay: 0.5 }}
//                   exit={{ x: -150 }}>
//                   Prices 
//                 </motion.li>
//               </NavLink>
//               <NavLink to='/tickets'>
//                 <motion.li
//                   initial={{ x: -150 }}
//                   animate={{ x: 0 }}
//                   transition={{ duration: 0.5, delay: 0.5 }}
//                   exit={{ x: -150 }}>
//                   Happenings 
//                 </motion.li>
//               </NavLink>
//             </motion.ul>
//           </motion.article>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// };

// export default Menu;