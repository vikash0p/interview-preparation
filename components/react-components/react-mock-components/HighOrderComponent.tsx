import React from "react";

const HighOrderComponent = () => {
  return (
    <div>
      <h1>
        A Higher-Order Component (HOC) in React is a design pattern used to
        reuse component logic by wrapping a component and enhancing it with
        additional props, state, or behavior. It is a function that:
      </h1>

      <ul className="list-disc list-inside mt-5 mb-6 space-y-2">
        <li className="">Accepts a component as input.</li>
        <li className="">
          Returns a new component with extended functionality.
        </li>
        <li className="">
          Promotes code reusability for cross-cutting concerns (e.g.,
          authentication, data fetching, logging).
        </li>
      </ul>
    </div>
  );
};

export default HighOrderComponent;

export const HighOrderComponentData = `'use client';
import React, { useState, ComponentType } from "react";

interface ThemeProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}
interface ButtonProps extends ThemeProps {
  label?: string;
}

const withTheme = <P extends object>(WrappedComponent: ComponentType<P & ThemeProps>) => {
  return function ThemedComponent(props: Omit<P, keyof ThemeProps>) {
    const [theme, setTheme] = useState<"light" | "dark">("light");

    const toggleTheme = () => {
      setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
      <WrappedComponent
        {...(props as P)}
        theme={theme}
        toggleTheme={toggleTheme}
      />
    );
  };
};

const Button: React.FC<ButtonProps> = ({ theme, toggleTheme, label }) => {
  const styles: React.CSSProperties = {
    backgroundColor: theme === "light" ? "#fff" : "#333",
    color: theme === "light" ? "#000" : "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };

  return (
    <button style={styles} onClick={toggleTheme}>
      {label || "Toggle Theme"}
    </button>
  );
};

const ThemedButton = withTheme(Button);

const App: React.FC = () => {
  return (
    <div>
      <h1>Themed Component Demo</h1>
      <ThemedButton label="Switch Theme" />
    </div>
  );
};

export default App;
`;
