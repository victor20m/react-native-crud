export const debounce = (callback: (text: string) => void, ms: number) => {
  let timeout: number;
  return (text: string) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => callback(text), ms);
  };
};
