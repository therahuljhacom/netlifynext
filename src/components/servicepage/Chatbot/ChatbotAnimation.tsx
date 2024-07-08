import React from "react";
import styles from './ChatbotAnimation.module.css';
const ChatbotAnimation = () => {
    return (
        <>
            <div className={styles["chat-animation"]}>
                <div className={styles["chats-top-bar"]}>
                    <div className={styles["back"]}>
                        {`->`}
                    </div>
                    <div data-bg="https://verge-ai.com/wp-content/uploads/2023/05/7-2.png" className={`${styles["profile-image"]} ${styles["rocket-lazyload"]} ${styles["lazyloaded"]} ${styles["entered"]}`} data-ll-status="loaded"></div>
                    <div className={styles["details"]}>
                        <div className={styles["name"]}>Travel Bot</div>
                        <div className={styles["company"]}>Online</div>
                    </div>
                    <div className={styles["verified"]}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18">
                        <path id="Star-2" fill="#00DA60" d="M9 16l-1.9.9-1.3-1.7-2.1-.1-.3-2.1-1.9-1 .7-2.1-1.1-1.7 1.5-1.5-.2-2.1L4.5 4l.8-2 2.1.4L9 1.1l1.7 1.3 2-.4.9 2 2 .6-.1 2.1L17 8.2l-1.1 1.7.6 2.1-1.8 1-.4 2.1-2.1.1-1.3 1.7z">
                        </path>
                        <path id="Check-Icon" fill="#FFF" d="M13.1 7.3l-.9-.8-4.1 4.1-2.2-2.1-.9.9 3 3z"></path>
                    </svg></div>
                </div>
                <div className={styles["chat-message-holder"]}>
                    <div className={styles["chat-message-container"]}><div className={`${styles["bubble"]} ${styles["text-right"]}`}><div className={`${styles["bubble-message"]} ${styles["from-me"]}`}> Hi there!</div></div><div className={`${styles["bubble"]} ${styles["text-left"]}`}><div className={`${styles["bubble-message"]} ${styles["from-bot"]}`}><div className={styles["background-test"]}></div>Welcome to TravelBot, your versatile companion for tailored travel experiences - from getaways and cultural immersions to thrilling escapades 🧳

                        What can I help you with:<div className={`${styles["bubble-buttons"]} ${styles["hero-card"]}`}><div className={styles["bubble-button"]}>Flight Bookings</div><div className={styles["bubble-button"]}>Hotel Reservations</div><div className={styles["bubble-button"]}>Local Transportation</div><div className={styles["bubble-button"]}>Trip Itinerary Planner</div><div className={styles["bubble-button"]}>Travel Insurance</div><div className={styles["bubble-button"]}>Visa Assistance</div><div className={styles["bubble-button"]}>Nearby Attractions</div></div></div></div><div className={`${styles["bubble"]} ${styles["text-right"]}`}><div className={`${styles["bubble-message"]} ${styles["from-me"]}`}> Hotel Reservations.</div></div><div className={`${styles["bubble"]} ${styles["text-left"]}`}><div className={`${styles["bubble-message"]} ${styles["from-bot"]}`}><div className={styles["background-test"]}></div>Sure thing! I can help you find and book a hotel that suits your needs and budget.

                            To get started, please tell me where and when you are planning to go 🗺</div><div className={styles["bubble-buttons"]}></div></div><div className={`${styles["bubble"]} ${styles["mb-4"]} ${styles["text-right"]}`}><div className={`${styles["bubble-message"]} ${styles["from-me"]}`}> I want to go to Paris for a week from the 15th of June.</div></div><div className={`${styles["bubble"]} ${styles["text-left"]}`}><div className={`${styles["bubble-message"]} ${styles["from-bot"]}`}><div className={styles["background-test"]}></div>Magnifique! Explore beautiful, romantic Paris with these 2 personalized hotel options based on your previous bookings.

                                <b>Le Petit Paris</b>:
                                •	$150 per night
                                •	8.9 rating
                                •	4-star

                                <b>L’Hotel du Louvre</b>:
                                •	$180 per night
                                •	9.2 rating
                                •	4-star<div className={`${styles["bubble-buttons"]} ${styles["hero-card"]}`}><div className={styles["bubble-button"]}>Le Petit Paris</div><div className={styles["bubble-button"]}>L’Hotel du Louvre</div><div className={styles["bubble-button"]}>Suggest other options</div></div></div></div><div className={`${styles["bubble"]} ${styles["text-right"]}`}><div className={`${styles["bubble-message"]} ${styles["from-me"]}`}> Suggest other options</div></div><div className={`${styles["bubble"]} ${styles["text-left"]}`}><div className={`${styles["bubble-message"]} ${styles["from-bot"]}`}><div className={styles["background-test"]}></div>Are there any specific requirements that you have?</div><div className={styles["bubble-buttons"]}></div></div><div className={`${styles["bubble"]} ${styles["text-right"]}`}><div className={`${styles["bubble-message"]} ${styles["from-me"]}`}> I would prefer to stay in a 5-star hotel and my budget is around $250 per night. I want to stay close to the Seine River.</div></div></div>
                </div>
                <div className={styles["chat-message-input"]}>
                    <i className="fa fa-image"></i>
                    <div className={styles["chat-message-input-holder"]}>
                        <span className={styles["animation-input"]}>Type your message...</span>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ChatbotAnimation;