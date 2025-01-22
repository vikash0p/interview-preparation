import React from "react";
import BackgroundOneComponent, { backgroundOneData } from "@/components/PracticalReactComponents/BackgroundOneComponent";
import CarouselFirstComponent, { carouselFirstData } from "@/components/PracticalReactComponents/CarouselFirstComponent";
import ImageSliderComponent, { imageSliderDataSource } from "@/components/PracticalReactComponents/ImageSlider";
import FilterWithCheckBox, { filterWithCheckDataSource } from "@/components/PracticalReactComponents/FilterWithCheckBox";
import CountDownTimers, { countDownTimersDataSource } from "@/components/PracticalReactComponents/CountDownTimer";
import DiceRoller, { diceRollerDataSource } from "@/components/PracticalReactComponents/BeginnerComponents/DiceRoller";


export interface Link {
  id: string;
  name: string;
  url: string;
  component: React.ReactNode;
  data: any;
  level: string;
  description: string;
  tags: string[];
  estimatedTime: number;
  prerequisites: string[];
  objectives: string[];
  tips: string;
  challenges: string;
}



//! Prepare the CodingLinkData array

export const CodingLinkData: Link[] = [
  {
    id: "1",
    name: "Dynamic Background Colors",
    url: "theme-switcher",
    component: <BackgroundOneComponent />,
    data: backgroundOneData,
    level: "Intermediate",
    description:
      "Learn how to create a dynamic background color switcher using React state management techniques.",
    tags: ["React", "UI", "State Management"],
    estimatedTime: 30 ,
    prerequisites: ["Basics of React", "Understanding State"],
    objectives: [
      "Learn to manage state dynamically",
      "Apply conditional rendering techniques",
    ],
    tips: "Experiment with different colors and transitions to make the UI more engaging.",
    challenges: "Try adding a feature to let users input custom colors.",
  },
  {
    id: "2",
    name: "Image Carousel",
    url: "image-carousel",
    component: React.createElement(CarouselFirstComponent),
    data: carouselFirstData,
    level: "Beginner",
    description:
      "Implement a basic image carousel with navigation buttons and autoplay functionality.",
    tags: ["React", "Carousel", "Beginner"],
    estimatedTime: 45,
    prerequisites: ["React Basics", "CSS Styling"],
    objectives: [
      "Learn to create a carousel component",
      "Understand event handling in React",
    ],
    tips: "Use CSS animations to make the transitions smoother.",
    challenges: "Add a pause on hover functionality for autoplay.",
  },
  {
    id: "3",
    name: "Image Slider",
    url: "image-slider",
    component: React.createElement(ImageSliderComponent),
    data: imageSliderDataSource,
    level: "Intermediate",
    description:
      "Build an image slider with customizable transitions and responsive design.",
    tags: ["React", "UI", "Responsive"],
    estimatedTime: 1,
    prerequisites: ["React Basics", "Responsive Design"],
    objectives: [
      "Learn to build a responsive slider",
      "Customize slider transitions",
    ],
    tips: "Test your slider on different devices to ensure responsiveness.",
    challenges:
      "Add a feature to display captions or descriptions for each slide.",
  },
  {
    id: "4",
    name: "Filter With Checkbox",
    url: "filter-with-checkbox",
    component: React.createElement(FilterWithCheckBox),
    data: filterWithCheckDataSource,
    level: "Intermediate",
    description:
      "Learn how to create a filterable list using checkboxes to show or hide items dynamically.",
    tags: ["React", "Forms", "Filter"],
    estimatedTime: 40,
    prerequisites: ["React Basics", "State Management"],
    objectives: [
      "Implement dynamic filtering",
      "Learn checkbox handling in forms",
    ],
    tips: "Consider using React context for state management if the filtering logic becomes complex.",
    challenges:
      "Allow users to select multiple filters and combine their effects.",
  },
  {
    id: "5",
    name: "CountDown Timer",
    url: "countdown-timer",
    component: React.createElement(CountDownTimers),
    data: countDownTimersDataSource,
    level: "Beginner",
    description:
      "Create a countdown timer with customizable duration and real-time updates.",
    tags: ["React", "Timer", "Beginner"],
    estimatedTime: 20,
    prerequisites: ["React Basics", "Understanding Events"],
    objectives: ["Build a timer component", "Update the UI in real time"],
    tips: "Use the useEffect hook to handle the timer logic effectively.",
    challenges: "Add a feature to pause and resume the timer.",
  },
  {
    id: "6",
    name: "Dice Roller",
    url: "dice-roller",
    component: React.createElement(DiceRoller),
    data: diceRollerDataSource,
    level: "Beginner",
    description:
      "Build a fun dice roller application to simulate rolling one or multiple dice.",
    tags: ["React", "Games", "Beginner"],
    estimatedTime: 25,
    prerequisites: ["React Basics"],
    objectives: [
      "Create a random number generator",
      "Render dynamic content based on user interaction",
    ],
    tips: "Try adding animations to the dice roll for a better user experience.",
    challenges: "Allow users to choose the number of dice to roll.",
  },
  {
    id: "7",
    name: "Todo List App",
    url: "todo-list",
    component: React.createElement(() => (
      <div>Todo List Component Placeholder</div>
    )),
    data: "{ tasks: [] }",
    level: "Beginner",
    description:
      "Develop a basic todo list application to add, edit, and delete tasks dynamically.",
    tags: ["React", "CRUD", "Beginner"],
    estimatedTime: 35,
    prerequisites: ["React Basics", "State Management"],
    objectives: ["Implement CRUD operations", "Handle user input dynamically"],
    tips: "Use React hooks like useState to manage task state effectively.",
    challenges: "Add a feature to mark tasks as completed.",
  },
  {
    id: "8",
    name: "Weather App",
    url: "weather-app",
    component: React.createElement(() => (
      <div>Weather App Component Placeholder</div>
    )),
    data: "{ location: null, weather: null }",
    level: "Intermediate",
    description:
      "Build a weather app that fetches real-time data from an external API and displays it based on user input.",
    tags: ["React", "API", "Weather"],
    estimatedTime: 1.5,
    prerequisites: ["React Basics", "API Fetching"],
    objectives: [
      "Fetch and display external data",
      "Handle asynchronous operations in React",
    ],
    tips: "Test the app with different APIs to learn handling various data structures.",
    challenges: "Add a feature to show weather forecasts for multiple days.",
  },
  {
    id: "9",
    name: "Calculator",
    url: "calculator",
    component: React.createElement(() => (
      <div>Calculator Component Placeholder</div>
    )),
    data: "{}",
    level: "Beginner",
    description:
      "Implement a simple calculator with basic arithmetic operations and a user-friendly interface.",
    tags: ["React", "Math", "Beginner"],
    estimatedTime: 30,
    prerequisites: ["React Basics"],
    objectives: [
      "Implement basic arithmetic operations",
      "Create a clean and intuitive UI",
    ],
    tips: "Use CSS to style the buttons and layout for a better user experience.",
    challenges: "Extend the calculator to handle scientific operations.",
  },
  {
    id: "10",
    name: "Expense Tracker",
    url: "expense-tracker",
    component: React.createElement(() => (
      <div>Expense Tracker Component Placeholder</div>
    )),
    data: "{ transactions: [] }",
    level: "Intermediate",
    description:
      "Create an expense tracker app to manage and visualize your income and expenses dynamically.",
    tags: ["React", "Finance", "CRUD"],
    estimatedTime: 1,
    prerequisites: ["React Basics", "State Management"],
    objectives: ["Manage financial data", "Visualize income and expenses"],
    tips: "Integrate a chart library to visualize expenses more effectively.",
    challenges: "Add a feature to categorize expenses.",
  },
];
