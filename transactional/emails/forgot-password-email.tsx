import * as React from "react";
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

import { siteConfig } from "../../config/site";

interface LinearLoginCodeEmailProps {
  link?: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const ForgotPasswordEmail = ({
  link = "https://nextedgestarter.com/reset-password/sad-asd231s-sasdad",
}: LinearLoginCodeEmailProps) => (
  <Html>
    <Head />
    <Preview>Reset your password</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={`${baseUrl}/logo.png`}
          width="42"
          height="42"
          alt={siteConfig.title}
          style={logo}
        />
        <Heading style={heading}>Reset your password</Heading>
        <Section style={buttonContainer}>
          <Button pY={11} pX={23} style={button} href={link}>
            Reset password
          </Button>
        </Section>
        <Text style={paragraph}>
          This link will only be valid for the next 6 hours. If the button above
          does not work, you can use the url directly:
        </Text>
        <code style={code}>{link}</code>
        <Text style={muted}>
          If you haven't requested a password reset, you can safely ignore this
          email.
        </Text>
        <Hr style={hr} />
        <Link href={baseUrl} style={reportLink}>
          {siteConfig.title}
        </Link>
      </Container>
    </Body>
  </Html>
);

export default ForgotPasswordEmail;

const logo = {
  borderRadius: 21,
  width: 42,
  height: 42,
};

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  width: "560px",
};

const heading = {
  fontSize: "24px",
  letterSpacing: "-0.5px",
  lineHeight: "1.3",
  fontWeight: "400",
  color: "#484848",
  padding: "17px 0 0",
};

const paragraph = {
  margin: "0 0 15px",
  fontSize: "15px",
  lineHeight: "1.4",
  color: "#3c4149",
};

const muted = {
  fontSize: "12px",
  color: "#b4becc",
};

const buttonContainer = {
  padding: "27px 0 27px",
};

const button = {
  backgroundColor: "#000",
  borderRadius: "3px",
  fontWeight: "600",
  color: "#fff",
  fontSize: "15px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
};

const reportLink = {
  fontSize: "14px",
  color: "#b4becc",
};

const hr = {
  borderColor: "#dfe1e4",
  margin: "32px 0 16px",
};

const code = {
  fontFamily: "monospace",
  fontWeight: "700",
  padding: "1px 4px",
  backgroundColor: "#dfe1e4",
  letterSpacing: "-0.3px",
  fontSize: "14px",
  borderRadius: "4px",
  color: "#3c4149",
};
