import { Stack, Input, Text } from "@chakra-ui/react";
import { useState } from "react";

export const FormExample = () => {
    const [form, setForm] = useState({ firstName: "", lastName: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm({ ...form, [e.target.name]: e.target.value });
  
    return (
      <Stack spacing={4}>
        <Input placeholder="First Name" name="firstName" value={form.firstName} onChange={handleChange} />
        <Input placeholder="Last Name" name="lastName" value={form.lastName} onChange={handleChange} />
        <Text>
          Hello, {form.firstName} {form.lastName}
        </Text>
      </Stack>
    );
  };