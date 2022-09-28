import React from 'react';
import AvatarGroup from "react-avatar-group";

const Avatar = () => {
    return (
        <>
            <AvatarGroup
            avatars={["Juan", "Omar", "Sebastian", "Ricardo"]}
            initialCharacters={1}
            max={3}
            size={30}
            displayAllOnHover
            shadow={2}
            />
        </>

    );
};

export default Avatar;