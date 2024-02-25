# Node.js download link generator Telegram Bot

This Node.js project is a Telegram bot developed using the Telegraf.js module.
It serves as a learning resource for creating a simple Telegram bot that would
listen for the times when a user send a document or a photo and in response it
would generate the file's download link and send it bac to user.

## Table of Content

- [Node.js print Telegram Bot](#nodejs-print-telegram-bot)
  - [Table of Content](#table-of-content)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
  - [Usage](#usage)
  - [Bot Commands](#bot-commands)
  - [Contributors](#contributors)

## Prerequisites

Before running the bot, ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (latest version)

## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/saeedNW/node.js-downloader_bot.git
   ```

2. Navigate to the project directory:

   ```bash
   cd node.js-downloader_bot
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Configuration

The bot requires a Telegram Bot Token for authentication. Follow these steps to obtain a token:

1. Create a new bot on Telegram by chatting with BotFather.
2. Once the bot is created, BotFather will provide you with a token. Copy this token.

Next, create a `.env` file in the project directory and add the following content:

```plaintext
BOT_TOKEN="your-bot-token-here"
```

Replace `your-bot-token-here` with the token obtained from BotFather.

## Usage

To start the bot, run the following command:

```bash
npm start
```

Alternatively, you can use the development mode with automatic restart using:

```bash
npm run dev
```

## Bot Commands

- `/start`: Run the application.

## Contributors

We would like to thank the following individuals who have contributed to the development of this application:

![avatar](https://images.weserv.nl/?url=https://github.com/erfanyousefi.png?h=150&w=150&fit=cover&mask=circle&maxage=5d)
‎ ‎ ‎ ![avatar](https://images.weserv.nl/?url=https://github.com/saeedNW.png?h=150&w=150&fit=cover&mask=circle&maxage=5d)

[**Erfan Yousefi - Supervisor and instructor of the node.js programming course**](https://github.com/erfanyousefi/)

[**Saeed Norouzi - Back-end Developer**](https://github.com/saeedNW)
