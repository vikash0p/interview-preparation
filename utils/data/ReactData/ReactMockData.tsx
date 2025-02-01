import  AdvantagesOfReact  from "@/components/ReactComponents/ReactMockComponents/AdvantageOfReact";
import  ChildToParent, { ChildToParentData }  from "@/components/ReactComponents/ReactMockComponents/ChildToParent";
import ControlAndUnControled from "@/components/ReactComponents/ReactMockComponents/ControlAndUnControled";
import ElementAndComponent from "@/components/ReactComponents/ReactMockComponents/ElementAndComponent";
import HighOrderComponent, { HighOrderComponentData } from "@/components/ReactComponents/ReactMockComponents/HighOrderComponent";
import { LimitationOfFunctionComponent } from "@/components/ReactComponents/ReactMockComponents/LimitationOfReact";
import PropsInReact, { PropsInReactData } from "@/components/ReactComponents/ReactMockComponents/PropsInReact";
import { StatefulComponentInReact } from "@/components/ReactComponents/ReactMockComponents/StatefulComponent";
import  StateInReact, { StateInReactData }  from "@/components/ReactComponents/ReactMockComponents/StateInReact";
import { WhatIsReact } from "@/components/ReactComponents/ReactMockComponents/WhatIsReact"


interface ReactMockDataInterface{
  title:string;
  link:string;
  component:React.ReactNode;
  data?:string;
}


export const ReactMockData : ReactMockDataInterface[] = [
  {
    title: "What is react",
    link: "what-is-react",
    component:<WhatIsReact />


  },
  {
    title: "Advantages of react",
    link: "advantages-of-react",
    component:<AdvantagesOfReact />

  },
  {
    title: "Limitation for functional component",
    link: "limitation-for-functional-component",
    component:<LimitationOfFunctionComponent />
  },
  {
    title: "State in react",
    link: "state-in-react",
    component:<StateInReact />,
    data:StateInReactData
  },
  {
    title: "Stateful component in react",
    link: "stateful-component-in-react",
    component:<StatefulComponentInReact />
  },
  {
    title: "Props in react",
    link: "props-in-react",
    component:<PropsInReact />,
    data:PropsInReactData
  },
  {
    title: "Difference between element and component",
    link: "difference-between-element-and-component",
    component:<ElementAndComponent />,
  },
  {
    title: "Pass data child to parent",
    link: "pass-data-child-to-parent",
    component:<ChildToParent />,
    data:ChildToParentData
  },
  {
    title: "High order component",
    link: "High-order-component",
    component:<HighOrderComponent />,
    data:HighOrderComponentData,
  },
  {
    title: "controlled component and uncontrolled component",
    link: "controlled-component-and-uncontrolled-component",
    component:<ControlAndUnControled />
  }
];