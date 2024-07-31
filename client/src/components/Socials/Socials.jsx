import { useAuth0 } from "@auth0/auth0-react";
import { Box, Button, Group, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import React, { useContext } from "react";
import UserDetailContext from "../../context/UserDetailContext";
import useProperties from "../../hooks/useProperties.jsx";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { createBusiness } from "../../utils/api";
import { validateString } from "../../utils/common";

const Socials = ({
  prevStep,
  propertyDetails,
  setPropertyDetails,
  setOpened,
  setActiveStep,
}) => {
  const form = useForm({
    initialValues: {
      phone: propertyDetails.socials.phone,
      email: propertyDetails.socials.email,
      instagram: propertyDetails.socials.instagram,
      twitter: propertyDetails.socials.twitter,
      tiktok: propertyDetails.socials.tiktok,
      facebook: propertyDetails.socials.facebook,
    },
    validate: {
      phone: (value) => validateString(value),
      email: (value) => validateString(value),
    },
  });

  const { phone, email, instagram, twitter, tiktok, facebook } = form.values;

  const handleSubmit = () => {
    const { hasErrors } = form.validate();
    if (!hasErrors) {
      setPropertyDetails((prev) => ({
        ...prev,
        socials: { phone, email, instagram, twitter, tiktok, facebook },
      }));
      mutate();
    }
  };

  // ==================== upload logic
  const { user } = useAuth0();
  const {
    userDetails: { token },
  } = useContext(UserDetailContext);
  const { refetch: refetchProperties } = useProperties();

  const { mutate, isLoading } = useMutation({
    mutationFn: () => createBusiness({ ...propertyDetails, socials: { phone, email, instagram, twitter, tiktok, facebook } }, token),
    onError: ({ response }) => toast.error(response.data.message, { position: "bottom-right" }),
    onSettled: () => {
      toast.success("Added Successfully", { position: "bottom-right" });
      setPropertyDetails({
        title: "",
        sdescription: "",
        ldescription: "",
        category: "",
        address: "",
        country: "",
        city: "",
        additionalinfo: "",
        images: [],
        socials: {
          phone: "",
          email: "",
          instagram: "",
          twitter: "",
          tiktok: "",
          facebook: "",
        },
        userEmail: "",
      });
      setOpened(false);
      setActiveStep(0);
      refetchProperties();
    }
  });

  return (
    <Box maw="30%" mx="auto" my="sm">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <TextInput
          withAsterisk
          label="Phone Number"
          placeholder="07......"
          {...form.getInputProps("phone")}
        />
        <TextInput
          withAsterisk
          label="Email"
          placeholder="Johndoe@gmail.com"
          {...form.getInputProps("email")}
        />
        <TextInput
          label="Instagram"
          placeholder="Instagram Account"
          {...form.getInputProps("instagram")}
        />
        <TextInput
          label="Twitter"
          placeholder="Twitter Account"
          {...form.getInputProps("twitter")}
        />
        <TextInput
          label="TikTok"
          placeholder="TikTok Account"
          {...form.getInputProps("tiktok")}
        />
        <TextInput
          label="Facebook"
          placeholder="Facebook Account"
          {...form.getInputProps("facebook")}
        />
        <Group position="center" mt="xl">
          <Button variant="default" onClick={prevStep}>
            Back
          </Button>
          <Button type="submit" color="green" disabled={isLoading}>
            {isLoading ? "Submitting" : "Add Property"}
          </Button>
        </Group>
      </form>
    </Box>
  );
};

export default Socials;
