import React from 'react';

interface AnnouncerProps {
    message: string;
    readOut: boolean;
}

const Announcer:React.FC<AnnouncerProps> = ({ message, readOut }) => {
    return(
        <div
        id="Announcer"
        role="status"
        className='visuallyhidden'
        aria-live="assertive"
        aria-atomic={true}
        aria-hidden={!readOut}
        >
            {message}
        </div>
    )
}

export default Announcer;