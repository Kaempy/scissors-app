import {
  Button,
  Card,
  Checkbox,
  Label,
  Select,
  TextInput,
} from 'flowbite-react';
import wand from '../assets/wand.svg';
import Container from '../shared/container';
import '../styles/index.css';

const UrlSection = () => {
  return (
    <Container className="my-12 py-10 max-w-full bg-div">
      <Card id="analytics" className="max-w-md mx-auto text-start">
        <form className="flex flex-col gap-4">
          <div>
            <TextInput
              id="url"
              placeholder="Paste URL here..."
              required
              type="url"
              className="[&>div>input]:bg-white [&>div>input]:border-[#3284FF] placeholder:[&>div>input]:text-[#3284FF] focus:[&>div>input]:ring-[#3284FF] focus:[&>div>input]:border-[#3284FF]"
            />
          </div>
          <div className="flex gap-2 mb-4">
            <Select
              required
              color="info"
              className="[&>div>select]:bg-white w-full [&>div>select]:border-[#3284FF] [&>div>select]:text-[#3284FF] [&>div>select]:border-[0.5px] focus:[&>div>select]:ring-[#3284FF] focus:[&>div>select]:border-[#3284FF]"
            >
              <option>Choose Domain</option>
              <option>United States</option>
              <option>Canada</option>
              <option>France</option>
              <option>Germany</option>
            </Select>
            <TextInput
              placeholder="Type Alises here"
              className="[&>div>input]:bg-white [&>div>input]:border-[#3284FF] placeholder:[&>div>input]:text-[#3284FF] focus:[&>div>input]:ring-[#3284FF] focus:[&>div>input]:border-[#3284FF]"
              required
              type="url"
            />
          </div>
          <Button type="submit" color="primary" pill>
            Trim URL
            <img src={wand} alt="magic wand" />
          </Button>
          <div className="flex items-center justify-start gap-2">
            <Checkbox
              id="terms"
              className="focus:bg-primary focus:ring-0 bg-white text-[#4991ff]"
            />
            <Label htmlFor="terms" className="text-[#4991FF]">
              By clicking TrimURL, I agree to the &nbsp;
              <a href="/#" className="text-[#3284FF] font-semibold">
                Terms of Service, Privacy Policy &nbsp;
              </a>
              and Use of Cookies.
            </Label>
          </div>
        </form>
      </Card>
    </Container>
  );
};

export default UrlSection;
