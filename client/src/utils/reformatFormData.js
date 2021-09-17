export default function reformatFormData(values) {
  let reformatted = { ...values };
  reformatted.recipients = [];
  let recipients = [];
  if (values.recipients.includes(",")) {
    recipients = values.recipients.split(",");
  } else {
    recipients.push(values.recipients);
  }

  recipients.forEach((recipient) => {
    reformatted.recipients.push({
      recipient: {
        email: recipient,
      },
    });
  });

  return reformatted;
}
