// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// generates license badge
function renderLicenseBadge(license) {
  if(license === 'MIT') {
    return `<img src="https://img.shields.io/badge/License-${license}-blue" />`; 
} else if (license === 'BSD'){
    return `<img src="https://img.shields.io/badge/License-${license}-blue" />`; 
} else {
    return '';
}  
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// generates license link
function renderLicenseLink(license) {
  if(license === 'MIT') {
      return "Click this link for more information about your license: " + `(https://opensource.org/licenses/${license})`; 
  } else if (license === 'BSD'){
      return "Click this link for more information about your license: " + `(https://opensource.org/licenses/${license})`; 
  } else {
      return '';
  }  

};

// TODO: Create a function to generate markdown for README
// README template
function generateMarkdown(data) {

  return `
# ${data.title}
  
- ${renderLicenseBadge(data.license)}

## Description
  
-${data.description}

## Table of Contents

- [Installation]{#installation}
- [Usage]{#usage}
- [Contributing]{#contributing}
- [Questions]{#questions}

## Installation
  ${data.installation}

## Usage
  ${data.usage}

## Contributing
  ${data.contributing}

## License

  - ${renderLicenseBadge(data.license)}

  - ${renderLicenseLink(data.license)}

## Questions
  ${data.github}
  ${data.email}`;
  
  
      
  
  }

module.exports = generateMarkdown;
