export async function wait(duration = 2000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, duration);
  })
}