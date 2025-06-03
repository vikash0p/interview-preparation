import React from "react";

const ElementAndComponent = () => {
  return (
    <div className="p-6 ">
      <h2 className="text-2xl font-bold mb-4">Element and Component</h2>
      <p className="mb-3 leading-relaxed">
        <strong>Element</strong> is a plain object describing what you want to
        appear on the screen in terms of the DOM nodes. Elements can contain
        other elements in their props. Creating a React element is cheap. Once
        an element is created, it is never mutated.
      </p>
      <p className="mb-6 leading-relaxed">
        <strong>Component</strong> is a function or class that returns a React
        element to be rendered. Components are reusable, encapsulated, and
        maintain their own state and lifecycle methods.
      </p>

      <div className="overflow-x-auto rounded-lg shadow">
        <table className="w-full table-auto border border-gray-400 text-sm">
          <thead>
            <tr className="border-b border-gray-400">
              <th className="px-4 py-3 text-left font-semibold">Aspect</th>
              <th className="px-4 py-3 text-left font-semibold">Element</th>
              <th className="px-4 py-3 text-left font-semibold">Component</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-300">
              <td className="px-4 py-3 font-medium">Definition</td>
              <td className="px-4 py-3">
                Plain JavaScript object describing DOM nodes
              </td>
              <td className="px-4 py-3">
                Function/class that returns React elements
              </td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="px-4 py-3 font-medium">Syntax</td>
              <td className="px-4 py-3">
                <code className="px-1 text-blue-500">&lt;div&gt;</code> or{" "}
                <code className="px-1 text-blue-500">
                  React.createElement()
                </code>
              </td>
              <td className="px-4 py-3">
                <code className="px-1 text-blue-500">
                  const Button = () =&gt; {}
                </code>
              </td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="px-4 py-3 font-medium">State/Lifecycle</td>
              <td className="px-4 py-3">Stateless and immutable</td>
              <td className="px-4 py-3">
                Can manage state and lifecycle methods
              </td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="px-4 py-3 font-medium">Reusability</td>
              <td className="px-4 py-3">Single instance</td>
              <td className="px-4 py-3">Reusable and composable</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium">Example</td>
              <td className="px-4 py-3">
                <code className="px-1 text-green-500">
                  &lt;h1 className=&quot;text-xl&quot;&gt;Hello&lt;/h1&gt;
                </code>
              </td>
              <td className="px-4 py-3">
                <code className="px-1 text-green-500">
                  const Header = () =&gt; &lt;h1&gt;Hello&lt;/h1&gt;
                </code>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ElementAndComponent;
