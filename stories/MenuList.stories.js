import React from 'react';
import MenuList from '../comps/MenuList'; 

export default {
    title: 'Settings/MenuList',
    component: MenuList
}; 

const Template = (args) => <MenuList {...args} />;

export const WithIcon = Template.bind({});
export const NoIcon = Template.bind({});
export const NoArrow = Template.bind({});

WithIcon.args = {
    displayIcon: true,
    text: "Default Text"
}

NoIcon.args = {
    displayIcon: false,
    text: "Default Text"
}

NoArrow.args = {
    displayIcon: false,
    text: "Default Text",
    displayArrow: false,
}