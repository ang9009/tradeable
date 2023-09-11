export function handleOnDrop(files, onChange, value) {
  const newFiles = files.map((file) => {
    return { file: file, url: URL.createObjectURL(file) };
  });

  if (value) {
    onChange([...value, ...newFiles]);
  } else {
    onChange(newFiles);
  }
}
