[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-f059dc9a6f8d3a56e377f745f24479a46679e63a5d9fe6f495e02850cd0d8118.svg)](https://classroom.github.com/online_ide?assignment_repo_id=6453942&assignment_repo_type=AssignmentRepo)
# Fetch Hackathon

Today, we will be using our newfound skills to make apps that request data from a server.

## Step 1 - Getting data and brainstorming (20 - 30 mins)

Here are some APIs that we can use for free. All but the dad jokes one simply need the url. Each API has documentation on how to ask for different data by changing the url. We have included an example fetch for each one to help you get started.

👉 Visit the documentation for the APIs, and use JS to request some data to see what you get back. From there, brainstorm what you could make with your knowledge of JavaScript, the DOM and the data you have received.

### Pokemon API

- [Pokemon API](https://pokeapi.co/)

```js
// fetch the first pokemon
fetch("https://pokeapi.co/api/v2/pokemon/1/");
```

### Trivia API

- [Trivia API](https://opentdb.com/api_config.php)

```js
// fetch 10 random questions
fetch("https://opentdb.com/api.php?amount=10");
```

### Dad Jokes API

- [Dad Jokes API](https://icanhazdadjoke.com/api)

```js
// fetch a dad joke
fetch("https://icanhazdadjoke.com/", {
  headers: { accept: "application/json" },
});
```

### Dictionary API

- [Dictionary API](https://dictionaryapi.dev/)

```js
// fetch the definition of the word "hello" in British English (other languages available in the docs)
fetch(`https://api.dictionaryapi.dev/api/v2/entries/en_GB/hello`);
```

## Step 2 - Break down the problem (20 - 30 mins)

Now that you have an understanding of what data you're working with and have come up with an idea of what you could achieve, break down the problem into smaller chunks. Keep breaking the problem down until you can translate your plan into code. You should dream big, break it down, and start small. If your plan turns out to be overly ambitious, then be smart and reign it in. If you've been too conservative, try and push yourself.

## Step 3 - Build (The rest of the day!)

Translate your plan into code, and turn your ideas into reality. Enjoy!
