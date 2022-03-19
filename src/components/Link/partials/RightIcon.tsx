import React, { FC } from 'react';

const LinkRightIcon: FC = ({ children }) => (
    <span className="mc-link__icon mc-link__icon--right" aria-hidden>
        {children}
    </span>
);

export default LinkRightIcon;
