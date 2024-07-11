// const header = { color: "blue", fontSize: "40px" };
// import "../css/style.css";

import styles from "./inlineComponent.module.css";

export default function InlineComponent() {
  return (
    <div>
      {/* Here we use outside curly braces for defining the js and the internal curly braces for defining the css objects. also the name of the properties are written using camel case rather than using - .  */}
      {/* <h1 style={{ color: "blue", fontSize: "40px" }}> */}
      {/* <h1 style={header}>Inline Component Styling</h1> */}
      {/* <h1 className="header" >Inline Component Styling</h1> */}
      <h1  className={styles.header}>Inline Component Styling</h1>
    </div>
  );
}
