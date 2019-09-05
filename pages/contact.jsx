import React from 'react';
import '../styles/global.css';
import ContactGrid from '../components/ContactGrid';
import ContactSection from '../components/ContactSection';
import ContactSectionTitle from '../components/ContactSectionTitle';
import ContactSectionFlatAction from '../components/ContactSectionFlatAction';
import ContactSectionDetail from '../components/ContactSectionDetail';
import Layout from '../components/Layout';

function Contact() {
  return (
    <Layout heroText="Contact Us." hasNoContact isCompact>
      <div className="contact_image">
        <img className="team__image" src="../static/images/contact_img-1.jpg" alt="" />
      </div>
      <ContactGrid>
        <ContactSection>
          <ContactSectionTitle>문의</ContactSectionTitle>
          <ContactSectionFlatAction link="mailto:support@aine.world">
            일반 문의
          </ContactSectionFlatAction>
          <ContactSectionFlatAction link="mailto:business@aine.world?subject=제휴/미디어 관련 문의">
            제휴/미디어 관련 문의
          </ContactSectionFlatAction>
        </ContactSection>
        <ContactSection>
          <ContactSectionTitle>Follow Us</ContactSectionTitle>
          <ContactSectionFlatAction link="https://www.instagram.com/eggshellstory/?hl=ko">
            Instagram
          </ContactSectionFlatAction>
          <ContactSectionFlatAction link="https://www.facebook.com/aineworld/">
            Facebook
          </ContactSectionFlatAction>
          <ContactSectionFlatAction link="https://www.youtube.com/channel/UCej_apm7FZrddfipYnUp0kw/featured?view_as=subscriber">
            YouTube
          </ContactSectionFlatAction>
        </ContactSection>
        <ContactSection>
          <ContactSectionTitle>Find us</ContactSectionTitle>
          <ContactSectionDetail>서울 강남구 테헤란로 427</ContactSectionDetail>
        </ContactSection>
      </ContactGrid>
    </Layout>
  );
}

export default Contact;
