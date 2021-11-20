import React, { FC } from 'react';

const LinkLeftIcon: FC = ({ children }) => (
    <span className="mc-link__icon mc-link__icon--left" aria-hidden>
        {children}
    </span>
);

export default LinkLeftIcon;
