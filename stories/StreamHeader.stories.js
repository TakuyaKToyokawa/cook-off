import React from 'react';
import StreamHeader from '../comps/StreamHeader'; 

export default {
    title: 'Headers/StreamHeader',
    component: StreamHeader
}; 

const Template = (args) => <StreamHeader {...args} />
export const Stream = Template.bind({});

Stream.args = {
    name: "Default Name",
    title: "Default Title",
    viewers: "Default Viewers (999)",
}

