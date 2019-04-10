import * as React from "react";

export interface HelloProps { compiler: string; framework: string; }

// Stateless Functional Component Style
export const Hello = (props: HelloProps) => <h1>Hello from {props.compiler} and {props.framework}!</h1>;

// Class style
// export class Hello extends React.Component<HelloProps, {}> { 
//   render() { 
//     return <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>; 
//   } 
// }
