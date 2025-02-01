import { useState, useRef } from "react";

const ControlAndUnControled = () => {
  const [controlledValue, setControlledValue] = useState("");
  const uncontrolledRef = useRef(null);

  return (
    <div className="min-h-screen bg-gray-300 p-8">
      <p className="text-black">
        <span className="text-xl font-semibold">Controlled Component :- </span>A
        controlled component is one where React manages the component&apos;s
        state. The component&apos;s value is controlled by React through state,
        and changes are handled via event callbacks (e.g., onChange). The
        component re-renders whenever the state changes.
      </p>

      <p className="text-black">
        <span className="text-xl font-semibold">
          Uncontrolled Component :-{" "}
        </span>
        An uncontrolled component lets the DOM manage the form data directly.
        Instead of React state, you use a ref (e.g., useRef) to access the DOM
        element&apos;s value when needed (e.g., on form submission).
      </p>

      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          React Components Comparison
        </h1>
        <p className="text-gray-600 text-lg">
          Understanding Controlled vs. Uncontrolled Components
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Controlled Component Card */}
        <div className="bg-gray-200 p-6 rounded-xl shadow-lg border-l-4 border-blue-500">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            🎮 Controlled Component
          </h2>
          <p className="text-gray-600 mb-4">
            Components where React manages state through <code>value</code> prop
            and <code>onChange</code> handler
          </p>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Live Preview
            </label>
            <input
              type="text"
              value={controlledValue}
              onChange={(e) => setControlledValue(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Type here..."
            />
          </div>

          <div className="bg-gray-800 p-4 rounded-lg">
            <pre>
              {" "}
              <code className="text-sm text-blue-300">
                {`import { useState } from 'react';\n`}
                {`const [value, setValue] = useState('');\n`}
                {`<input\n`}
                {`  value={value}\n`}
                {`  onChange={(e) => setValue(e.target.value)}\n`}
                {`/>`}
              </code>
            </pre>
          </div>

          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <h3 className="text-sm font-semibold text-blue-800 mb-2">
              When to use:
            </h3>
            <ul className="list-disc list-inside text-sm text-blue-700">
              <li>Real-time validation</li>
              <li>Instant feedback forms</li>
              <li>Complex form logic</li>
            </ul>
          </div>
        </div>

        {/* Uncontrolled Component Card */}
        <div className="bg-gray-200 p-6 rounded-xl shadow-lg border-l-4 border-green-500">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            🕹️ Uncontrolled Component
          </h2>
          <p className="text-gray-600 mb-4">
            Components where DOM maintains state, accessed via <code>ref</code>
          </p>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Live Preview
            </label>
            <input
              type="text"
              ref={uncontrolledRef}
              defaultValue=""
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Type here..."
            />
          </div>

          <div className="bg-gray-800 p-4 rounded-lg">
            <pre>
              {" "}
              <code className="text-sm text-green-300 text-wrap">
                {`import { useRef } from 'react';\n`}
                {`const inputRef = useRef(null);\n`}
                {`<input\n`}
                {`  ref={inputRef}\n`}
                {`  defaultValue="initial"\n`}
                {`/>`}
              </code>
            </pre>
          </div>

          <div className="mt-4 p-4 bg-green-50 rounded-lg">
            <h3 className="text-sm font-semibold text-green-800 mb-2">
              When to use:
            </h3>
            <ul className="list-disc list-inside text-sm text-green-700">
              <li>Simple forms</li>
              <li>File inputs</li>
              <li>Performance-critical apps</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="max-w-4xl mx-auto mt-12 bg-white rounded-xl shadow-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left text-gray-700 font-semibold border-b">
                Key Differences
              </th>
              <th className="px-6 py-4 text-left text-blue-600 font-semibold border-b">
                Controlled
              </th>
              <th className="px-6 py-4 text-left text-green-600 font-semibold border-b">
                Uncontrolled
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4 text-gray-600 font-medium">
                Data Source
              </td>
              <td className="px-6 py-4 text-blue-600">React State</td>
              <td className="px-6 py-4 text-green-600">DOM</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4 text-gray-600 font-medium">Updates</td>
              <td className="px-6 py-4 text-blue-600">On every change</td>
              <td className="px-6 py-4 text-green-600">On demand</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4 text-gray-600 font-medium">
                Re-renders
              </td>
              <td className="px-6 py-4 text-blue-600">Frequent</td>
              <td className="px-6 py-4 text-green-600">Minimal</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4 text-gray-600 font-medium">
                Value Access
              </td>
              <td className="px-6 py-4 text-blue-600">From state</td>
              <td className="px-6 py-4 text-green-600">Via ref</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Summary */}
      <div className="max-w-4xl mx-auto mt-8 p-6 bg-purple-50 rounded-lg">
        <h3 className="text-lg font-semibold text-purple-800 mb-3">
          🚀 Pro Tip:
        </h3>
        <p className="text-purple-700">
          Use controlled components for dynamic forms needing immediate
          validation, and uncontrolled components for simple forms where
          performance matters. Most modern React apps prefer controlled
          components for better predictability!
        </p>
      </div>
    </div>
  );
};

export default ControlAndUnControled
