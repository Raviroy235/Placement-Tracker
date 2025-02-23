import { useState } from "react";
import './Company.css';

function ManageCompany() {
    const [count, setCount] = useState(0);
    return (
        <>
        <div className="companyManager">
            Manage Your Business
        </div>
        </>
    );
}

export default ManageCompany;
