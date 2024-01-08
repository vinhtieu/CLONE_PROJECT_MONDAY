import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {
    page1: {
      question: "Hey there, what brings you here today?",
      note: "",
      image:
        "https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/signup-right-side-assets-new-flow/what-brings-you-here-today.png",
      visitPurposeRadios: ["Work", "Personal", "School", "Nonprofits"],
      workRoleRadios: [
        "Business owner",
        "Team leader",
        "Team member",
        "Freelancer",
        "Director",
        "C-Level",
        "VP",
      ],
      schoolRoleRadios: [
        "Undergraduate student",
        "Graduate student",
        "Faculty member",
        "Other",
      ],
      nonprofitsRoleRadios: [
        "Board member",
        "Executive",
        "Employee",
        "Volunteer",
        "IT staff",
        "Other",
      ],
    },
    page2: {
      question: "Select what you'd like to manage first",
      note: "You can always add more in the future",
      image:
        "https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/signup-right-side-assets-new-flow/select-what-youd-like-to-manage.png",
      radios: [
        "Marketing",
        "Nonprofits",
        "Legal",
        "HR and Recruiting",
        "Education",
        "PMO",
        "Finance",
        "Design and Creative",
        "Operations",
        "IT",
        "Software development",
        "Sales and CRM",
        "Construction",
        "Product management",
        "Other",
      ],
    },
    page3: {
      question: "Select what you'd like to focus on first",
      note: "Help us tailor the best experience for you",
      image:
        "https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/signup-right-side-assets-new-flow/select-what-youd-like-to-focus-on.png",
      radios: [
        "Requests adn approvals",
        "Content calendars",
        "Social media",
        "CRM",
        "Portfolio management",
        "Media production",
        "Resource management",
        "Project management",
        "Event management",
        "Marketing operations",
        "Email marketing",
        "Creative",
        "Task management",
        "Goals and strategy",
        "Campaign tracking",
        "Strategic planning",
        "Other",
      ],
    },
    page4: {
      question: "One last question, how did you hear about us?",
      note: "",
      image:
        "https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/signup-right-side-assets-new-flow/how-did-you-hear-about-us-with-invite.png",
      radios: [
        "Consultant",
        "Billboard / Public transit ad",
        "TV / Streaming service",
        "Software review sites",
        "Social media (Facebook,Instagram,Reddit,etc)",
        "Search engine (Google, Bing, etc.)",
        "Friend / Colleague",
        "YouTube ad",
        "Audio ad (Podcast,Spotify)",
        "LinkedIn",
        "Other",
      ],
    },
  },
};

const surveyPageSlice = createSlice({
  name: "surveyPage",
  initialState,
  reducers: {},
});

export const {} = surveyPageSlice.actions;

export default surveyPageSlice.reducer;
