import React from "react";
import BackgroundOneComponent, { backgroundOneData } from "@/components/PracticalReactComponents/BackgroundOneComponent";
import CarouselFirstComponent, { carouselFirstData } from "@/components/PracticalReactComponents/CarouselFirstComponent";
import ImageSliderComponent, { imageSliderDataSource } from "@/components/PracticalReactComponents/ImageSlider";
import FilterWithCheckBox, { filterWithCheckDataSource } from "@/components/PracticalReactComponents/FilterWithCheckBox";
import CountDownTimers, { countDownTimersDataSource } from "@/components/PracticalReactComponents/CountDownTimer";
import DiceRoller, { diceRollerDataSource } from "@/components/PracticalReactComponents/BeginnerComponents/DiceRoller";
import LikeButton, { likeButtonDataSource } from "@/components/PracticalReactComponents/LikeButton";
import InputAndSearch from "@/components/PracticalReactComponents/AdvancedComponents/InputAndSearch";
import InfiniteScroll, { infiniteScrollDataSource } from "@/components/PracticalReactComponents/IntermediateComponents/InfiniteScroll";
import MovingCircleFirst, { moveCircleFirstDataSource,} from "@/components/PracticalReactComponents/BeginnerComponents/MovingCircleFirst";


export interface Link {
  id: string;
  name: string;
  url: string;
  component: React.ReactNode;
  data: string;
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
    estimatedTime: 30,
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
    name: "Like Button",
    url: "like-button",
    component: React.createElement(LikeButton),
    data: likeButtonDataSource,
    level: "Beginner",
    description:
      "A simple interactive Like button that toggles between 'Like' and 'Unlike' states. It includes a counter to track the number of likes.",
    tags: ["React", "useState", "Interactive UI", "Beginner"],
    estimatedTime: 15,
    prerequisites: [
      "Basic understanding of React and functional components",
      "Knowledge of React's useState hook",
      "Familiarity with basic Tailwind CSS",
    ],
    objectives: [
      "Learn how to toggle state in React components",
      "Understand how to update and display a counter using state",
      "Practice conditional rendering in JSX",
      "Style components using Tailwind CSS",
    ],
    tips: "Ensure the button's state updates correctly by testing the toggle functionality. Use Tailwind CSS classes to visually differentiate the like and unlike states.",
    challenges:
      "Handling the state toggle correctly and ensuring the counter reflects the accurate number of likes.",
  },
  {
    id: "8",
    name: "Input and Search Component",
    url: "input-search",
    component: React.createElement(InputAndSearch),
    data: likeButtonDataSource,
    level: "Advanced",
    description:
      "A component to search, select, and dynamically add items to a list.",
    tags: ["React", "TypeScript", "Component", "Search", "Dropdown"],
    estimatedTime: 30,
    prerequisites: [
      "Basic understanding of React and functional components",
      "Knowledge of React's useState hook",
      "Familiarity with basic Tailwind CSS",
    ],
    objectives: [
      "Learn how to filter and dynamically update lists",
      "Implement dropdown and selection functionality",
      "Practice managing component state effectively",
      "Style components using Tailwind CSS",
    ],
    tips: "Ensure the search functionality is efficient and responsive. Handle edge cases for user input.",
    challenges:
      "Managing the dynamic addition of items and ensuring the UI updates correctly.",
  },
  {
    id: "9",
    name: "Infinite Scroll Component",
    url: "infinite-scroll",
    component: React.createElement(InfiniteScroll),
    data: infiniteScrollDataSource,
    level: "Intermediate",
    description:
      "An Infinite Scroll component that dynamically loads more data as the user scrolls down.",
    tags: [
      "React",
      "TypeScript",
      "Infinite Scroll",
      "Component",
      "Intersection Observer",
    ],
    estimatedTime: 45,
    prerequisites: [
      "Basic understanding of React and functional components",
      "Knowledge of React's useState and useEffect hooks",
      "Familiarity with the Intersection Observer API",
    ],
    objectives: [
      "Learn how to implement infinite scrolling in a React component",
      "Understand the use of Intersection Observer API for triggering data loads",
      "Practice managing state and rendering dynamic content efficiently",
      "Style components to display data effectively using Tailwind CSS",
    ],
    tips: "Optimize the data loading logic to minimize unnecessary renders. Use a loading spinner or placeholder for a better user experience.",
    challenges:
      "Efficiently managing performance while handling large datasets and ensuring the observer triggers correctly.",
  },
  {
    id: "10",
    name: "Moving Circle Component",
    url: "moving-circle",
    component: React.createElement(MovingCircleFirst),
    data: moveCircleFirstDataSource,
    level: "Intermediate",
    description:
      "A visually engaging component where a circle dynamically moves based on the user's mouse position.",
    tags: ["React", "TypeScript", "Mouse Events", "Dynamic UI"],
    estimatedTime: 30,
    prerequisites: [
      "Basic understanding of React and functional components",
      "Knowledge of React's useState and useEffect hooks",
      "Familiarity with event listeners in JavaScript",
    ],
    objectives: [
      "Learn how to handle mouse events in React",
      "Understand how to update state dynamically based on user interactions",
      "Create smooth animations with Tailwind CSS",
      "Enhance user engagement through interactive UI components",
    ],
    tips: "Ensure smooth transitions and consider optimizing performance for continuous mouse events. Add a hover effect for extra interactivity.",
    challenges:
      "Accurately capturing and updating mouse position while maintaining smooth transitions.",
  },
];
