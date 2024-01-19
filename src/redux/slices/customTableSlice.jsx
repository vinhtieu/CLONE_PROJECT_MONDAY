import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  designInquiries: {
    pages: [
      {
        title: "Let's start working together",
        note: "Give your board a name, e.g. marketing plan, sales pipeline, quarterly roadmap...",
        desc: 'In monday.com,"boards" are the place where all your content lives.',
        options: [],
      },
      {
        title: "Let's select the relevant columns for your board",
        note: "Choose from the most popular column types for your work",
        options: [
          {
            label: "Owner",
            id: "owner",
            desc: "Assign accountability to any team member or guest so everyone is aligned on what they need to complete.",
          },
          {
            label: "Status",
            id: "status",
            desc: "Stay up-to-date on the progress and performance of all your tasks so you can optimize quickly.",
          },
          {
            label: "Due date",
            id: "due-date",
            desc: "Visualize deadlines, with your team so nothing falls through the cracks.",
          },
          {
            label: "Budget",
            id: "budget",
            desc: "Set a budget to easily track all spending and expenses as your project progresses.",
          },
          {
            label: "Last updated",
            id: "last-updated",
            desc: "Easily see in one glance when and by who your work was last updated.",
          },
          {
            label: "Files",
            id: "files",
            desc: "Instantly add your files to your board. Edit, comment, and tag any file to keep your team in the loop.",
          },
          {
            label: "Timeline",
            id: "timeline",
            desc: "Visualize how long you and your team have to complete an item or project so everyone is aligned on start and due dates.",
          },
          {
            label: "Notes",
            id: "notes",
            desc: "Jot down all your important notes to keep your work in context and up-to-date.",
          },
          {
            label: "Priority",
            id: "priority",
            desc: "Keep track of your progress by focusing on what matters so you can reach your milestones.",
          },
        ],
      },
      {
        title: "Select one of the items you’d like to manage",
        note: "",
        desc: '"Items" are rows in your board which hold all the relevant information to your tasks, projects, campaigns and more.',
        options: ["Projects", "Tasks"],
      },
      {
        title: "Add a view layout",
        note: "Transform the way you see and manage your work with more unique views. You can always add more later.",
        desc: "Table view is your default layout. Plan, track and manage anything using a visual board.",
        options: ["Table", "Gantt", "Calendar", "Timeline", "Cards", "Kanban"],
      },
      {
        title: "List your projects",
        note: "",
        desc: "",
        options: [],
      },
      {
        title: "Automate your work to save time",
        note: "Turn on the relevant automations for your needs. You can make changes later.",
        desc: "",
        options: [
          "When status changes to done move item to completed",
          "When due date arrives notify me",
          "When status changes notify me",
        ],
      },
    ],
  },
  customData: {
    heading: "",
    columns: [],
    items: "",
    viewLayout: "",
    tasks: [],
    automation: {},
  },
};

const dummyTableSlice = createSlice({
  name: "customTable",
  initialState,
  reducers: {
    addColumns: (state, action) => {
      state.customData.columns.push(action.payload);
    },
    deleteColumns: (state, action) => {
      state.customData.columns.splice(action.payload, 1);
    },
  },
});

export const { addColumns, deleteColumns } = dummyTableSlice.actions;

export default dummyTableSlice.reducer;
