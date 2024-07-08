// import React from 'react';
// import styles from './Chat.module.css';
// import { MdKeyboardArrowLeft } from "react-icons/md";
// import { MdKeyboardArrowRight } from "react-icons/md";
// const Chat = () => {
//     return (
//         <div className={styles.mobile}>
//             <div className={styles.head}>
//                 <div className={styles.notch}></div>
//                 <div className={styles.profilebox}>
//                     <div className={styles.left}>
//                         <MdKeyboardArrowLeft className={styles.leftArrow} />
//                         <div className={styles.profile}>
//                             <img src="https://img.freepik.com/premium-photo/graphic-designer-digital-avatar-generative-ai_934475-9292.jpg"
//                                 alt="dp"
//                             />
//                             <div className={styles.pdetail}>
//                                 <h3>Samuel Green</h3>
//                                 <p>Available to Walk</p>
//                             </div>
//                         </div>
//                     </div>
//                     <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
//                 </div>
//             </div>
//             <div className={styles.chatbox}>
//                 <div className={`${styles.eachmessage} ${styles.received} ${styles.animate} ${styles.animated}`}>
//                     <p>That sounds great. I&apos;d be happy with that.</p>
//                 </div>
//                 <div className={`${styles.eachmessage} ${styles.received} ${styles.animate} ${styles.animated}`}>
//                     <p>Could you send over some pictures of your dog, please?</p>
//                 </div>
//                 <div className={`${styles.eachmessage} ${styles.imgbox}`}>
//                     <img
//                         className={`${styles.animate} ${styles.animated}`}
//                         src="https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI="
//                         alt="dog1"
//                     />
//                     <img
//                         className={`${styles.animate} ${styles.animated}`}
//                         src="https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI="
//                         alt="dog2"
//                     />
//                     <img
//                         className={`${styles.animate} ${styles.animated}`}
//                         src="https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI="
//                         alt="dog3"
//                     />
//                 </div>
//                 <div className={`${styles.eachmessage} ${styles.sent} ${styles.animate} ${styles.animated}`}>
//                     <p>Here are a few pictures. She&apos;s a happy girl!</p>
//                 </div>
//                 <div className={`${styles.eachmessage} ${styles.sent} ${styles.animate} ${styles.animated}`}>
//                     <p>Can you make it?</p>
//                 </div>
//                 <div className={`${styles.eachmessage} ${styles.received} ${styles.animate} ${styles.animated}`}>
//                     <p>She looks so happy! The time we discussed works. How long shall I take her out for?</p>
//                 </div>
//                 <div className={`${styles.deal} ${styles.animate} ${styles.animated}`}>
//                     <div className={styles.det}>
//                         <input type="radio" name="plan" />
//                         <p>30 minute walk</p>
//                     </div>
//                     <p className={styles.price}>$29</p>
//                 </div>
//                 <div className={`${styles.deal} ${styles.animate} ${styles.animated}`}>
//                     <div className={styles.det}>
//                         <input type="radio" name="plan" />
//                         <p>1 hour walk</p>
//                     </div>
//                     <p className={styles.price}>$49</p>
//                 </div>
//             </div>
//             <div className={styles.sendbox}>
//                 <input type="text" readOnly placeholder="Type a message…" />
//                 <button className={styles.submit}>  
//                     <MdKeyboardArrowRight className={styles.leftArrow} />
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default Chat;
