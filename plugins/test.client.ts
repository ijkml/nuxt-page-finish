function logger(name: string) {
  const {
    title,
    location: { pathname },
  } = document;
  console.info(`${name} =>`, { title, url: pathname });
}

export default defineNuxtPlugin({
  name: "hooks-test",
  hooks: {
    "page:transition:finish": function () {
      logger("page:transition:finish");
    },
    "page:finish": function () {
      logger("page:finish");
      nextTick().then(() => {
        logger("page:finish with nextTick");
      })
      setTimeout(() => {
        logger("page:finish with timeout");
      }, 300);
    },
  },
});
