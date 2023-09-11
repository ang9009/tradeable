const fileTypes = ["image/jpg", "image/png"];

const photosInputRules = {
  required: "Please add at least one photo",
  validate: {
    maxPhotos: (photos) =>
      photos?.length <= 6 || "Maximum number of photos is 6",
  },
};

export default photosInputRules;
