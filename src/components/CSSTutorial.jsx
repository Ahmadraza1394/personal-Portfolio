import { useState } from "react";

const CSSTutorial = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const cssTopics = [
    {
      id: 1,
      title: "CSS Introduction",
      definition:
        "CSS (Cascading Style Sheets) is like the paint and decorations for your HTML skeleton. It defines how your web page looks!",
      syntax: "selector { property: value; }",
      example:
        "body {\n  background-color: #f0f0f0;\n  font-family: Arial, sans-serif;\n}",
      output: (
        <div
          style={{
            backgroundColor: "#f0f0f0",
            fontFamily: "Arial, sans-serif",
            padding: "10px",
          }}
        >
          This text is styled with CSS!
        </div>
      ),
      explanation:
        "This example sets the background color and font for the entire body of the webpage. The selector 'body' targets the <body> element, and the properties inside the curly braces define its style.",
    },
    {
      id: 2,
      title: "Inline CSS",
      definition:
        "Inline CSS is used to apply a unique style to a single HTML element. It's added directly to the element's tag using the style attribute.",
      syntax: '<tagname style="property: value;">Content</tagname>',
      example: '<h1 style="color: blue;">This is a blue heading.</h1>',
      output: <h1 style={{ color: "blue" }}>This is a blue heading.</h1>,
      explanation:
        "In this example, the style attribute is added to the <h1> tag, setting its color to blue. This style is unique to this specific <h1> element and won't affect any other elements on the page.",
    },
    {
      id: 3,
      title: "Internal and External CSS",
      definition:
        "CSS can be applied to HTML elements using internal or external stylesheets.",
      syntax:
        "Internal: <style>...</style> | External: <link rel='stylesheet' href='style.css'>",
      example:
        "Internal: <style>body { background-color: #f0f0f0; }</style> | External: <link rel='stylesheet' href='style.css'>",
      output: (
        <div
          style={{
            backgroundColor: "#f0f0f0",
            padding: "10px",
          }}
        >
          This text is styled with internal CSS!
        </div>
      ),
      explanation:
        "Internal CSS is applied directly within the HTML document using the <style> tag. External CSS is linked to the HTML document using the <link> tag, referencing an external stylesheet file. Both methods allow for styling HTML elements, but external stylesheets are more commonly used for larger projects.",
    },

    {
      id: 4,
      title: "CSS Selectors",
      definition:
        "Selectors are patterns used to select and style HTML elements. They allow you to target specific elements or groups of elements to apply styles.",
      syntax: "element, .class, #id { property: value; }",
      example:
        "p { color: blue; }\n.highlight { background-color: yellow; }\n#unique { font-weight: bold; }",
      output: (
        <div>
          <p style={{ color: "blue" }}>This is a blue paragraph.</p>
          <p className="highlight" style={{ backgroundColor: "yellow" }}>
            This paragraph is highlighted.
          </p>
          <p id="unique" style={{ fontWeight: "bold" }}>
            This paragraph is bold.
          </p>
        </div>
      ),
      explanation:
        "In this example, we're using three types of selectors to style different elements. The 'p' selector is an **element selector**, targeting all paragraph elements and applying a blue color to their text. The '.highlight' selector is a **class selector**, targeting elements with the class 'highlight' and setting their background color to yellow. Finally, the '#unique' selector is an **id selector**, targeting the element with the id 'unique' and making its text bold. This demonstrates how selectors can be used to apply styles to specific elements or groups of elements based on their type, class, or id.",
    },
    {
      id: 5,
      title: "CSS Box Model",
      definition:
        "The CSS box model is essentially a box that wraps around every HTML element, consisting of margins, borders, padding, and the actual content.",
      syntax:
        "element { margin: 10px; border: 1px solid black; padding: 15px; }",
      example:
        ".box {\n  width: 300px;\n  border: 5px solid black;\n  padding: 20px;\n  margin: 10px;\n}",
      output: (
        <div
          style={{
            width: "300px",
            border: "5px solid black",
            padding: "20px",
            margin: "10px",
          }}
        >
          This is a box with border, padding, and margin.
        </div>
      ),
      explanation:
        "The box model allows you to create space around elements. The border is the edge of the element, padding is the space between the content and the border, and margin is the space outside the border.",
    },
    {
      id: 6,
      title: "CSS Flexbox",
      definition:
        "Flexbox is a layout model that allows you to design flexible responsive layout structure without using float or positioning.",
      syntax: ".container { display: flex; }",
      example:
        ".flex-container {\n  display: flex;\n  justify-content: space-between;\n}\n.flex-item { flex: 1; }",
      output: (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{
              flex: 1,
              backgroundColor: "lightblue",
              margin: "5px",
              padding: "10px",
            }}
          >
            Item 1
          </div>
          <div
            style={{
              flex: 1,
              backgroundColor: "lightgreen",
              margin: "5px",
              padding: "10px",
            }}
          >
            Item 2
          </div>
          <div
            style={{
              flex: 1,
              backgroundColor: "lightpink",
              margin: "5px",
              padding: "10px",
            }}
          >
            Item 3
          </div>
        </div>
      ),
      explanation:
        "Flexbox makes it easy to align and distribute space among items in a container. Here, we're using it to create a row of equally-sized items with space between them.",
    },
    {
      id: 7,
      title: "CSS Grid",
      definition:
        "CSS Grid is a powerful tool for creating two-dimensional layouts on webpages.",
      syntax: ".container { display: grid; }",
      example:
        ".grid-container {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 10px;\n}",
      output: (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "10px",
          }}
        >
          <div style={{ backgroundColor: "lightcoral", padding: "10px" }}>
            Grid Item 1
          </div>
          <div style={{ backgroundColor: "lightseagreen", padding: "10px" }}>
            Grid Item 2
          </div>
          <div style={{ backgroundColor: "lightsalmon", padding: "10px" }}>
            Grid Item 3
          </div>
          <div style={{ backgroundColor: "lightblue", padding: "10px" }}>
            Grid Item 4
          </div>
          <div style={{ backgroundColor: "lightgreen", padding: "10px" }}>
            Grid Item 5
          </div>
          <div style={{ backgroundColor: "lightpink", padding: "10px" }}>
            Grid Item 6
          </div>
        </div>
      ),
      explanation:
        "CSS Grid allows you to create complex layouts easily. This example creates a 3-column grid with equal width columns and a 10px gap between grid items.",
    },
    {
      id: 8,
      title: "Position",
      definition:
        "CSS Positioning allows you to control the layout of elements on a webpage.",
      syntax: ".element { position: relative; }",
      example:
        ".container {\n  position: relative;\n}\n\n.element {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n}",
      output: (
        <div
          style={{
            position: "relative",
            width: "300px",
            height: "300px",
            border: "1px solid black",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "10px",
              left: "10px",
              width: "100px",
              height: "100px",
              backgroundColor: "lightblue",
            }}
          >
            Positioned Element
          </div>
        </div>
      ),
      explanation:
        "In this example, we use position: relative on the container to create a new positioning context. Then, we use position: absolute on the inner element to position it relative to the container.",
    },
    {
      id: 9,
      title: "Float",
      definition:
        "CSS Float is used to place an element to the left or right of its container.",
      syntax: ".element { float: left; }",
      example:
        ".container {\n  width: 300px;\n}\n\n.element {\n  float: left;\n  width: 100px;\n  height: 100px;\n}",
      output: (
        <div
          style={{
            width: "300px",
          }}
        >
          <div
            style={{
              float: "left",
              width: "100px",
              height: "100px",
              backgroundColor: "lightgreen",
            }}
          >
            Floated Element
          </div>
        </div>
      ),
      explanation:
        "Here, we use float: left to place the element to the left of its container. This is commonly used for layouts where you want elements to align horizontally.",
    },
    {
      id: 10,
      title: "Media Query",
      definition:
        "Media Queries allow you to apply different styles based on different screen sizes.",
      syntax: "@media (max-width: 600px) { /* styles here */ }",
      example:
        "@media (max-width: 600px) {\n  .element {\n    background-color: lightblue;\n  }\n}",
      output: (
        <div
          style={{
            backgroundColor: window.innerWidth < 600 ? "lightblue" : "none",
          }}
        >
          Media Query Example
        </div>
      ),
      explanation:
        "In this example, we use a media query to change the background color of the element to lightblue when the screen width is less than 600px.",
    },
    {
      id: 11,
      title: "Animation",
      definition:
        "CSS Animations allow you to create motion effects on your webpage.",
      syntax:
        "@keyframes animationName { from { background-color: red; } to { background-color: blue; } }",
      example:
        "@keyframes colorChange {\n  from {\n    background-color: red;\n  }\n  to {\n    background-color: blue;\n  }\n}\n\n.element {\n  animation: colorChange 2s infinite;\n}",
      output: (
        <div
          style={{
            animation: "colorChange 2s infinite",
          }}
        >
          Animated Element
        </div>
      ),
      explanation:
        "Here, we define an animation named 'colorChange' that changes the background color of the element from red to blue. We then apply this animation to the element using the animation property.",
    },
    {
      id: 12,
      title: "Z-Index",
      definition:
        "Z-Index determines the order of elements along the z-axis, controlling which elements appear on top of others.",
      syntax: "z-index: 1;",
      example: ".element {\n  z-index: 1;\n}",
      output: (
        <div
          style={{
            position: "relative",
            height: "200px",
            width: "200px",
            border: "1px solid black",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "lightblue",
              padding: "20px",
              borderRadius: "5px",
              zIndex: 1,
            }}
          >
            Element with z-index 1
          </div>
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "lightgreen",
              padding: "20px",
              borderRadius: "5px",
              zIndex: 0,
            }}
          >
            Element with z-index 0
          </div>
        </div>
      ),
      explanation:
        "In this example, we have two elements with different z-index values. The element with z-index 1 appears on top of the element with z-index 0, demonstrating how z-index controls the stacking order of elements.",
    },
    {
      id: 13,
      title: "Overflow",
      definition:
        "Overflow controls how content is handled when it exceeds the container's dimensions.",
      syntax: "overflow: hidden;",
      example: ".element {\n  overflow: hidden;\n}",
      output: (
        <div
          style={{
            overflow: "hidden",
            width: "200px",
            height: "100px",
            border: "1px solid black",
          }}
        >
          <p>
            This is a long piece of text that exceeds the container's
            dimensions. The overflow property is set to hidden, so the excess
            text is not visible.
          </p>
        </div>
      ),
      explanation:
        "Here, we set the overflow property to hidden, which prevents the content from spilling out of the container.",
    },
    {
      id: 14,
      title: "Opacity",
      definition: "Opacity controls the level of transparency of an element.",
      syntax: "opacity: 0.5;",
      example: ".element {\n  opacity: 0.5;\n}",
      output: (
        <div
          style={{
            opacity: 0.5,
            backgroundColor: "lightblue",
            padding: "20px",
            borderRadius: "5px",
          }}
        >
          Element with opacity 0.5
        </div>
      ),
      explanation:
        "In this example, we set the opacity of the element to 0.5, making it semi-transparent.",
    },
    {
      id: 15,
      title: "Pseudo Classes",
      definition:
        "Pseudo classes are used to apply styles to elements based on their state, such as hover or focus.",
      syntax: ":hover {\n  background-color: blue;\n}",
      example: ".element:hover {\n  background-color: blue;\n}",
      output: (
        <div className="hover:bg-blue-500 bg-light-blue-500 p-5 rounded-md transition-colors duration-300">
          Hover over me
        </div>
      ),
      explanation:
        "Here, we use the :hover pseudo class to change the background color of the element when it's hovered over.",
    },
    {
      id: 16,
      title: "Object Fit",
      definition:
        "Object fit controls how an image or video is resized to fit its container.",
      syntax: "object-fit: cover;",
      example: ".element {\n  object-fit: cover;\n}",
      output: (
        <div
          style={{
            width: "200px",
            height: "100px",
            border: "1px solid black",
            objectFit: "cover",
            backgroundImage: "url('https://example.com/image.jpg')",
            backgroundSize: "cover",
          }}
        />
      ),
      explanation:
        "In this example, we set the object-fit property to cover, ensuring the image covers the entire container without being stretched or distorted.",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <div className="w-full md:w-1/4 bg-gray-800 p-4">
        <h2 className="text-2xl font-bold mb-4 text-green-500">CSS Topics</h2>
        <ul className="space-y-2">
          {cssTopics.map((topic) => (
            <li
              key={topic.id}
              className={`cursor-pointer p-2 rounded-md transition-colors duration-200 ${
                selectedTopic === topic.id
                  ? "bg-green-600 text-white"
                  : "bg-gray-700 hover:bg-green-600 hover:text-white"
              }`}
              onClick={() => setSelectedTopic(topic.id)}
            >
              {topic.title}
            </li>
          ))}
        </ul>
      </div>

      {/* Main content */}
      <div className="w-full md:w-3/4 p-8">
        {selectedTopic && cssTopics[selectedTopic - 1] ? (
          <div>
            <h2 className="text-3xl font-bold mb-6 text-green-500">
              {cssTopics[selectedTopic - 1].title}
            </h2>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2 text-green-400">
                What is it?
              </h3>
              <p className="text-gray-300">
                {cssTopics[selectedTopic - 1].definition}
              </p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2 text-green-400">
                How to write it:
              </h3>
              <pre className="bg-gray-800 p-4 rounded-md overflow-x-auto">
                <code className="text-green-400">
                  {cssTopics[selectedTopic - 1].syntax}
                </code>
              </pre>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2 text-green-400">
                Here&apos;s an example:
              </h3>
              <pre className="bg-gray-800 p-4 rounded-md overflow-x-auto">
                <code className="text-blue-400">
                  {cssTopics[selectedTopic - 1].example}
                </code>
              </pre>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2 text-green-400">
                What you&apos;ll see:
              </h3>
              <div className="bg-white text-black p-4 rounded-md">
                {cssTopics[selectedTopic - 1].output}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-green-400">
                Let&apos;s break it down:
              </h3>
              <p className="text-gray-300">
                {cssTopics[selectedTopic - 1].explanation}
              </p>
            </div>
          </div>
        ) : (
          <div className="text-center text-2xl text-gray-500">
            Ready to dive into CSS? Pick a topic from the menu and let&apos;s
            get started!
          </div>
        )}
      </div>
    </div>
  );
};

export default CSSTutorial;
