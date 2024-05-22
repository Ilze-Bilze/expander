// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import { useForm, ValidationError } from '@formspree/react'
import Label from './Label';
import Input from './Input';
import Button from './Button';

function ContactForm() {
  const [state, handleSubmit] = useForm("xwkgvrvp");
  if (state.succeeded) {
      return <p>Thanks for contacting me!</p>;
  }
  return (
    <form onSubmit={handleSubmit} className="relative flex flex-col items-center max-w-[720px] w-full text-black">
      <div className="relative w-full mb-7">
        <Label htmlFor="name" label="Name" />
        <Input id="name" type="text" name="name" />
        <ValidationError prefix="Name" field="text" errors={state.errors} />
      </div>
      <div className="w-full mb-7">
        <Label htmlFor="email" label="Email Address" />
        <Input id="email" type="email" name="email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <Button type="submit" label="Submit" disabled={state.submitting} />
    </form>
  );
}

export default ContactForm