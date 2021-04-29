exports.getCommandAndArguments = (messageBody) => {
  const args = messageBody.split(" ");
  const command = args.shift().toLowerCase();
  return { command, args };
};