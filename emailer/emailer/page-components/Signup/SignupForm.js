import { useState, useEffect } from 'react';
import Router from 'next/router';
import Link from 'next/link';
import { useUser } from '../../lib/hooks';
import { Center, Flex, Box } from '@chakra-ui/layout';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import {
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
  Input,
  Button,
} from '@chakra-ui/react';

const formValdiationSchema = Yup.object({
  firstName: Yup.string()
    .max(15, 'Must be 20 characters or less.')
    .required('Required.'),
  lastName: Yup.string()
    .max(20, 'Must be 20 characters or less.')
    .required('Required.'),
  email: Yup.string().email('Invalid email address.').required('Required.'),
  username: Yup.string()
    .max(20, 'Must be 20 characters or less.')
    .required('Required.'),
  password: Yup.string()
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#.?!@$%^&*-]).{8,}$/,
      'Must contain lowercase, uppercase, a number and a special character.'
    )
    .required('Required.'),
  rpassword: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Passwords must match.'
  ),
});

const formInitialValues = {
  firstName: '',
  lastName: '',
  email: '',
  username: '',
  password: '',
  rpassword: '',
};

export default function SignupForm() {
  const [user, { mutate }] = useUser();
  const [errorMsg, setErrorMsg] = useState('');

  async function onSubmit(values, { setSubmitting }) {
    const res = await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    });

    if (res.status === 201) {
      const userObj = await res.json();
      // set user to useSWR state
      mutate(userObj);
    } else {
      setErrorMsg(await res.text());
    }
    setSubmitting(false);
  }

  useEffect(() => {
    // redirect to home if user is authenticated
    if (user) Router.push('/');
  }, [user]);

  return (
    <>
      {errorMsg && <p className="error">{errorMsg}</p>}
      <Formik
        initialValues={formInitialValues}
        validationSchema={formValdiationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <Form onSubmit={formik.handleSubmit}>
            <Box width="66vw">
              <Field name="firstName">
                {({ field, form }) => (
                  <FormControl
                    isRequired
                    isInvalid={form.errors.firstName && form.touched.firstName}
                    mt={2}
                  >
                    <FormLabel htmlFor="firstName">First name</FormLabel>
                    <Input {...field} id="firstName" placeholder="First name" />
                    <FormErrorMessage>{form.errors.firstName}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="lastName">
                {({ field, form }) => (
                  <FormControl
                    isRequired
                    isInvalid={form.errors.lastName && form.touched.lastName}
                    mt={2}
                  >
                    <FormLabel htmlFor="lastName">Last name</FormLabel>
                    <Input {...field} id="lastName" placeholder="Last name" />
                    <FormErrorMessage>{form.errors.lastName}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="email">
                {({ field, form }) => (
                  <FormControl
                    isRequired
                    isInvalid={form.errors.email && form.touched.email}
                    mt={2}
                  >
                    <FormLabel htmlFor="email">Email address</FormLabel>
                    <Input {...field} id="email" placeholder="e@mail.io" />
                    <FormHelperText>
                      We&apos;ll never share your email.
                    </FormHelperText>
                    <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="username">
                {({ field, form }) => (
                  <FormControl
                    isRequired
                    isInvalid={form.errors.username && form.touched.username}
                    mt={2}
                  >
                    <FormLabel htmlFor="username">Username</FormLabel>
                    <Input {...field} id="username" placeholder="Username" />
                    <FormErrorMessage>{form.errors.username}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="password">
                {({ field, form }) => (
                  <FormControl
                    isRequired
                    isInvalid={form.errors.password && form.touched.password}
                    mt={2}
                  >
                    <FormLabel htmlFor="password">Password</FormLabel>
                    <Input {...field} id="password" placeholder="Password" />
                    <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="rpassword">
                {({ field, form }) => (
                  <FormControl
                    isRequired
                    isInvalid={form.errors.rpassword && form.touched.rpassword}
                    mt={2}
                  >
                    <FormLabel htmlFor="rpassword">Repeat password</FormLabel>
                    <Input {...field} id="rpassword" placeholder="Password" />
                    <FormErrorMessage>{form.errors.rpassword}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Flex flexDirection="column" mt={3} alignItems="center">
                <Button type="submit" mb={3} width="50%">
                  <Center>Sign up</Center>
                </Button>
                <Link href="/login">
                  <Center>I already have an account</Center>
                </Link>
              </Flex>
            </Box>
          </Form>
        )}
      </Formik>
    </>
  );
}
