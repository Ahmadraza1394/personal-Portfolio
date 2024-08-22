import { useState } from "react";

const HtmlTutorial = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const htmlTopics = [
    {
      id: 1,
      title: "HTML Introduction",
      definition:
        "HTML is like the skeleton of a webpage. Its the foundation that holds everything together!",
      syntax: "<tagname>Your content goes here</tagname>",
      example:
        "<!DOCTYPE html>\n<html>\n<head>\n  <title>My First Web Page</title>\n</head>\n<body>\n  <h1>Welcome to My Page!</h1>\n  <p>This is where I&apos;ll share my thoughts.</p>\n</body>\n</html>",
      output: (
        <div>
          <h1>Welcome to My Page!</h1>
          <p>This is where I&ll share my thoughts.</p>
        </div>
      ),
      explanation:
        "This example shows the basic structure of an HTML page. The <!DOCTYPE html> tells the browser this is an HTML5 document. The <html> tag wraps all the content. Inside, we have a <head> section for metadata like the page title, and a <body> section for the visible content.",
    },
    {
      id: 2,
      title: "HTML Elements",
      definition:
        "HTML elements are like building blocks. Each block has a specific purpose and helps structure your content.",
      syntax: "<element>Your content</element>",
      example:
        "<h1>My Favorite Foods</h1>\n<p>I love pizza, tacos, and ice cream!</p>",
      output: (
        <div>
          <h1>My Favorite Foods</h1>
          <p>I love pizza, tacos, and ice cream!</p>
        </div>
      ),
      explanation:
        "Here, <h1> creates a large heading, perfect for titles. The <p> tag creates a paragraph for normal text. By using different elements, we give structure and meaning to our content.",
    },
    {
      id: 3,
      title: "HTML Attributes",
      definition:
        "Attributes are like superpowers for HTML elements. They provide extra information or capabilities.",
      syntax: '<element attribute="value">Content</element>',
      example: '<a href="https://www.google.com">Visit Google</a>',
      output: <a href="https://www.google.com">Visit Google</a>,
      explanation:
        "The href attribute gives the <a> (anchor) tag its superpower - the ability to link to another webpage. Without href, it would just be plain text.",
    },
    {
      id: 4,
      title: "HTML Headings",
      definition:
        "Headings are like different sized labels for sections of your webpage. They help organize your content.",
      syntax: "<h1>Biggest Heading</h1> to <h6>Smallest Heading</h6>",
      example:
        "<h1>My Travel Blog</h1>\n<h2>Trip to Paris</h2>\n<h3>Day 1: Arrival</h3>",
      output: (
        <div>
          <h1>My Travel Blog</h1>
          <h2>Trip to Paris</h2>
          <h3>Day 1: Arrival</h3>
        </div>
      ),
      explanation:
        "Headings help structure your page. <h1> is typically used for the main title, <h2> for major sections, and so on. This hierarchy helps both readers and search engines understand the organization of your content.",
    },
    {
      id: 5,
      title: "HTML Paragraphs",
      definition:
        "Paragraphs are the bread and butter of your content. They&apos;re where most of your text lives.",
      syntax: "<p>This is a paragraph.</p>",
      example:
        "<p>HTML is amazing!</p>\n<p>It lets us structure web content easily.</p>",
      output: (
        <div>
          <p>HTML is amazing!</p>
          <p>It lets us structure web content easily.</p>
        </div>
      ),
      explanation:
        "Each <p> tag creates a new paragraph. Browsers automatically add some space before and after each paragraph, making your text more readable.",
    },
    {
      id: 6,
      title: "HTML Links",
      definition:
        "Links are the highways of the web, connecting pages and websites together.",
      syntax: '<a href="url">link text</a>',
      example:
        '<a href="https://www.wikipedia.org">Learn more on Wikipedia</a>',
      output: <a href="https://www.wikipedia.org">Learn more on Wikipedia</a>,
      explanation:
        "The <a> tag creates a link. The href attribute specifies where the link goes, and the text between the tags is what the user sees and clicks on.",
    },
    {
      id: 7,
      title: "HTML Images",
      definition:
        "Images bring life to your webpage. They&apos;re worth a thousand words, after all!",
      syntax: '<img src="image-file.jpg" alt="description of image">',
      example:
        '<img src="https://via.placeholder.com/300x200" alt="A cute puppy playing with a ball" width="300" height="200">',
      output: (
        <img
          src="https://via.placeholder.com/300x200"
          alt="A cute puppy playing with a ball"
          width="300"
          height="200"
        />
      ),
      explanation:
        "The <img> tag embeds an image. The src attribute specifies the image file, alt provides a text description (important for accessibility), and width and height set the image size.",
    },
    {
      id: 8,
      title: "HTML Lists",
      definition:
        "Lists help organize related items, whether in a specific order or not.",
      syntax: "<ul>\n  <li>Item</li>\n</ul>\nor\n<ol>\n  <li>Item</li>\n</ol>",
      example:
        "<ul>\n  <li>Apples</li>\n  <li>Bananas</li>\n  <li>Cherries</li>\n</ul>",
      output: (
        <ul>
          <li>Apples</li>
          <li>Bananas</li>
          <li>Cherries</li>
        </ul>
      ),
      explanation:
        "<ul> creates an unordered (bulleted) list, while <ol> would create an ordered (numbered) list. Each <li> is a list item. This structure clearly shows these items are related.",
    },
    {
      id: 9,
      title: "HTML Tables",
      definition:
        "Tables help display information in a grid format, perfect for data and comparisons.",
      syntax:
        "<table>\n  <tr>\n    <th>Header</th>\n  </tr>\n  <tr>\n    <td>Data</td>\n  </tr>\n</table>",
      example:
        "<table>\n  <tr>\n    <th>Fruit</th>\n    <th>Color</th>\n  </tr>\n  <tr>\n    <td>Apple</td>\n    <td>Red</td>\n  </tr>\n  <tr>\n    <td>Banana</td>\n    <td>Yellow</td>\n  </tr>\n</table>",
      output: (
        <table className="border-collapse border border-gray-500">
          <tr>
            <th className="border border-gray-500 px-4 py-2">Fruit</th>
            <th className="border border-gray-500 px-4 py-2">Color</th>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">Apple</td>
            <td className="border border-gray-500 px-4 py-2">Red</td>
          </tr>
          <tr>
            <td className="border border-gray-500 px-4 py-2">Banana</td>
            <td className="border border-gray-500 px-4 py-2">Yellow</td>
          </tr>
        </table>
      ),
      explanation:
        "<table> creates the table, <tr> defines each row, <th> creates header cells, and <td> creates data cells. This structure clearly organizes the information into a readable format.",
    },
    {
      id: 10,
      title: "HTML Forms",
      definition:
        "Forms allow users to input data, like signing up or searching.",
      syntax:
        '<form>\n  <input type="text" name="username">\n  <input type="submit">\n</form>',
      example:
        '<form>\n  <label for="username">Username:</label>\n  <input type="text" id="username" name="username">\n  <input type="submit" value="Sign Up">\n</form>',
      output: (
        <form>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />
          <input type="submit" value="Sign Up" />
        </form>
      ),
      explanation:
        'The <form> tag creates a form. <label> provides a text label for the input. <input type="text"> creates a text input field, and <input type="submit"> creates a submit button. This allows users to enter a username and submit the form.',
    },
    {
      id: 11,
      title: "HTML Divisions",
      definition: "Divisions group elements for styling or semantic purposes.",
      syntax: "<div>This is a division.</div>",
      example: "<div>This is a division.</div>",
      output: <div>This is a division.</div>,
      explanation:
        "<div> is a generic container element, used to group elements for styling or semantic purposes.",
    },
    {
      id: 12,
      title: "HTML Input",
      definition: "The <input> tag is used to create an input field.",
      syntax: '<input type="text" id="fname" name="fname">',
      example: '<input type="text" id="fname" name="fname">',
      output: <input type="text" id="fname" name="fname" />,
      explanation:
        "The <input> tag is used to create an input field. The 'type' attribute specifies the type of input, and the 'id' and 'name' attributes provide a unique identifier for the input field.",
    },
  ];
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <div className="w-full md:w-1/4 bg-gray-800 p-4">
        <h2 className="text-2xl font-bold mb-4 text-green-500">HTML Topics</h2>
        <ul className="space-y-2">
          {htmlTopics.map((topic) => (
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
        {selectedTopic && htmlTopics[selectedTopic - 1] ? (
          <div>
            <h2 className="text-3xl font-bold mb-6 text-green-500">
              {htmlTopics[selectedTopic - 1].title}
            </h2>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2 text-green-400">
                What is it?
              </h3>
              <p className="text-gray-300">
                {htmlTopics[selectedTopic - 1].definition}
              </p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2 text-green-400">
                How to write it:
              </h3>
              <pre className="bg-gray-800 p-4 rounded-md overflow-x-auto">
                <code className="text-green-400">
                  {htmlTopics[selectedTopic - 1].syntax}
                </code>
              </pre>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2 text-green-400">
                Here&apos;s an example:
              </h3>
              <pre className="bg-gray-800 p-4 rounded-md overflow-x-auto">
                <code className="text-blue-400">
                  {htmlTopics[selectedTopic - 1].example}
                </code>
              </pre>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2 text-green-400">
                What you&apos;ll see:
              </h3>
              <div className="bg-white text-black p-4 rounded-md">
                {htmlTopics[selectedTopic - 1].output}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-green-400">
                Let&apos;s break it down:
              </h3>
              <p className="text-gray-300">
                {htmlTopics[selectedTopic - 1].explanation}
              </p>
            </div>
          </div>
        ) : (
          <div className="text-center text-2xl text-gray-500">
            Ready to dive into HTML? Pick a topic from the menu and let&apos;s
            get started!
          </div>
        )}
      </div>
    </div>
  );
};

export default HtmlTutorial;
