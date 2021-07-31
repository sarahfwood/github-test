import styles from "./Footer.module.css";
import Container from "../Container";
import FooterLinks from "./FooterLinks";
import FooterSocial from "./FooterSocial";
import {
  SOCIAL_FACEBOOK_ID,
  SOCIAL_INSTAGRAM_ID,
  SOCIAL_TWITTER_ID,
  SOCIAL_LINKEDIN_ID,
  SOCIAL_YOUTUBE_ID,
} from "../../lib/constants";

const Footer = () => (
  <footer className={styles.footer}>
    <Container>
      <div className="py-5 overflow-hidden d-flex flex-wrap justify-content-between">
        <p>&copy; Copyright 2021 ON. All rights reserved</p>

        <div className="d-flex flex-wrap justify-content-center">
          <FooterLinks />
          <FooterSocial
            facebook={SOCIAL_FACEBOOK_ID}
            instagram={SOCIAL_INSTAGRAM_ID}
            twitter={SOCIAL_TWITTER_ID}
            linkedIn={SOCIAL_LINKEDIN_ID}
            youtube={SOCIAL_YOUTUBE_ID}
          />
        </div>
      </div>
    </Container>
  </footer>
);

export default Footer;
