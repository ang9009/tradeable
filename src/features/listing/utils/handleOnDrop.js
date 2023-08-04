export function handleOnDrop(files, onChange) {
  onChange(
    files.map((file) => {
      return { file: file, url: URL.createObjectURL(file) };
    })
  );
}
