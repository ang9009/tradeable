const photosInputRules = {
  required: "This input is required",
  validate: {
    maxPhotos: (value) => value?.length <= 6 || "Maximum number of photos is 6",
  },
};

export default photosInputRules;
