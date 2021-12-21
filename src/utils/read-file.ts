export const readFile = (file: File, onRead: (value: string) => void) => {
  const reader = new FileReader();
  reader.onload = (e) => {
    const result = e.target?.result;
    if (result && typeof result) onRead(result as string);
  };
  reader.readAsDataURL(file);
};
