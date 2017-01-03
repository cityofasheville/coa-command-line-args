
function extractOptions(args) {
  const newArgs = [];
  const options = {};
  args.forEach((arg) => {
    if (arg.startsWith('--')) {
      const eqIndex = arg.indexOf('=');
      if (eqIndex >= 0) {
        const optName = arg.substring(2, eqIndex);
        const optValue = arg.substring(eqIndex + 1);
        options[optName] = optValue;
      } else {
        const optName = arg.substring(2);
        options[optName] = true;
      }
    } else {
      newArgs.push(arg);
    }
  });
  return {
    args: newArgs,
    options,
  };
}

function stripPath(path) {
  let filename = path;
  let index = path.lastIndexOf('/');
  if (index >= 0) {
    filename = path.substring(index + 1);
  }
  else {
    index = path.lastIndexOf('\\');
    if (index >= 0) filename = path.substring(index + 1);
  }
  return filename;
}

module.exports = {
  extractOptions,
  stripPath,
};
