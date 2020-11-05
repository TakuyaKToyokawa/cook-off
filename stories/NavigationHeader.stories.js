import React from 'react';
import NavigationHeader from '../comps/NavigationHeader'; 

export default {
    title: 'Headers/NavigationHeader',
    component: NavigationHeader
}; 

const Template = (args) => <NavigationHeader {...args}/>;

export const WithArrow = Template.bind({});
export const NoArrow = Template.bind({});

WithArrow.args = {
    displayArrow: true,
    text: "Default Header"
}

NoArrow.args = {
    displayArrow: false,
    text: "Default Header"
}

