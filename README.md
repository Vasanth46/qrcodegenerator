
# QR Code Generator

## Overview
This is a simple QR Code Generator web application built using HTML, CSS, and JavaScript. The application allows users to generate QR codes based on the text or URL they input. Additionally, it provides the functionality to download the generated QR code as a PNG image. The application also includes error handling to notify users when they fail to input any text or URL.

[QR-Code-Generator](https://hilarious-froyo-b15d60.netlify.app/)

**OUTPUT**
![QR1](https://github.com/Vasanth46/qrcodegenerator/assets/93511366/b026560c-d4db-49f4-a745-a0eccc902dbd)
![QR2](https://github.com/Vasanth46/qrcodegenerator/assets/93511366/9332761e-b388-4371-8443-e2ea41aef7b7)


## Features
- Input box to enter text or URL.
- "Generate" button to create the QR code image based on the input.
- "Download" button to download the generated QR code image as a PNG file.
- Error handling to display a red highlight around the input box when no text is entered.
- The generated QR code is displayed on the screen for preview.

## How to Use
1. Visit the QR Code Generator webpage using any modern web browser.
2. In the provided input box, type the desired text or URL for which you want to generate the QR code.
3. Click the "Generate" button to create the QR code.
4. The generated QR code will be displayed below the input box.
5. Click the "Download" button to save the QR code as a PNG image.

## Error Handling
- If the user tries to generate the QR code without entering any text or URL, the input box will be highlighted with a red border, indicating the error. A placeholder message will also guide the user to enter the required input.
- Once the user enters some text or URL and clicks the "Generate" button again, the error styling will be removed, and the QR code will be generated as expected.

## Notes
- The QR codes are generated using an external API, and as such, there might be certain limitations related to cross-origin security policies. Some browsers may impose restrictions on directly downloading images from external sources. Therefore, if the download doesn't work as expected, please try using the latest versions of modern browsers or consider hosting the QR code generation functionality on a local server to avoid cross-origin issues.

## Technologies Used
- HTML5
- CSS3
- JavaScript (ES6)

## Credits
- The QR code generation functionality is powered by the "https://api.qrserver.com/v1/create-qr-code/" API.


## License
This project is licensed under the MIT License. See the "LICENSE" file for more details.
