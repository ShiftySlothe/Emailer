import { FormLabel, Input, Text } from "@chakra-ui/react";

export default function SurveyField({
  input,
  label,
  meta: { error, touched },
}) {
  return (
    <>
      <FormLabel>{label}</FormLabel>
      <Input {...input} type={input} width="66vw" />
      {touched && error ? <Text color="red">{error}</Text> : null}
    </>
  );
}
