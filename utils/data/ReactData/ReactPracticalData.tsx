import React from "react";
import BackgroundOneComponent, {
  backgroundOneData,
} from "@/components/React/ReactPracticalComponents/BeginnerComponents/BackgroundOneComponent";
import CarouselFirstComponent, {
  carouselFirstData,
} from "@/components/React/ReactPracticalComponents/BeginnerComponents/CarouselFirstComponent";
import ImageSliderComponent, {
  imageSliderDataSource,
} from "@/components/React/ReactPracticalComponents/IntermediateComponents/ImageSlider";
import FilterWithCheckBox, {
  filterWithCheckDataSource,
} from "@/components/React/ReactPracticalComponents/IntermediateComponents/FilterWithCheckBox";
import CountDownTimers, {
  countDownTimersDataSource,
} from "@/components/React/ReactPracticalComponents/BeginnerComponents/CountDownTimer";
import DiceRoller, {
  diceRollerDataSource,
} from "@/components/React/ReactPracticalComponents/BeginnerComponents/DiceRoller";
import LikeButton, {
  likeButtonDataSource,
} from "@/components/React/ReactPracticalComponents/BeginnerComponents/LikeButton";
import InputAndSearch from "@/components/React/ReactPracticalComponents/AdvancedComponents/InputAndSearch";
import InfiniteScroll, {
  infiniteScrollDataSource,
} from "@/components/React/ReactPracticalComponents/IntermediateComponents/InfiniteScroll";
import MovingCircleFirst, {
  moveCircleFirstDataSource,
} from "@/components/React/ReactPracticalComponents/BeginnerComponents/MovingCircleFirst";
import PasswordGenerator, {
  generatePasswordDataSource,
} from "@/components/React/ReactPracticalComponents/AdvancedComponents/PasswordGenerator";
import MultilevelDropDown, {
  dropDownMenuDataSource,
} from "@/components/React/ReactPracticalComponents/IntermediateComponents/MultilevelDropdown";
import StarRating, {
  starRatingDataSource,
} from "@/components/React/ReactPracticalComponents/BeginnerComponents/StarRating";
import TodoList, {
  todoListDataSource,
} from "@/components/React/ReactPracticalComponents/IntermediateComponents/TodoList";
import Tabs, {
  tabsDataSource,
} from "@/components/React/ReactPracticalComponents/BeginnerComponents/Tabs";
import Timer, {
  timerDataSource,
} from "@/components/React/ReactPracticalComponents/IntermediateComponents/Timer";
import SearchAndInputWithLocalStorage, {
  searchAndInputWithLocalStorageDataSource,
} from "@/components/React/ReactPracticalComponents/IntermediateComponents/SearchAndInputWithLocalStorage";
import Pagination, {
  paginationDataSource,
} from "@/components/React/ReactPracticalComponents/IntermediateComponents/Pagination";
import CountDownComponent, {
  countDownInterMediateDataSource,
} from "@/components/React/ReactPracticalComponents/IntermediateComponents/CountDownComponent";
import ExcelSheet, {
  excelSheetDataSource,
} from "@/components/React/ReactPracticalComponents/IntermediateComponents/ExcelSheetFirst";
import MessageWithLikeButton, {
  messageWithLikeDataSource,
} from "@/components/React/ReactPracticalComponents/IntermediateComponents/MessageWithLikeButton";
import MultiLevel, {
  multiLevelDataSource,
} from "@/components/React/ReactPracticalComponents/IntermediateComponents/MultilevelForm";
import ShuffleGifts, {
  shuffleGiftsDataSource,
} from "@/components/React/ReactPracticalComponents/IntermediateComponents/ShuffleGifts";
import TicketBooking, {
  ticketBookingDataSource,
} from "@/components/React/ReactPracticalComponents/IntermediateComponents/TicketBooking";
import MultipleInputAndDropDown, {
  multipleInputDataSource,
} from "@/components/React/ReactPracticalComponents/IntermediateComponents/MultipleInputAndDropDown";

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
  challenges: string | string[];
}

//! Prepare the CodingLinkData array

