import Checkbox from "../components/Checkbox/Checkbox"

export default {
    title: "Components/Checkbox",
    component: Checkbox
}

const Template = args => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  clickHandler: 'toto',
  date: '10/09/2021'
};

export const Normal = () => <Checkbox />