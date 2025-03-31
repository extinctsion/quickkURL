# QuickkURL

QuickkURL is a simple and efficient URL shortener application that allows users to shorten long URLs and generate QR codes for easy sharing. The application is built using modern web technologies and provides a user-friendly interface for quick and seamless URL shortening.

## Features

- **URL Shortening**: Convert long URLs into short, shareable links.
- **QR Code Generation**: Automatically generate a QR code for the shortened URL.
- **Download QR Code**: Download the generated QR code as a PNG file.
- **Error Handling**: Displays error messages for invalid or failed URL shortening attempts.
- **Responsive Design**: Works seamlessly across devices with a clean and intuitive interface.
- **Theme Toggle**: Switch between light and dark themes for a personalized experience.

## Technologies Used

- **Frontend**: React with Next.js
- **Styling**: Tailwind CSS
- **QR Code Generation**: [next-qrcode](https://github.com/bunlong/next-qrcode)
- **Backend**: URL shortening logic (custom or integrated with a third-party API)
- **State Management**: React `useState` hooks

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/quickkURL.git
   cd quickkURL
   ```

2. Install dependencies:
   `npm install`

3. Start the development server:
   ```
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Usage

1. Enter a long URL in the input field.
2. Click the "Shorten URL" button.
3. View the shortened URL and its corresponding QR code.
4. Use the "Download QR Code" button to save the QR code as a PNG file.

## Project Structure

quickkURL/
├── app/
│   ├── page.tsx          # Main application logic
│   ├── components/       # Reusable UI components
│   └── lib/
│       └── shorten-url.ts # URL shortening logic
├── public/               # Static assets
├── styles/               # Global styles
├── README.md             # Project documentation
└── package.json          # Project dependencies and scripts

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch:

```
git checkout -b feature/your-feature-name
```
3. Make your changes and commit them:
```
git commit -m "Add your message here"
```
4. Push to the branch:
```
git push origin feature/your-feature-name
```
5. Open a pull request.

## License
This project is licensed under the MIT License.

## Acknowledgments

- next-qrcode for QR code generation.
- Tailwind CSS for styling.
- Inspiration from various URL shortener tools.
