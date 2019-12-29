export default list => {
  return ["All Projects", ...new Set(list.map(item => item.type))];
};
