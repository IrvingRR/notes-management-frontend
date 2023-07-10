import { Input, TextArea, Button } from "@/common";
import { Form, FormActtions } from "@/styled/common/form.styles";

export const FormAddNote = () => {
  return (
    <Form>
      <h2>Create Note</h2>
      <Input type='text' name='title' placeholder="Title" variant='secondary'/>
      <TextArea name="description" placeholder="Description" variant="secondary"/>
      <FormActtions>
        <Button label='Create'/>
        <Button label='Cancel' variant="third"/>
      </FormActtions>
    </Form> 
  );
};