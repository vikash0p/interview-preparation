import AdvantagesOfReact from '@/components/react-components/ReactMockComponents/AdvantageOfReact';
import ChildToParent, {
	ChildToParentData,
} from '@/components/react-components/ReactMockComponents/ChildToParent';
import ControlAndUnControled from '@/components/react-components/ReactMockComponents/ControlAndUnControled';
import ElementAndComponent from '@/components/react-components/ReactMockComponents/ElementAndComponent';
import HighOrderComponent, {
	HighOrderComponentData,
} from '@/components/react-components/ReactMockComponents/HighOrderComponent';
import { LimitationOfFunctionComponent } from '@/components/react-components/ReactMockComponents/LimitationOfReact';
import PropsInReact, {
	PropsInReactData,
} from '@/components/react-components/ReactMockComponents/PropsInReact';
import { StatefulComponentInReact } from '@/components/react-components/ReactMockComponents/StatefulComponent';
import StateInReact, {
	StateInReactData,
} from '@/components/react-components/ReactMockComponents/StateInReact';
import { WhatIsReact } from '@/components/react-components/ReactMockComponents/WhatIsReact';

interface ReactMockDataInterface {
	title: string;
	link: string;
	component: React.ReactNode;
	data?: string;
}

export const ReactMockData: ReactMockDataInterface[] = [
	{
		title: 'What is react',
		link: 'what-is-react',
		component: <WhatIsReact />,
	},
	{
		title: 'Advantages of react',
		link: 'advantages-of-react',
		component: <AdvantagesOfReact />,
	},
	{
		title: 'Limitation for functional component',
		link: 'limitation-for-functional-component',
		component: <LimitationOfFunctionComponent />,
	},
	{
		title: 'State in react',
		link: 'state-in-react',
		component: <StateInReact />,
		data: StateInReactData,
	},
	{
		title: 'Stateful component in react',
		link: 'stateful-component-in-react',
		component: <StatefulComponentInReact />,
	},
	{
		title: 'Props in react',
		link: 'props-in-react',
		component: <PropsInReact />,
		data: PropsInReactData,
	},
	{
		title: 'Difference between element and component',
		link: 'difference-between-element-and-component',
		component: <ElementAndComponent />,
	},
	{
		title: 'Pass data child to parent',
		link: 'pass-data-child-to-parent',
		component: <ChildToParent />,
		data: ChildToParentData,
	},
	{
		title: 'High order component',
		link: 'High-order-component',
		component: <HighOrderComponent />,
		data: HighOrderComponentData,
	},
	{
		title: 'controlled component and uncontrolled component',
		link: 'controlled-component-and-uncontrolled-component',
		component: <ControlAndUnControled />,
	},
];
