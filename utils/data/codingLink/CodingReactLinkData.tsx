import BackgroundOneComponent from "@/components/PracticalReactComponents/BackgroundOneComponent";
import { backgroundColorData } from "../codingReactData/BackgroundOneData";

export interface Link {
  id: number;
  name: string;
  url: string;
  component: React.ComponentType;
  data: string;
}

export const CodingReactLinkData: Link[] = [
  {
    id: 2,
    name: "Dynamic Background Colors",
    url: "/coding/ReactJS/BackgroundColor",
    component: BackgroundOneComponent,
    data: backgroundColorData,
  },
//   { id: 3, name: "Image Carousel", url: "/coding/ReactJS/carouselPage" },


//   { id: 4, name: "Custom Checkbox", url: "/coding/ReactJS/checkboxpage" },
//   { id: 5, name: "Dice Roller Game", url: "/coding/ReactJS/DiceRollerPage" },
//   {
//     id: 6,
//     name: "Infinite Scrolling",
//     url: "/coding/ReactJS/InfiniteScrollPage",
//   },
//   {
//     id: 7,
//     name: "Like Button Interaction",
//     url: "/coding/ReactJS/LikeButtonPage",
//   },
//   { id: 8, name: "Modal Popup", url: "/coding/ReactJS/ModelPage" },
//   {
//     id: 9,
//     name: "Moving Circle Animation 1",
//     url: "/coding/ReactJS/MovingCirclePageOne",
//   },
//   {
//     id: 10,
//     name: "Moving Circle Animation",
//     url: "/coding/ReactJS/MovingCirclePage",
//   },
//   {
//     id: 11,
//     name: "Moving Circle Animation 2",
//     url: "/coding/ReactJS/MovingCircleSecondPage",
//   },
//   {
//     id: 12,
//     name: "Pagination Component",
//     url: "/coding/ReactJS/PaginationPage",
//   },
//   {
//     id: 13,
//     name: "Set Interval Example",
//     url: "/coding/ReactJS/SetTimeIntervalPage",
//   },
//   { id: 14, name: "Star Rating System", url: "/coding/ReactJS/StarRatingPage" },
//   { id: 15, name: "Tabs Navigation", url: "/coding/ReactJS/TabsPage" },
//   {
//     id: 16,
//     name: "Time Display Example 1",
//     url: "/coding/ReactJS/TimeOnePage",
//   },
//   {
//     id: 17,
//     name: "Todo List Application",
//     url: "/coding/ReactJS/TodoListPage",
//   },
//   {
//     id: 18,
//     name: "Debouncing and Throttling",
//     url: "/coding/ReactJS/DebounceExample",
//   },
//   { id: 19, name: "Scroll To Top Button", url: "/coding/ReactJS/ScrollToTop" },
//   { id: 20, name: "Countdown Timer", url: "/coding/ReactJS/CountDown" },
//   { id: 21, name: "Select Input Dropdown", url: "/coding/ReactJS/InputSelect" },
//   {
//     id: 22,
//     name: "Image Placeholders with Next.js",
//     url: "/coding/ReactJS/PlaiceholderWithNext",
//   },

//   {
//     id: 24,
//     name: "Multi-Level Dropdown",
//     url: "/coding/ReactJS/MultilevelDropDown",
//   },
//   {
//     id: 25,
//     name: "Add and Search Data",
//     url: "/coding/ReactJS/InputAddDataAndSearchData",
//   },
//   {
//     id: 26,
//     name: "Search and Local Storage",
//     url: "/coding/ReactJS/serchDataAndInputDatawithLocalstorage",
//   },
//   {
//     id: 27,
//     name: "Multi-Level Select Dropdown",
//     url: "/coding/ReactJS/multilevelSelectDropdown",
//   },
//   { id: 28, name: "Multi-Level Form", url: "/coding/ReactJS/MultilevelForm" },
//   {
//     id: 29,
//     name: "Ticket Booking Example 1",
//     url: "/coding/ReactJS/ticketOne",
//   },
//   {
//     id: 30,
//     name: "Ticket Booking Example 2",
//     url: "/coding/ReactJS/tickettwo",
//   },
//   {
//     id: 31,
//     name: "Message with Like Button",
//     url: "/coding/ReactJS/messagewithlike",
//   },
//   { id: 32, name: "Excel Sheet Viewer", url: "/coding/ReactJS/execlSheet" },
//   {
//     id: 33,
//     name: "Pagination Example 2",
//     url: "/coding/ReactJS/paginationtwo",
//   },
//   {
//     id: 34,
//     name: "Image Carousel Example 2",
//     url: "/coding/ReactJS/carouselTowPage",
//   },
//   { id: 35, name: "Shuffle Array Example", url: "/coding/ReactJS/shaffleFrom" },
//   {
//     id: 36,
//     name: "Countdown Timer Example 2",
//     url: "/coding/ReactJS/CountDownOne",
//   },
//   {
//     id: 37,
//     name: "Password Generator",
//     url: "/coding/ReactJS/PasswrodGenerater",
//   },
];
