const Handlebars = require("handlebars");

module.exports = {
  sum: (a, b) => {
    return a + b;
  },
  sortable: (field, sort) => {
    const icons = {
      default: "fa-solid fa-sort",
      asc: "fa-solid fa-arrow-down-wide-short",
      desc: "fa-solid fa-arrow-up-wide-short",
    };
    const types = {
      default: "desc",
      asc: "desc",
      desc: "asc",
    };
    const sortType = field === sort.column ? sort.type : "default";
    // let icon;
    // let type;
    // if (sort.type === "default") {
    //   icon = icons.default;
    // } else if (sort.type === "asc") {
    //   icon = icons.asc;
    // } else if (sort.type === "desc") {
    //   icon = icons.desc;
    // }

    let icon = icons[sortType];
    let type = types[sortType];
    const href = Handlebars.escapeExpression(
      `/me/create/mycourses?_sort&column=${field}&type=${type}`
    );
    const output = `<a href="${href}">
      <i class="${icon}"></i>
    </a>`;
    return new Handlebars.SafeString(output);
  },
};
