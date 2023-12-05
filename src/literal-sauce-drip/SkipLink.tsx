import React from 'react';
import { Link } from 'react-router-dom';

interface SkipLinkProps {
    to: string;
    children?: React.ReactNode;
}

const SkipLink: React.FC<SkipLinkProps> = ({ to, children }) => {
    const computedTo = to.startsWith('#') ? to : '#' + to;

    return (
        <Link to={computedTo} id="skip-link">
            {children || 'Skip to navigation'}
        </Link>
    )
}

export default SkipLink;