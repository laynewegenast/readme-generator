// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
 ## Table of Contents
 - [Description](#description)
 - [Installation](#installation)
 - [Usage](#usage)
 - [License](#license)
 - [Contributions](#contributions)
 - [Tests](#tests)
 - [Questions](#questions)

 ## Description
 ${data.description}
 ## Installation
 ${data.installation}
 ## Usage
 ${data.usage}
 ## License
 ![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)
 ## Contributions
 ${data.contributions}
 ## Tests
 ${data.tests}
 ## Questions
  - GitHub: [${data.github}(https://github.com/${data.github})]
  - Email: [${data.email}](mailto:example@example.com)
`;
}

module.exports = generateMarkdown;
