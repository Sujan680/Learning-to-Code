import { useState } from "react";

const ConditionalRendering = () => {
    const [isTextVisible, setIsTextVisible] = useState(false);

    const handleToggle = () => {
        setIsTextVisible(!isTextVisible);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            {
            isTextVisible && <p style={{ marginTop: '20px' }}>This is the text to show and hide!</p>
            }

            <button onClick={handleToggle}>
                {isTextVisible ? 'Hide Text' : 'Show Text'}
            </button>
        </div>
    );
};
export default ConditionalRendering;