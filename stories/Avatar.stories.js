import React from "react";
import Avatar from "../comps/Avatar";

export default {
  title: "General/Avatar",
  component: Avatar,
};

const Template = (args) => <Avatar {...args} />;

export const BaseAvatar = Template.bind({});
export const Online = Template.bind({});
export const Offline = Template.bind({});
export const Live = Template.bind({});

BaseAvatar.args = {
    status:"purple"
};

Online.args = {
    status:"#48E574"
};

Offline.args = {
    status:"#E2E2E2"
};

Live.args = {
    status:"red"
};
