# QuizIt

**https://playquizit.netlify.app/**

<img src="https://i.imgur.com/JJgJftu.png" alt="QuizItPic" width="80%" height="auto">

## About

QuizIt is a web application where users input a topic to generate customized quizzes. Users can set the number of questions, difficulty level, and choose between multiple-choice or true/false. The quizzes are dynamically generated using OpenAI's GPT-3.5 model.

## Tech

- Vite
- TypeScript
- React
- Chakra UI
- OpenAI API

## How to Run

```bash
# Clone repository
git clone https://github.com/leonbjorklund/QuizIt.git

# Go to root
cd quizit

# install dependencies
npm install

# Making API calls to OpenAI
Add .env to server/ with variable: OPENAI_API_KEY="your-API-key"

# change API endpoint in src/AppContext.tsx
Change the fetch endpoint in line 82 from 'api/sendToGPT' to '/sendToGPT'

# Run server
npm run server

# Run dev server
npm run dev
```

## Created By

Parham Berenjian, [GitHub Profile](https://github.com/ParhamInBinary) \
Leon Björklund, [GitHub Profile](https://github.com/leonbjorklund)
