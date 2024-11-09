import { render, screen } from "@testing-library/react";
import FeatureCard from "@/components/FeatureCard"; // Adjust the path to your component
import { LucideIcon, Home } from "lucide-react"; // Assuming Home icon is used for testing
import "@testing-library/jest-dom";

describe("FeatureCard Component", () => {
  test("renders icon, title, and description correctly", () => {
    const mockIcon = <Home data-testid="feature-icon" />;
    const mockTitle = "Test Feature Title";
    const mockDescription = "This is a description for the test feature.";

    render(
      <FeatureCard
        icon={mockIcon}
        title={mockTitle}
        description={mockDescription}
      />
    );

    // Check if the icon is rendered
    const iconElement = screen.getByTestId("feature-icon");
    expect(iconElement).toBeInTheDocument();

    // Check if the title is rendered
    const titleElement = screen.getByText(mockTitle);
    expect(titleElement).toBeInTheDocument();

    // Check if the description is rendered
    const descriptionElement = screen.getByText(mockDescription);
    expect(descriptionElement).toBeInTheDocument();
  });
});