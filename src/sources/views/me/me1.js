const checkAll = $("#checkAll");
const checkItems = $(".checkItems");
const checkedItems = $(".checkItems:checked");
checkAll.change(function () {
  const IsChecked = $(this).prop("checked");
  checkItems.attr("checked", IsChecked);
});
checkItems.change(function () {
  const dataLength = checkItems.lenght === checkedItems.lenght;
  checkAll.attr("checked", dataLength);
});
