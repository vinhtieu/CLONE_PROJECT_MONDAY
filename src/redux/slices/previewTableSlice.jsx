import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  designInquiries: {
    pages: [
      {
        title: "Let's start working together",
        subtitle:
          "Give your board a name, e.g. marketing plan, sales pipeline, quarterly roadmap...",
        desc: 'In monday.com,"boards" are the place where all your content lives.',
        options: [],
      },
      {
        title: "Let's select the relevant columns for your board",
        subtitle: "Choose from the most popular column types for your work",
        options: [
          {
            label: "Owner",
            value: "owner",
            desc: "Assign accountability to any team member or guest so everyone is aligned on what they need to complete.",
            backgroundColor: "bg-skyBlue",
          },
          {
            label: "Status",
            value: "status",
            desc: "Stay up-to-date on the progress and performance of all your tasks so you can optimize quickly.",
            backgroundColor: "bg-darkPastelGreen",
          },
          {
            label: "Due date",
            value: "due-date",
            desc: "Visualize deadlines, with your team so nothing falls through the cracks.",
            backgroundColor: "bg-yellowGreen",
          },
          {
            label: "Budget",
            value: "budget",
            desc: "Set a budget to easily track all spending and expenses as your project progresses.",
            backgroundColor: "bg-sorbusOrange",
          },
          {
            label: "Last updated",
            value: "last-updated",
            desc: "Easily see in one glance when and by who your work was last updated.",
            backgroundColor: "bg-waterCourseGreen",
          },
          {
            label: "Files",
            value: "files",
            desc: "Instantly add your files to your board. Edit, comment, and tag any file to keep your team in the loop.",
            backgroundColor: "bg-sorbusOrange",
          },
          {
            label: "Timeline",
            value: "timeline",
            desc: "Visualize how long you and your team have to complete an item or project so everyone is aligned on start and due dates.",
            backgroundColor: "bg-mediumPurple",
          },
          {
            label: "Notes",
            value: "notes",
            desc: "Jot down all your important subtitles to keep your work in context and up-to-date.",
            backgroundColor: "bg-tangerine",
          },
          {
            label: "Priority",
            value: "priority",
            desc: "Keep track of your progress by focusing on what matters so you can reach your milestones.",
            backgroundColor: "bg-yellowGreen",
          },
        ],
      },
      {
        title: "Select one of the items you’d like to manage",
        subtitle: "",
        desc: '"Items" are rows in your board which hold all the relevant information to your tasks, projects, campaigns and more.',
        options: [
          { label: "Projects", value: "projects" },
          { label: "Tasks", value: "tasks" },
        ],
      },
      {
        title: "Add a view layout",
        subtitle:
          "Transform the way you see and manage your work with more unique views. You can always add more later.",
        options: [
          {
            label: "Table",
            value: "table",
            desc: "Table view is your default layout. Plan, track and manage anything using a visual board.",
            backgroundColor: "bg-slateBlue",
          },
          {
            label: "Timeline",
            value: "timeline",
            desc: "Stay on track with visual deadlines and timelines.",
            backgroundColor: "bg-sinYellow",
          },

          {
            label: "Gantt",
            value: "gantt",
            desc: "Visualize project milestones and dependencies.",
            backgroundColor: "bg-waterCourseGreen",
          },
          {
            label: "Calendar",
            value: "calendar",
            desc: "See all upcoming content and due dates at a glance.",
            backgroundColor: "bg-roseRed",
          },
          {
            label: "Cards",
            value: "cards",
            desc: "See all your item details in a visual gallery.",
            backgroundColor: "bg-sorbusOrange",
          },
          {
            label: "Kanban",
            value: "kanban",
            desc: "Prioritize and balance work according to capacity.",
            backgroundColor: "bg-royalBlue",
          },
        ],
      },
      {
        title: "List your projects",
        subtitle: "",
        desc: "",
        options: [],
      },
      {
        title: "Automate your work to save time",
        subtitle:
          "Turn on the relevant automations for your needs. You can make changes later.",
        desc: "",
        options: [
          "When status changes to done move item to completed",
          "When due date arrives notify me",
          "When status changes notify me",
        ],
      },
    ],
  },
  data: {
    boardName: "",
    viewLayout: "",
    automation: {},
  },
};

const previewTableSlice = createSlice({
  name: "previewTable",
  initialState,
  reducers: {
    addColumns: (state, action) => {
      state.data.columns.push(action.payload);
    },
    deleteColumns: (state, action) => {
      state.data.columns.splice(action.payload, 1);
    },
    selectViewLayout: (state, action) => {
      state.data.viewLayout = action.payload;
    },
    setBoardName: (state, action) => {
      state.data.boardName = action.payload;
    },
    setItems: (state, action) => {
      state.data.items = action.payload;
    },
  },
});

export const {
  addColumns,
  deleteColumns,
  setBoardName,
  selectViewLayout,
  setItems,
} = previewTableSlice.actions;

export default previewTableSlice.reducer;
