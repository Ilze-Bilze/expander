// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import { useForm, ValidationError } from '@formspree/react'
import CheckBox from './CheckBox';
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
      <div className="w-full mb-7">
        <Label htmlFor="companyname" label="Company name or Website" />
        <Input id="companyname" type="text" name="companyname" />
        <ValidationError prefix="Company Name" field="text" errors={state.errors} />
      </div>
      <div className="relative w-full mb-7">
        <Label htmlFor="checkbox" label="What's in your mind?" />
        <div className="flex flex-col md:flex-row justify-between w-full mt-7">
          <CheckBox label="Web Development" name="webdevelopment" value="webdevelopment" id="webdevelopment" htmlFor="webdevelopment" />
          <CheckBox label="Web Design" name="webdesign" value="webdesign" id="webdesign" htmlFor="webdesign" />
          <CheckBox label="Both" name="both" value="both" id="both" htmlFor="both" />
        </div>
      </div>
      <div className="w-full mb-7">
        <Label htmlFor="message" label="Message" />
        <textarea id="message" name="message" className="w-full border bg-transparent border-x-0 border-t-0 border-[#C2D6C1] border-b-1 hover:bg-main-lighter active:bg-main-lighter focus:outline-none focus:ring-1 focus:ring-main transition-all pb-0 px-4 pt-4 min-h-12" />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>  
      <Button type="submit" label="Submit" disabled={state.submitting} />
    </form>
  );
}

export default ContactForm