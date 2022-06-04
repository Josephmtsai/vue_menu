export default function AllowItems(itemArray) {
  return itemArray.filter((item) => {
    return item.allow;
  });
}
