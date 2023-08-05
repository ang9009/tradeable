const photosInputRules = {
  required: "Please add at least one photo",
  validate: {
    maxPhotos: (value) => value?.length <= 6 || "Maximum number of photos is 6",
  },
};

export default photosInputRules;
