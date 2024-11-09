import { render, screen } from "@testing-library/react";
import Footer from "@/components/Footer"; // Adjust the path according to your folder structure
import "@testing-library/jest-dom";

describe("Footer Component", () => {
  test("renders logo image", () => {
    render(<Footer />);
    const logo = screen.getByAltText("Logo of medical");
    expect(logo).toBeInTheDocument();
  });

  test("renders all navigation links", () => {
    render(<Footer />);
    const privacyLink = screen.getByText("Privacy Policy");
    const termsLink = screen.getByText("Terms of Service");
    const contactUsLink = screen.getByText("Contact Us");

    expect(privacyLink).toBeInTheDocument();
    expect(termsLink).toBeInTheDocument();
    expect(contactUsLink).toBeInTheDocument();

    expect(privacyLink).toHaveAttribute("href", "#");
    expect(termsLink).toHaveAttribute("href", "#");
    expect(contactUsLink).toHaveAttribute("href", "/contactus");
  });

  test("renders social media icons", () => {
    render(<Footer />);
    const facebookIcon = screen.getByRole("link", { name: /facebook/i });
    const instagramIcon = screen.getByRole("link", { name: /instagram/i });
    const twitterIcon = screen.getByRole("link", { name: /twitter/i });
    
    expect(facebookIcon).toBeInTheDocument();
    expect(instagramIcon).toBeInTheDocument();
    expect(twitterIcon).toBeInTheDocument();
  });

  test("renders copyright text", () => {
    render(<Footer />);
    const copyrightText = screen.getByText(/© 2024 MediCal. All rights reserved./i);
    expect(copyrightText).toBeInTheDocument();
  });
});