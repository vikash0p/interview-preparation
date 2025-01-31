import React from "react";

 const PropsInReact = () => {
  const name="In React, props (short for properties) are used to pass data from one component to another, specifically from a parent component to a child component. Props are read-only, meaning they cannot be modified by the child component; they are used to display dynamic content or make components reusable.";
  return (
    <div>
      <h1 className="text-2xl font-bold">Props in React</h1>
      <PropsChid name={name} />
      <div className="mt-10">
        <h2 className="text-2xl font-bold ">Key Points about Props:</h2>
        <ul className="list-disc list-inside mt-5 mb-6 space-y-2">
          <li>
            Props are passed down from the parent component to the child
            component.
          </li>
          <li>
            Props are immutable, meaning the child component cannot change them.
          </li>
          <li>Props are passed as attributes in JSX.</li>
          <li>Props help in making components dynamic and reusable.</li>
        </ul>
      </div>
    </div>
  );
};
export default PropsInReact;

export const PropsChid =({name}:{name:string})=>{
  return(
    <p>{name}</p>
  )
}


export const PropsInReactData = `import React from "react";

const PropsInReact = () => {
  const name="In React, props (short for properties) are used to pass data from one component to another, specifically from a parent component to a child component. Props are read-only, meaning they cannot be modified by the child component; they are used to display dynamic content or make components reusable.";
  return (
    <div>
      <PropsChid name={name} />
    </div>
  );
};
export default PropsInReact;

export const PropsChid =({name}:{name:string})=>{
  return(
    <p>{name}</p>
  )
}`;