export const CodingLinkData: Link[] = [
  {
    id: "1",
    name: "Dynamic Background Colors",
    url: "theme-switcher",
    component: <BackgroundOneComponent />,
    data: backgroundOneData,
    level: "Beginner",
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
  {
    id: "11",
    name: "Password Generator ",
    url: "password-generator",
    component: React.createElement(PasswordGenerator),
    data: generatePasswordDataSource,
    level: "Advanced",
    description:
      "A feature-rich password generator that allows users to customize the length and type of characters (uppercase, lowercase, numbers, symbols) included in the password. Users can also copy the generated password with a single click.",
    tags: ["React", "TypeScript", "Password Generator", "State Management"],
    estimatedTime: 45,
    prerequisites: [
      "Basic understanding of React and TypeScript",
      "Knowledge of React hooks (useState)",
      "Familiarity with handling forms and events in React",
      "Basic CSS or Tailwind CSS for styling",
    ],
    objectives: [
      "Learn how to create a dynamic password generator",
      "Understand how to manage and update state based on user interactions",
      "Implement clipboard functionality for user convenience",
      "Enhance UI/UX with real-time updates and feedback",
    ],
    tips: "Ensure the generated passwords are truly random by using a strong randomization method. Validate input ranges to prevent unexpected results.",
    challenges:
      "Combining multiple customization options while ensuring the output remains valid and secure.",
  },
  {
    id: "12",
    name: "Multilevel Dropdown ",
    url: "multilevel-dropdown",
    component: React.createElement(MultilevelDropDown),
    data: dropDownMenuDataSource,
    level: "Intermediate",
    description:
      "This component provides a multilevel dropdown feature where users can first select a person and then choose a city associated with the selected person.",
    tags: ["React", "Dropdown", "Multilevel Dropdown", "State Management"],
    estimatedTime: 30,
    prerequisites: [
      "Basic understanding of React functional components",
      "Familiarity with React's useState hook",
      "Understanding of managing dependent dropdowns",
      "Basic knowledge of styling with Tailwind CSS or CSS",
    ],
    objectives: [
      "Learn how to implement dependent dropdowns",
      "Understand how to manage and update state based on user interactions",
      "Enhance user experience by dynamically rendering options",
      "Practice working with arrays and conditional rendering in React",
    ],
    tips: "Handle edge cases, such as when no cities are available for a selected person. Use meaningful placeholder text for dropdowns.",
    challenges:
      "Ensure proper synchronization between the two dropdowns and handle cases where the user changes their selection.",
  },
  {
    id: "13",
    name: "Star Rating ",
    url: "star-rating",
    component: React.createElement(StarRating),
    data: starRatingDataSource,
    level: "Beginner",
    description:
      "This component allows users to provide a rating out of 5 stars, dynamically updating the UI based on their selection.",
    tags: ["React", "Star Rating", "Interactive Component", "State Management"],
    estimatedTime: 20,
    prerequisites: [
      "Basic understanding of React functional components",
      "Knowledge of React's useState hook",
      "Familiarity with handling events in React",
    ],
    objectives: [
      "Learn how to implement an interactive star rating feature",
      "Practice using state to update the UI dynamically",
      "Enhance user interface design using icons from lucide-react",
    ],
    tips: "Ensure the component is accessible for keyboard and screen reader users. Consider implementing hover effects to enhance user feedback.",
    challenges:
      "Handle cases where users want to reset their rating. Ensure the component is visually consistent across different devices and screen sizes.",
  },
  {
    id: "14",
    name: "Todo List ",
    url: "todo-list",
    component: React.createElement(TodoList),
    data: todoListDataSource,
    level: "Intermediate",
    description:
      "This component allows users to manage a todo list, persist tasks in local storage, and dynamically update the UI when tasks are added or removed.",
    tags: [
      "React",
      "Todo List",
      "State Management",
      "Local Storage",
      "Interactive Component",
    ],
    estimatedTime: 40,
    prerequisites: [
      "Understanding of React functional components",
      "Knowledge of React's useState and useEffect hooks",
      "Familiarity with local storage for data persistence",
    ],
    objectives: [
      "Learn how to implement a basic todo list application",
      "Practice using React state and effect hooks effectively",
      "Understand how to store and retrieve data from local storage",
    ],
    tips: "Ensure that the todo list is accessible and responsive. Validate user input to avoid adding empty tasks.",
    challenges:
      "Handle potential errors when parsing data from local storage. Add features like task editing or marking tasks as completed.",
  },
  {
    id: "15",
    name: "Tabs ",
    url: "tabs",
    component: React.createElement(Tabs),
    data: tabsDataSource,
    level: "Beginner",
    description:
      "This component provides a tabbed interface, allowing users to switch between different content sections dynamically.",
    tags: ["React", "UI Component", "Tabs", "State Management"],
    estimatedTime: 20,
    prerequisites: [
      "Basic understanding of React functional components",
      "Familiarity with React's useState hook",
    ],
    objectives: [
      "Learn to implement a tab-based navigation interface",
      "Understand how to dynamically render content based on state",
      "Practice creating reusable components in React",
    ],
    tips: "Use meaningful labels for the tabs and ensure the design is accessible and responsive.",
    challenges:
      "Add keyboard navigation support for the tabs. Implement additional features such as animations or lazy loading for tab content.",
  },
  {
    id: "16",
    name: "Timer Component",
    url: "timer-component",
    component: React.createElement(Timer),
    data: timerDataSource,
    level: "Intermediate",
    description:
      "This component provides a countdown timer starting from 60 seconds, allowing users to pause, resume, and stop the timer with an intuitive interface.",
    tags: ["React", "Timer", "Interactive Component", "State Management"],
    estimatedTime: 25,
    prerequisites: [
      "Basic understanding of React functional components",
      "Knowledge of React's useState and useEffect hooks",
      "Familiarity with handling timers using JavaScript",
    ],
    objectives: [
      "Learn how to create a countdown timer in React",
      "Practice managing state and side effects effectively",
      "Enhance the UI using Tailwind CSS for responsiveness",
    ],
    tips: "Ensure the timer is responsive and accessible. Add visual feedback to indicate when the timer is paused or running.",
    challenges:
      "Implement a reset button to restart the timer. Allow users to set a custom starting time and handle edge cases like negative values.",
  },
  {
    id: "17",
    name: "Search Input with Local Storage",
    url: "search-input-local-storage",
    component: React.createElement(SearchAndInputWithLocalStorage),
    data: searchAndInputWithLocalStorageDataSource,
    level: "Intermediate",
    description:
      "This component allows users to input, search, and store unique data in local storage. It dynamically updates the list based on user input and provides delete functionality for managing the stored data.",
    tags: [
      "React",
      "Local Storage",
      "Search Functionality",
      "State Management",
      "Dynamic UI",
    ],
    estimatedTime: 40,
    prerequisites: [
      "Understanding of React functional components",
      "Knowledge of React's useState and useEffect hooks",
      "Familiarity with local storage for data persistence",
      "Basic understanding of event handling in React",
    ],
    objectives: [
      "Learn how to implement dynamic search functionality",
      "Practice using local storage for persisting data",
      "Enhance user interface design using Tailwind CSS",
      "Manage state effectively for dynamic components",
    ],
    tips: "Ensure the input data is validated before adding to the list. Provide visual feedback for actions like adding, searching, and deleting items.",
    challenges:
      "Handle edge cases such as duplicate entries and case-insensitive searches. Implement additional features like editing items or clearing all stored data.",
  },
  {
    id: "18",
    name: "Pagination Component",
    url: "pagination-component",
    component: React.createElement(Pagination),
    data: paginationDataSource,
    level: "Intermediate",
    description:
      "This component displays a list of students with pagination functionality. It dynamically fetches and displays a subset of students based on the current page and allows navigation between pages.",
    tags: [
      "React",
      "Pagination",
      "State Management",
      "Dynamic UI",
      "Tailwind CSS",
    ],
    estimatedTime: 30,
    prerequisites: [
      "Understanding of React functional components",
      "Knowledge of React's useState and useEffect hooks",
      "Familiarity with array methods like slice for pagination",
      "Basic understanding of component-based design",
    ],
    objectives: [
      "Learn how to implement pagination in a React component",
      "Practice managing state and rendering dynamic data",
      "Enhance styling and layout using Tailwind CSS",
    ],
    tips: "Ensure that edge cases like navigating to the first or last page are handled gracefully. Provide visual feedback for active pages.",
    challenges:
      "Add functionality for jumping to a specific page. Implement accessibility features like keyboard navigation.",
  },
  {
    id: "19",
    name: "CountDown Timer ",
    url: "countdown-timer-hours-minutes-seconds",
    component: React.createElement(CountDownComponent),
    description:
      "A React-based countdown timer that allows users to input hours, minutes, and seconds. The timer dynamically counts down and provides options to start and reset.",
    level: "Intermediate",
    tags: [
      "React",
      "Timer",
      "State Management",
      "useState",
      "useEffect",
      "Tailwind CSS",
    ],
    data: countDownInterMediateDataSource,
    estimatedTime: 20,
    prerequisites: [
      "Understanding of React functional components",
      "Knowledge of useState and useEffect hooks",
      "Familiarity with JavaScript timer functions like setInterval and clearInterval",
      "Basic knowledge of Tailwind CSS for styling",
    ],
    objectives: [
      "Learn how to build a dynamic countdown timer in React",
      "Practice handling user input and managing component state",
      "Implement interval-based updates using setInterval and clearInterval",
      "Improve styling and layout using Tailwind CSS",
    ],
    tips: "Ensure edge cases like input validation and countdown end behavior are handled correctly. Avoid negative values for hours, minutes, and seconds.",
    challenges: [
      "Add a pause button to pause the countdown and resume it later.",
      "Display an alert or perform an action when the countdown reaches zero.",
      "Make the input fields more user-friendly, such as by restricting input to numeric values.",
    ],
  },
  {
    id: "20",
    name: "Excel Sheet Component",
    url: "excel-sheet-component",
    component: React.createElement(ExcelSheet),
    description:
      "A simple React-based Excel-like grid component that allows users to input and edit text in a grid format. Users can toggle cell styles, including background color, bold text, and italic text.",
    level: "Intermediate",
    tags: [
      "React",
      "useState",
      "CSS",
      "Excel Grid",
      "Tailwind CSS",
      "Dynamic Styling",
    ],
    data: excelSheetDataSource,
    estimatedTime: 30,
    prerequisites: [
      "Basic understanding of React functional components",
      "Familiarity with useState for state management",
      "Knowledge of dynamic class manipulation in Tailwind CSS",
    ],
    objectives: [
      "Learn how to build an editable Excel-like grid in React",
      "Practice working with two-dimensional arrays for dynamic data manipulation",
      "Implement dynamic styling using Tailwind CSS based on state changes",
    ],
    tips: "Keep the grid size adjustable and ensure that input text does not overflow the cells. Add visual feedback for toggled styles.",
    challenges: [
      "Add a feature to increase or decrease the grid size dynamically.",
      "Allow users to apply styles to specific cells instead of all cells.",
      "Enable exporting the grid content to a CSV or JSON file.",
      "Implement undo/redo functionality for cell edits.",
    ],
  },
  {
    id: "21",
    name: "Message with Like Button",
    url: "message-with-like-button",
    component: React.createElement(MessageWithLikeButton),
    description:
      "A simple React component that allows users to type and submit messages, display them in a list, and toggle a 'Like' or 'Unlike' state for each message.",
    level: "Intermediate",
    tags: [
      "React",
      "useState",
      "Message App",
      "Like Button",
      "Dynamic List",
      "Tailwind CSS",
    ],
    data: messageWithLikeDataSource,
    estimatedTime: 20,
    prerequisites: [
      "Understanding of React functional components",
      "Familiarity with useState for state management",
      "Basic styling knowledge with Tailwind CSS",
    ],
    objectives: [
      "Learn to manage a dynamic list of items in React",
      "Implement conditional rendering based on state",
      "Practice working with user input and event handlers",
      "Build a toggleable 'Like' button with dynamic styling",
    ],
    tips: "Add placeholder text for empty inputs and make the component accessible using ARIA roles where needed.",
    challenges: [
      "Allow users to edit existing messages.",
      "Enable sorting of messages (e.g., by 'Liked' status or alphabetical order).",
      "Add a feature to delete messages from the list.",
      "Persist message data in localStorage or a database for a more permanent solution.",
    ],
  },
  {
    id: "22",
    name: "Multi-Level Form",
    url: "multi-level-form",
    component: React.createElement(MultiLevel),
    description:
      "A multi-step form component in React that collects user details one field at a time, allowing navigation between steps, and displays submitted data upon completion.",
    level: "Intermediate",
    tags: [
      "React",
      "useState",
      "Form Handling",
      "Multi-Step Form",
      "Input Validation",
      "User Interface",
      "Tailwind CSS",
    ],
    data: multiLevelDataSource,
    estimatedTime: 30,
    prerequisites: [
      "Understanding of React functional components and useState",
      "Familiarity with event handling in forms",
      "Basic knowledge of conditional rendering",
      "Experience with Tailwind CSS for styling",
    ],
    objectives: [
      "Create a dynamic multi-step form with React",
      "Implement navigation between steps with validation",
      "Display submitted data dynamically upon form submission",
      "Learn how to reset form and state after submission",
    ],
    tips: "Add form validation for each step to ensure proper data entry, and consider improving accessibility by using appropriate ARIA roles and attributes.",
    challenges: [
      "Add client-side validation for email and password fields.",
      "Persist form data across page reloads using localStorage or sessionStorage.",
      "Make the form responsive to accommodate different screen sizes.",
      "Add an optional progress bar to indicate completion percentage.",
    ],
  },
  {
    id: "23",
    name: "Shuffle Gifts",
    url: "shuffle-gifts",
    component: React.createElement(ShuffleGifts),
    description:
      "A fun and interactive gift assignment application where names are entered, and gifts are shuffled and assigned randomly. Users can reset the data and start over.",
    level: "Beginner",
    tags: [
      "React",
      "useState",
      "Array Manipulation",
      "Randomization",
      "Form Handling",
      "Interactive Application",
      "Tailwind CSS",
    ],
    data: shuffleGiftsDataSource,
    estimatedTime: 20,
    prerequisites: [
      "Understanding of React functional components and useState",
      "Basic knowledge of array manipulation in JavaScript",
      "Familiarity with conditional rendering and event handling in React",
      "Experience with Tailwind CSS for styling",
    ],
    objectives: [
      "Create an interactive app for adding names and assigning gifts",
      "Implement a shuffle algorithm for random gift assignment",
      "Enable users to reset data and start over",
      "Learn how to manage dynamic lists with React state",
    ],
    tips: "You can add more gift options or use an API to fetch gift ideas dynamically. Improve accessibility by adding labels and proper ARIA attributes to form elements.",
    challenges: [
      "Add input validation to ensure unique names are entered.",
      "Display a warning message if the number of names exceeds the number of gifts.",
      "Allow users to remove individual names from the list.",
      "Make the app responsive and enhance styling with animations using Tailwind CSS.",
    ],
  },
  {
    id: "24",
    name: "Ticket Booking",
    url: "ticket-booking",
    component: React.createElement(TicketBooking),
    description:
      "A dynamic ticket booking system where users can select tickets for VIP, Economy, or General sections, with a maximum limit of 5 selections. The selected tickets are highlighted, and unavailable tickets are disabled when the limit is reached.",
    level: "Intermediate",
    tags: [
      "React",
      "useState",
      "Event Handling",
      "Conditional Rendering",
      "Interactive UI",
      "Ticket Booking System",
      "Tailwind CSS",
    ],
    data: ticketBookingDataSource,
    estimatedTime: 30,
    prerequisites: [
      "Knowledge of React functional components and state management using useState",
      "Familiarity with array manipulation in JavaScript",
      "Basic understanding of conditional rendering and event handling in React",
      "Experience using Tailwind CSS for styling",
    ],
    objectives: [
      "Develop a functional ticket booking system with a maximum selection limit",
      "Allow users to select and deselect tickets dynamically",
      "Handle state changes and conditional rendering efficiently",
      "Ensure the UI is user-friendly and visually appealing using Tailwind CSS",
    ],
    tips: "Enhance the design by adding hover effects, tooltips, or animations for better interactivity. You can also add an option to reset all selections.",
    challenges: [
      "Add functionality to reset all selected tickets.",
      "Display a summary of selected tickets (e.g., section and seat numbers).",
      "Make the grid responsive for smaller devices.",
      "Implement an option to confirm the ticket booking and show a success message.",
      "Add error handling for cases where users try to select more than the allowed limit.",
    ],
  },
  {
    id: "25",
    name: "Multiple Input and Dropdown",
    url: "multiple-input-and-dropdown",
    component: React.createElement(MultipleInputAndDropDown),
    description:
      "A versatile multiple input and dropdown component where users can search, select, and manage a list of countries. Users can also add new entries to the list dynamically.",
    level: "Intermediate",
    tags: [
      "React",
      "Dropdown",
      "Search",
      "Dynamic Input",
      "Interactive UI",
      "Form Handling",
      "State Management",
      "Lucide Icons",
      "Tailwind CSS",
    ],
    data: multipleInputDataSource,
    estimatedTime: 40,
    prerequisites: [
      "Knowledge of React functional components and state management using useState",
      "Experience handling forms and input events in React",
      "Understanding of array manipulation and filtering in JavaScript",
      "Familiarity with styling using Tailwind CSS",
    ],
    objectives: [
      "Implement a dropdown that allows multiple selections with clear functionality",
      "Enable users to search and filter existing countries dynamically",
      "Allow adding new countries if they are not already in the list",
      "Provide a user-friendly and visually appealing UI",
    ],
    tips: "Use debounce techniques to optimize the search functionality for better performance in larger datasets. Consider enhancing accessibility by adding ARIA roles and labels.",
    challenges: [
      "Add a feature to sort the selected countries alphabetically.",
      "Highlight newly added countries with a different color for a few seconds.",
      "Limit the number of selectable countries and show a warning if the limit is exceeded.",
      "Make the dropdown responsive for mobile and smaller screens.",
      "Persist the selected countries and updated list in localStorage.",
    ],
  },
];
