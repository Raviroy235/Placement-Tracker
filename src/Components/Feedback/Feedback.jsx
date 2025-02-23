import { useState } from "react";
import './Feedback.css';

function UserFeedback() {
    const [count, setCount] = useState(0);
    return (
        <>
        <div className="feedbackSection">
            User Feedback
        </div>
        </>
    );
}

export default UserFeedback;
