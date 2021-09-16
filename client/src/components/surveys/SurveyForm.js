import { reduxForm, Field } from "redux-form";
import { Button, Flex, Spacer } from "@chakra-ui/react";
import SurveyField from "./SurveyField";
import { Link } from "@chakra-ui/layout";
import { Link as RouterLink } from "react-router-dom";
import validateEmails from "../../utils/validateEmails";

export const FIELDS = [
  {
    label: "Survey Title:",
    name: "title",
    placeholder: "Title...",
    noValueError: "You must provide a title!",
  },
  {
    label: "Subject:",
    name: "subject",
    placeholder: "Subject...",
    noValueError: "You must provide a subject!",
  },
  {
    label: "Question:",
    name: "body",
    placeholder: "Question...",
    noValueError: "You must provide a question!",
  },
  {
    label: "Email list:",
    name: "recipients",
    placeholder: "Emails...",
    noValueError: "You must provide a list of emails!",
  },
];

function SurveyForm(props) {
  const renderFields = () => {
    return (
      <>
        {FIELDS.map(({ label, name, placeholder }) => {
          return (
            <Field
              component={SurveyField}
              type="text"
              label={label}
              name={name}
              placeholder={placeholder}
              key={name}
            />
          );
        })}
      </>
    );
  };

  return (
    <>
      <Flex alignItems="center" direction="column">
        <form onSubmit={props.handleSubmit(props.onSurveySubmit)}>
          {renderFields()}
          <Flex alignContent="space-evenly" mt={2}>
            <Link as={RouterLink} to="/surveys">
              <Button>Cancel</Button>
            </Link>
            <Spacer />
            <Button type="submit">Continue</Button>
          </Flex>
        </form>
      </Flex>
    </>
  );
}

function validate(values) {
  const errors = {};

  let emailsToValidate = "";
  if (values.recipients) {
    const lastCharIsComma =
      values.recipients.charAt(values.recipients.length - 1) === ",";
    if (lastCharIsComma) {
      emailsToValidate = removeLastChar(values.recipients);
    } else {
      emailsToValidate = values.recipients;
    }
    emailsToValidate.trim();
  }
  errors.recipients = validateEmails(emailsToValidate);
  FIELDS.forEach(({ name, noValueError }) => {
    if (!values[name]) {
      errors[name] = noValueError;
    }
  });

  return errors;
}

function removeLastChar(string) {
  return string.substring(0, string.length - 1);
}
export default reduxForm({
  form: "surveyForm",
  validate,
  destroyOnUnmount: false,
})(SurveyForm);
