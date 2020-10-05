export default {
  name: "menu",
  type: "document",
  title: "Menu",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Menu Name"
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      description: "Some frontend will require a slug to be set to be able to show the menu",
      options: {
        source: "name",
        maxLength: 96
      }
    },
    {
      name: "submenu",
      title: "Sub Menu",
      type: "submenu"
    },
    {
      name: "secondarysubmenu",
      title: "Secondary Sub Menu",
      type: "array",
      of: [{ type: "secondarysubmenu" }]
    }
  ],
  preview: {
    select: {
      title: "name"
    }
  }
};
