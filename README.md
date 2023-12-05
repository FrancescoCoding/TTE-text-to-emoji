# Text-to-Emoji React Hook (powered by ChatGPT api)
<img src="https://github.com/FrancescoCoding/TTE-text-to-emoji/assets/64712227/13e5cbcb-a5f0-40f6-b002-a0e7990d132d" alt="TTE-Demo" width="800"/>

## Description
### 📝🔀😃
Text-to-Emoji is a lightweight, easy-to-integrate React hook that converts text into emojis. Leveraging OpenAI's GPT-4 model, it offers accurate and context-aware emoji translations by using thought out prompt based requests. This hook is perfect for adding a fun and interactive element to any React project. Its versatile nature allows for a variety of creative implementations, such as:

- **Enhancing Website Titles and Headings**: Automatically append relevant emojis to your website's titles or headings, making them more engaging and eye-catching.
- **Interactive Blog Posts**: Use it in blog platforms to automatically suggest emojis based on the content of the posts, adding a playful touch to written content.
- **Dynamic Form Inputs**: Enhance user input fields in forms by automatically suggesting emojis based on the text they enter, which can be particularly amusing for social media platforms or messaging apps.
- **Email or Text Editors**: Integrate it with email or text editors to offer emoji suggestions, adding a layer of expressiveness to communication.
- **Feedback & Review Systems**: Utilize it in feedback and review systems to translate user sentiments into emojis, offering a quick visual representation of their feelings.

These are just a few scenarios where the Text-to-Emoji React App can be creatively used to enhance user experience and engagement across various web platforms.

## Features
- **Real-Time Emoji Translation**: Converts text to one or more emojis in real time.
- **Flexible Output**: Options to choose between a single emoji or a sequence of emojis.
- **OpenAI GPT-4 Integration**: Utilizes the latest in AI technology for precise translations.
- **Easy Integration**: Designed as a React hook, it can be easily integrated into any React application.

## Usage
### In Your Project

You can directly use the `useTextToEmoji` hook in your React application. Here's how to do it:

1. Import the hook into your React component:

    ```javascript
    import useTextToEmoji from './path-to-useTextToEmoji';
    ```

2. Initialize the hook with the necessary parameters:

    ```javascript
    const [emoji, isLoading] = useTextToEmoji(textPrompt, singleEmoji, apiKey);
    ```

    - `textPrompt`: The text you want to convert to emojis.
    - `singleEmoji`: Boolean value to determine if you want a single emoji (true) or multiple emojis (false).
    - `apiKey`: Your OpenAI API key.

3. Use the `emoji` and `isLoading` values in your component as needed.

## Run Demo Locally

If you want to run the Text-to-Emoji hook demo locally, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/FrancescoCoding/TTE-text-to-emoji
    cd text-to-emoji
    ```

2. Install the necessary dependencies:

    ```bash
    npm install
    ```
    
3. Start the application:

    ```bash
    npm start
    ```

4. The app will be available at `http://localhost:3000`.

## Configuration

Ensure you have a valid OpenAI API key to use the Text-to-Emoji functionality. Set your API key in the hook's parameters or in your environment variables.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Portfolio - [fran-dev.com/portfolio/contact](https://fran-dev.com/portfolio#about/contact)

Project Link: [TTE: Text-to-Emoji](https://github.com/FrancescoCoding/TTE-text-to-emoji)

