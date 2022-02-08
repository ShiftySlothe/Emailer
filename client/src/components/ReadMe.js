import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  Heading,
  Divider,
  Link,
} from "@chakra-ui/react";

export default function ReadMeModal({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="3xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Project Overview</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Heading size="md">Usage</Heading>
          <Divider />
          <Text>
            You can log into emailer using basic Google OAuth, after adding
            credits via a Stripe intergration (click the Test button to get
            dummy credentials) you can compose and send bulk email campaigns
            using SendGrid. Responses from emails are handled via Webhooks and
            are updated as users respond.
          </Text>
          <br />
          <Heading size="md">The Why</Heading>
          <Divider />
          <Text>
            Emailer was a guided project I undertook to understand the
            fundamentals of Full Stack Web Development using the MERN Stack
            (Mongo, Express, React, NodeJs). I was exposed to third party API's
            and documentation (SendGrid & Stripe), and authentification libaries
            (Passport) for the first time. I sucessfully transfered skills from
            early Django experiments to Node (HTTP Routing etc.) and gained
            experience with No-SQL Databases, specifically MongoDB Atlas.
            <br />
            <br />I also reinforced my understanding of Redux & Thunk.
          </Text>
          <br />
          <Heading size="md">What's next</Heading>
          <Divider />
          <Text>
            If I were to develop this project further, I'd aim to:
            <br />
            <br />
            Implement contacts, so that rather than entering a comma separated
            list you search for existing or add contacts.
            <br />
            <br />
            Add further customisation options around emails, including
            personalisation and a dynamic method to change the response options.
          </Text>
          <br />
          <Heading size="md">Lessons learnt</Heading>
          <Divider />
          <Text>
            If I approached this again I'd:
            <br />
            <br />
            Use a Query libary such as React Query or SWR to handle async state.
            Currently a "useAuth" hook is used to switch against the auth state
            to handle the changes to the auth state however bespoke query
            libaries abstract the problem effectively.
            <br />
            <br />
            Use Typescript. The pains of repeatedly checking the required props
            for compoenents in this project inspired me to only develop with
            Typescript moving forwards.
            <br />
            <br />
            Drop Redux & Thunk, given the ammount of state the application
            currently manages and the other packages mentioned, Context would
            suffice.
          </Text>
          <br />
          <Divider />
          <Text align="center">
            Thanks for taking the time to review my project.{" "}
          </Text>
        </ModalBody>

        <ModalFooter>
          <Link href="https://www.forson.co.uk">
            <Button variant="ghost">Back to portfolio</Button>
          </Link>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
