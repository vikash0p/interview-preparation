import { AdvantagesOfReact } from "@/components/ReactComponents/ReactMockComponents/AdvantageOfReact";
import { ChildToParent } from "@/components/ReactComponents/ReactMockComponents/ChildToParent";
import { LimitationOfFunctionComponent } from "@/components/ReactComponents/ReactMockComponents/LimitationOfReact";
import PropsInReact from "@/components/ReactComponents/ReactMockComponents/PropsInReact";
import { StatefulComponentInReact } from "@/components/ReactComponents/ReactMockComponents/StatefulComponent";
import { StateInReact } from "@/components/ReactComponents/ReactMockComponents/StateInReact";
import { WhatIsReact } from "@/components/ReactComponents/ReactMockComponents/WhatIsReact"





export const ReactMockData = [
  {
    id: "1",
    title: "What is react",
    link: "what-is-react",
    component:<WhatIsReact />
  },
  {
    id: "2",
    title: "Advantages of react",
    link: "advantages-of-react",
    component:<AdvantagesOfReact />
  },
  {
    id: "3",
    title: "Limitation for functional component",
    link: "limitation-for-functional-component",
    component:<LimitationOfFunctionComponent />
  },
  {
    id: "4",
    title: "State in react",
    link: "state-in-react",
    component:<StateInReact />
  },
  {
    id: "5",
    title: "Stateful component in react",
    link: "stateful-component-in-react",
    component:<StatefulComponentInReact />
  },
  {
    id: "7",
    title: "Props in react",
    link: "props-in-react",
    component:<PropsInReact />
  },
  {
    id: "8",
    title: "Pass data child to parent",
    link: "pass-data-child-to-parent",
    component:<ChildToParent />
  },
];