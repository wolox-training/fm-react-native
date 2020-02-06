// Hint: use setInterval, create a new Promise and measure time with Date.now()

export function delay(time) {
  return new Promise((resolve, reject) => {
    if (time < 5000) {
      const start = Date.now();
      setTimeout(() => {
        resolve(Date.now() - start);
      }, time);
    } else {
      const reason = new Error('This time is too much !');
      reject(reason);
    }
  });
}

export async function asyncDelay(time) {
  const result = await delay(time);
  return result;
}
