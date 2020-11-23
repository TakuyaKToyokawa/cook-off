import React from 'react';
import FriendList from '../comps/FriendList'; 

export default {
    title: 'Settings/FriendList',
    component: FriendList
}; 

const Template = (args) => <FriendList {...args} />;

export const Friendlist = Template.bind({});

Friendlist.args = {
    message: "lmaooooo",
    name: "Default Text",
    status: "red"
}