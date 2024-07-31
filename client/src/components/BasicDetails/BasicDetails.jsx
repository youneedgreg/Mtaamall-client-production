import React from "react";
import { TextInput, Box, Textarea, Group, Button, NumberInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { validateString } from "../../utils/common";

const BasicDetails = ({ prevStep, nextStep, propertyDetails, setPropertyDetails }) => {
  const form = useForm({
    initialValues: {
      userEmail: propertyDetails.userEmail,
      title: propertyDetails.title,
      sdescription: propertyDetails.sdescription,
      ldescription: propertyDetails.ldescription,
      additionalinfo: propertyDetails.additionalinfo,

    },
    validate: {
      userEmail: (value) => validateString(value),
      title: (value) => validateString(value),
      sdescription: (value) => validateString(value),
      ldescription: (value) => validateString(value),
      additionalinfo: (value) => validateString(value),
    },
  });

  const {userEmail, title, sdescription, ldescription, additionalinfo} = form.values


  const handleSubmit = ()=> {
    const {hasErrors} = form.validate()
    if(!hasErrors) {
     setPropertyDetails((prev)=> ({...prev,userEmail, title, sdescription, ldescription, additionalinfo}))
     nextStep()
    }
   }
  return (
    <Box maw="50%" mx="auto" my="md">
      <form  onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}>
          <TextInput
          withAsterisk
          label="MtaaMall email"
          placeholder="Same email on your mtaamall account"
          {...form.getInputProps("userEmail")}
        />
        <TextInput
          withAsterisk
          label="Title"
          placeholder="Property Name"
          {...form.getInputProps("title")}
        />
        <Textarea
          placeholder="Brief Description"
          label="Description"
          withAsterisk
          {...form.getInputProps("sdescription")}
        />
         <Textarea
          placeholder="Description"
          label="Long Description"
          withAsterisk
          {...form.getInputProps("ldescription")}
        />
         <Textarea
          placeholder="eg.,haram or not"
          label="Additional Information"
          withAsterisk
          {...form.getInputProps("additionalinfo")}
        />
        <Group position="center" mt="xl">
          <Button variant="default" onClick={prevStep}>
            Back
          </Button>
          <Button type="submit">
            Next step
          </Button>
        </Group>
      </form>
    </Box>
  );
};

export default BasicDetails;
