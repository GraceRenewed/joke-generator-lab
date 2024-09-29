// eslint-disable-next-line import/prefer-default-export
export async function getJoke() {
  const jokeEndpoint = await fetch('https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart');
  return jokeEndpoint.json();
}
