const notificationOpts = {
  example: {
    title: "Hey, it's good to see you!",
    message: "Now you can see how easy it is to use notifications in React!",
    position: "tr",
    autoDismiss: 0,
    action: {
      label: "Click me!!",
      callback: () => alert("clicked!")
    }
  },
  updatedFlat: {
    title: "The flat was updated!"
  }
};

export default notificationOpts;
