export const debounce = <F extends (...args: Parameters<F>) => ReturnType<F>>(
  func: F,
  waitFor: number,
  setIsSaving: (isSaving: boolean) => void,
) => {
  let timeout: NodeJS.Timeout;

  const debounced = (...args: Parameters<F>) => {
    setIsSaving(true);
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func(...args);
      setIsSaving(false)
    }, waitFor)
  };

  return debounced;
};

