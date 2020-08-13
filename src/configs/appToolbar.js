const toolbarConfig = {
  items: [
    {
      name: "Select Model",
      color: "light",
      variant: "contained",
    },
    {
      name: "query",
      variant: "contained",
      color: "light",
      icon: require("../assets/icons/adjust-24px.svg"),
    },
    {
      name: "clone",
      color: "light",
      variant: "contained",
      icon: require("../assets/icons/file_copy-24px.svg"),
    },
    {
      name: "undo",
      color: "light",
      variant: "contained",
      icon: require("../assets/icons/undo-24px.svg"),
    },
    {
      name: "redo",
      color: "light",
      variant: "contained",
      icon: require("../assets/icons/redo-24px.svg"),
    },
    {
      name: "clear",
      color: "light",
      variant: "contained",
      icon: require("../assets/icons/clear_all-24px.svg"),
    },
    {
      name: "config",
      color: "light",
      variant: "contained",
      icon: require("../assets/icons/settings-24px.svg"),
    },
    {
      name: "graph",
      color: "light",
      variant: "contained",
      icon: require("../assets/icons/linear_scale-24px.svg"),
    },
  ],
};

export default toolbarConfig;
