export default {
  type: "object",
  name: "submenu",
  title: "Sub Menu",
  fields: [
    {
      title: "Sub-Menu-Title",
      name: "menus",
      type: "array",
      of: [{ type: "titleslug" }]
    }
  ],
  preview: {
    select: {
      menus: "menus"
    },
    prepare(data) {
      return {
        title: data.menus
      };
    }
  }
};
