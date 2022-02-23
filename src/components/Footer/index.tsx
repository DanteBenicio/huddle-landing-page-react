/* eslint-disable jsx-a11y/anchor-is-valid */
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import Button from '../Button';
import {
  Container, Copy, EmailAddres, FloatContainer,
  HuddleInformations, HuddleList, HuddleLocalAndContact,
  HuddleSocialMedia, HuddleSocialMediaWrapper, Local, Logo, PhoneNumber, Wrapper,
} from './styles';

export default function Footer() {
  return (
    <Container>
      <FloatContainer>
        <h2>Ready To Build Your Community?</h2>
        <Button text="Get Started For Free" width="250px" boxShadow />
      </FloatContainer>
      <Wrapper>
        <HuddleLocalAndContact>
          <Logo src="assets/logo-white.svg" />
          <Local>
            Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Ipsa perspiciatis corrupti, at itaque reiciendis enim
          </Local>
          <PhoneNumber>+1-543-123-4567</PhoneNumber>
          <EmailAddres>example@huddle.com</EmailAddres>
        </HuddleLocalAndContact>
        <HuddleInformations>
          <HuddleList>
            <li><a href="#">About Us</a></li>
            <li><a href="#">What We Do</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Career</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact Us</a></li>
          </HuddleList>
        </HuddleInformations>
        <HuddleSocialMedia>
          <HuddleSocialMediaWrapper>
            <span><FaFacebookF /></span>
            <span><FaTwitter /></span>
            <span><FaInstagram /></span>
          </HuddleSocialMediaWrapper>
          <Copy>
            &copy; Copyright
            &nbsp;
            {new Date().getFullYear()}
            &nbsp;
            Huddle. All rights reserved.
          </Copy>
        </HuddleSocialMedia>
      </Wrapper>
    </Container>
  );
}
