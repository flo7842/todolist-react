import ToDo from "../components/ToDo/ToDo"

export default {
    title: "Components/Todo",
    component: ToDo
}
const Template = args => <ToDo {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'toto',
  date: '10/09/2021'
};
export const Normal = () => <ToDo/>